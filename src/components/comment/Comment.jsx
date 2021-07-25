import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import ClearIcon from '@material-ui/icons/Clear';
import './Comment.scss';

const Comment = ({ comment }) => {
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
      <ClearIcon className='comment_clear_icon' />
    </div>
  );
};

export default Comment;
