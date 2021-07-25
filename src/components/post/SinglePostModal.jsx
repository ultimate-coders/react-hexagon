import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Post from './Post';
import CommentsList from '../comment/CommentsList';
import NewComment from '../comment/NewComment';

const singlePost = {
  id: '2b6b9b2e-7ae5-4f36-bdb4-01316e50fc64',
  text: 'The is the latest post that you will see',
  created_at: '2021-07-15T15:14:37.841Z',
  am_like: true,
  category: {
    id: 'sdfdsfsd2343232lkn',
    name: 'artist',
  },
  profile: {
    id: '2b59961c-6112-4a7e-8bfe-3947f066fb81',
    first_name: 'wesamalmas',
    last_name: '',
    caption: '',
    profile_picture: {
      id: '',
      link: 'Link to default profile picture',
    },
    user: {
      id: 'ea17b401-b3e7-4b12-9d8d-981b8ac4ebfc',
      username: 'wesamalmas',
      email: 'hexagon0sm@gmail.com',
      last_login: '2021-07-15T15:24:27.113+00:00',
    },
  },
  likes: 0,
  images: [
    {
      id: '47047f6e-985e-41e4-a349-4acfb784c951',
      link: 'https://hexagon-sm.s3.amazonaws.com/1626362076830-DB.png',
    },
    {
      id: 'bb5b693a-fa84-49c9-81c7-78c1cde87581',
      link: 'https://hexagon-sm.s3.amazonaws.com/1626362077152-DB.png',
    },
  ],
};

const postComments = [
  {
    id: 'dfgdkjkjk4j5lk34jk5j4k3j',
    comment: 'nice one',
    created_at: '2021-07-15T15:14:37.841Z',
    post_owner: '2b59961c-6112-4a7e-8bfe-3947f066fb81',
    profile: {
      id: '2b59961c-6112-4a7e-8bfe-3947f066fb81',
      first_name: 'flan',
      last_name: 'alflany',
      profile_picture:
        'https://hexagon-sm.s3.eu-central-1.amazonaws.com/male.jpg',
    },
  },
  {
    id: 'sdfldsj32lkj432kj5k4',
    comment: 'nice one',
    created_at: '2021-07-15T15:14:37.841Z',
    post_owner: '2b59961c-6112-4a7e-8bfe-3947f066fb81',
    profile: {
      id: '2b59961c-6112-4a7e-8bfe-3947f066fb81',
      first_name: 'flan',
      last_name: 'alflany',
      profile_picture:
        'https://hexagon-sm.s3.eu-central-1.amazonaws.com/male.jpg',
    },
  },
  {
    id: '345435l;4;5k43j5k4l3j',
    comment: 'nice one',
    created_at: '2021-07-15T15:14:37.841Z',
    post_owner: '2b59961c-6112-4a7e-8bfe-3947f066fb81',
    profile: {
      id: '2b59961c-6112-4a7e-8bfe-3947f066fb81',
      first_name: 'flan',
      last_name: 'alflany',
      profile_picture:
        'https://hexagon-sm.s3.eu-central-1.amazonaws.com/male.jpg',
    },
  },
  {
    id: '646er345;k454354;kj',
    comment: 'nice one',
    created_at: '2021-07-15T15:14:37.841Z',
    post_owner: '2b59961c-6112-4a7e-8bfe-3947f066fb81',
    profile: {
      id: '2b59961c-6112-4a7e-8bfe-3947f066fb81',
      first_name: 'flan',
      last_name: 'alflany',
      profile_picture:
        'https://hexagon-sm.s3.eu-central-1.amazonaws.com/male.jpg',
    },
  },
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    overflow: 'scroll',
    maxHeight: '100vh'
  },
}));

const SinglePostModal = ({ handleCloseModal, openModal, postId }) => {
  const [post, setPost] = useState(singlePost);
  const [comments, setComments] = useState(postComments);
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <Post post={post} single />
            <CommentsList comments={comments} />
            <NewComment post={post} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SinglePostModal;
