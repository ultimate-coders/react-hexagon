import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import './NewComment.scss';
import { useSelector } from 'react-redux';
import { COMMENT_URL } from '../../urls';
import useAjax from '../../hooks/useAjax';
import { getToken } from '../../helpers';
import { useEffect } from 'react';

const NewComment = ({ post, onChangeComments }) => {
  const { userDetails } = useSelector(mapStateToProps);
  const [results, reload, loading, error] = useAjax(
    COMMENT_URL,
    'delete',
    null
  );

  const onSubmit = (e) => {
    e.preventDefault();

    (async() => {
      const token = await getToken();
      reload(COMMENT_URL, 'post', {post_id: post.id, comment: e.target.comment.value}, token,);
      e.target.reset();
    })();

  };

  useEffect(() => {
    if(results){
      onChangeComments('new', results.data);
    }
  }, [results])

  return (
    <form onSubmit={onSubmit} className='new_comment_container'>
      <Avatar
        alt={userDetails.user.username}
        src={userDetails.profile_picture.link}
      />
      <input name='comment' className='new_comment_text' type='text' />
      <button className='new_comment_button' type='submit'>
        <SendIcon className='new_comment_send_icon' />
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails.user,
});

export default NewComment;
