import { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import useAjax from '../../hooks/useAjax';
import { CATEGORY_URL } from '../../urls';
import { getToken } from '../../helpers';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


const LeftSideBar = (props) => {
  const [results, reload, loading, error] = useAjax();
  const { userDetails } = useSelector(mapStateToProps)
  const history = useHistory();

  const getAllCategories = () => {
    (async () => {
      const token = await getToken();
      reload(CATEGORY_URL, 'get', null, token);
    })();
  };

  const onNavigate = (index) => {
    if(index === 0){
      history.push(`profile/${userDetails.user.username}`);
    } else if (index === 1) {
      history.push('messages');
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <List>
        {['My profile', 'Messenger'].map(
          (text, index) => (
            <ListItem onClick={() => onNavigate(index)} button key={text}>
              <ListItemIcon>
                  {index === 0 && <AccountCircleOutlinedIcon />}
                  {index === 1 && <ChatBubbleOutlineOutlinedIcon />}
                  {index === 2 && <NotificationsNoneOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
        <div>Categories</div>
      <List>
        {
          loading ? (
            <div>Loading</div>
          ) : (
            results?.data.map((category, index) => (
              <ListItem onClick={() => props.setCategory(category)} button key={category.id}>
                <ListItemIcon>
                    <CategoryOutlinedIcon color={props.category === category ? 'secondary' : 'action'} />
                </ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItem>
            ))
          )
        }
      </List>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails.user,
});


export default LeftSideBar;
