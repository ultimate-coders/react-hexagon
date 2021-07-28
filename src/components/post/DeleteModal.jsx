import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import useAjax from '../../hooks/useAjax';
import { useEffect } from 'react';
import { POST_URL } from '../../urls';
import { getToken } from '../../helpers';
import Popup from '../popup';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '20px'
  },
  label: {
    marginBottom: '20px'
  }
}));

const DeleteModal = ({ handleCloseModal, openModal, postId, afterDeletePost }) => {
  const classes = useStyles();
  const [results, reload, loading, error, setError] = useAjax();

  const deletePost = () => {
    (async() => {
      const token = await getToken();
    reload(`${POST_URL}/${postId}`, 'delete', null, token);
    })();
  }

  useEffect(() => {
    if(results){
      handleCloseModal();
      afterDeletePost(postId);
    }
  }, [results])

  return (
    <div>
      <Popup title='Error' message={error} show={() => error && error !== 'Invalid Login'} setError={setError} />
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
            <div className={classes.label}>Are you sure to delete the post?</div>
            <Button onClick={deletePost} variant="contained" color="secondary">Yes</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteModal;
