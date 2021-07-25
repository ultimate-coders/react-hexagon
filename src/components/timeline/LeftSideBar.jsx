import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';

const categories = [
  {
    id: 'sdfjh32kj4h3k2jh4kj32hjk32n',
    name: 'artist',
  },
  {
    id: '432432432j32432kh4j3hjhjh',
    name: 'Electronics',
  },
  {
    id: '324k3jh342h5jhjh64h6j4l',
    name: 'Programming',
  },
  {
    id: '2343l2432jh4j32hj4h32kj',
    name: 'Adventure',
  },
];

const LeftSideBar = () => {
  return (
    <div>
      <List>
        {['My profile', 'Messenger', 'Notifications'].map(
          (text, index) => (
            <ListItem button key={text}>
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
        {categories.map((category, index) => (
          <ListItem button key={category.id}>
            <ListItemIcon>
                <CategoryOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LeftSideBar;