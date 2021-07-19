import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import './NewComment.scss'


const profileImage = 'https://avatars.githubusercontent.com/u/71489065?v=4';
const userName = 'Wesam almasri';

const NewComment = () => {
  return (
    <div className='new_comment_container'>
      <Avatar
        alt={userName}
        src={profileImage}
      />
      <input className='new_comment_text' type="text" />
      <SendIcon className='new_comment_send_icon' />
    </div>
  );
};

export default NewComment;
