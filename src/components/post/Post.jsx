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

const Post = ({ post }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='post_container'>
      <SinglePostModal
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        postId={post.Id}
      />
      <div className='post_header'>
        <Avatar
          className='post_header_avatar'
          alt={post.profile.user.username}
          src={post.profile.profile_picture.link}
        />
        <div className='post_header_user_info'>
          <span className='post_header_username'>
            {post.profile.user.username}
          </span>
          <span className='post_header_created_at'>
            {moment(post.created_at).fromNow()}
          </span>
        </div>
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
            <MenuItem onClick={handleClose}>Update</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </div>
      </div>
      <div className='post_text_content'>{post.text}</div>
      {post.images[0] && (
        <div onClick={handleOpenModal} className='post_images_container'>
          <img className='post_image' src={post.images[0].link} alt='' />
        </div>
      )}
      <div className='post_footer'>
        <div className='post_footer_likes_container'>
          <FavoriteBorderIcon
            color={post.am_like ? 'secondary' : 'action' }
            className='favorite_icon'
          />
          <span>{post.likes}</span>
        </div>
        <div onClick={handleOpenModal} className='post_footer_comment_container'>
          <ChatBubbleOutlineIcon className='chat_bubble_icon' />
          <span>comment</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
