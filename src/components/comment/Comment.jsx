import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import ClearIcon from '@material-ui/icons/Clear';
import './Comment.scss';
import { COMMENT_URL } from '../../urls';
import { getToken } from '../../helpers';
import useAjax from '../../hooks/useAjax';
import { useSelector } from 'react-redux';

const Comment = ({ comment, onChangeComments }) => {
  const [results, reload, loading, error] = useAjax();
  const { userDetails } = useSelector(mapStateToProps);

  const onDeleteComment = () => {
    (async() => {
      const token = await getToken();
      reload(`${COMMENT_URL}/${comment.id}`, 'delete', null, token);
      onChangeComments('delete', comment.id);
    })();
  }

  return (
    <div className='comment_container'>
      <Avatar
        className='post_header_avatar'
        alt={`${comment.profile.first_name} ${comment.profile.last_name}`}
        src={comment.profile.profile_picture}
      />
      <div className='comment_right'>
        <div className='comment_username'>{`${comment.profile.first_name} ${comment.profile.last_name}`}</div>
        <div className='comment_text'>{comment.comment}</div>
        <div className='comment_created_at'>
          {moment(comment.created_at).fromNow()}
        </div>
      </div>
      {(userDetails.id === comment.profile.id || userDetails.id === comment.post_owner) && <ClearIcon onClick={onDeleteComment} className='comment_clear_icon' />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails.user,
});

export default Comment;
