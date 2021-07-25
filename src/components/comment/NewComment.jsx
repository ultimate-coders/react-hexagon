import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import './NewComment.scss'


const profileImage = 'https://avatars.githubusercontent.com/u/71489065?v=4';
const userName = 'Wesam almasri';

const NewComment = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('comment submitted');
  }

  return (
    <form onSubmit={onSubmit} className='new_comment_container'>
      <Avatar
        alt={userName}
        src={profileImage}
      />
      <input className='new_comment_text' type="text" />
      <button className='new_comment_button' type='submit'>
        <SendIcon className='new_comment_send_icon' />
      </button>
    </form>
  );
};

export default NewComment;
