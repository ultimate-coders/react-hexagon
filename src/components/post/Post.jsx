import { useState } from 'react';
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SinglePostModal from './SinglePostModal';
import './Post.scss';
import { useSelector } from 'react-redux';
import DeleteModal from './DeleteModal';
import { useHistory } from 'react-router-dom';
import useAjax from '../../hooks/useAjax';
import { INTERACTION_URL } from '../../urls';
import { getToken } from '../../helpers';


const Post = ({ post, onChangePostsList, single }) => {
  const { userDetails } = useSelector(mapStateToProps);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [postInfo, setPostInfo] = useState(post);
  const [results, reload, loading, error] = useAjax();
  const history = useHistory();

  const handleOpenModal = () => {
    if(!single) setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onOpenProfile = () => {
    history.push(`profile/${postInfo.profile.user.username}`);
  }

  const onLikePress = () => {
    (async() => {
      const token = await getToken();
      reload(INTERACTION_URL, 'post', {post_id: postInfo.id}, token);
      setPostInfo(prev => ({
        ...prev,
        am_like: !prev.am_like,
        likes: prev.am_like ? prev.likes -1 : prev.likes + 1
      }));
    })();
  }

  return (
    <div className='post_container'>
      <SinglePostModal
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        postDetails={postInfo}
      />
      <DeleteModal 
        handleOpenModal={handleOpenDeleteModal}
        handleCloseModal={handleCloseDeleteModal}
        openModal={openDeleteModal}
        afterDeletePost={onChangePostsList}
        postId={postInfo.id}
      />
      <div className='post_header'>
        <Avatar
          className='post_header_avatar'
          alt={postInfo.profile.user.username}
          src={postInfo.profile.profile_picture.link}
          onClick={onOpenProfile}
        />
        <div className='post_header_user_info'>
          <span onClick={onOpenProfile} className='post_header_username'>
            {postInfo.profile.user.username}
          </span>
          <span className='post_header_created_at'>
            {moment(postInfo.created_at).fromNow()}
          </span>
        </div>
        {userDetails.id === postInfo.profile.id && (
          <div className='post_header_drop_down_list'>
          <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* <MenuItem onClick={handleClose}>Update</MenuItem> */}
            <MenuItem onClick={handleOpenDeleteModal}>Delete</MenuItem>
          </Menu>
        </div>
        )}
      </div>
      <div className='post_text_content'>{postInfo.text}</div>
      {postInfo?.images[0]?.link && (
        <div onClick={handleOpenModal} className='post_images_container'>
          <img className='post_image' src={postInfo.images[0].link} alt='' />
        </div>
      )}
      <div className='post_footer'>
        <div onClick={onLikePress} className='post_footer_likes_container'>
          <FavoriteBorderIcon
            color={postInfo.am_like ? 'secondary' : 'action' }
            className='favorite_icon'
          />
          <span>{postInfo.likes}</span>
        </div>
        <div onClick={handleOpenModal} className='post_footer_comment_container'>
          <ChatBubbleOutlineIcon className='chat_bubble_icon' />
          <span>comment</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails.user,
});


export default Post;
