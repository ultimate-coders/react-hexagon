import { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Avatar from '@material-ui/core/Avatar';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Button from 'react-bootstrap/Button';
// import '../post/NewPost.scss';
import { useSelector } from 'react-redux';
import useAjax from '../../hooks/useAjax';
import { getToken } from '../../helpers';
import { CATEGORY_URL, POST_URL } from '../../urls';
import axios from 'axios';

const NewPost = ({ onAddNewPosts }) => {
  const postImages = useRef(null);
  const { userDetails } = useSelector(mapStateToProps);
  const [images, setImages] = useState(null);
  const [text, setText] = useState('');
  const [category, setCategory] = useState();
  const [results, reload, loading, error] = useAjax();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    (async () => {
      setSubmitting(true);
      const formData = new FormData();
      
      if (images?.length > 0) {
        formData.append('image', images[0], images[0].name);
      }

      formData.append('text', text);
      formData.append('category_id', category || results?.data[0].id);
      
      const token = await getToken();

      const newPostResponse = await axios({
        method: 'post',
        url: POST_URL,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
      }).catch((e) => null);
      if(newPostResponse){
        onAddNewPosts(newPostResponse.data);
      }
      setSubmitting(false);
    })();
  };

  const getAllCategories = () => {
    (async () => {
      const token = await getToken();
      reload(CATEGORY_URL, 'get', null, token);
    })();
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Form onSubmit={onSubmit} className='new_post_container'>
      <Form.Group className='new_post_first_row' controlId='formTextInput'>
        <Avatar
          className='new_post_avatar'
          alt={userDetails.user.username}
          src={userDetails.profile_picture.link}
        />
        <Form.Control
          className='new_post_text_area'
          required
          as='textarea'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's in your mind?"
        />
      </Form.Group>
      <Form.Group className='new_post_second_row' controlId='formImageInput'>
        <div>
          <Form.Control
            className='image_file_input'
            ref={postImages}
            style={{ display: 'none' }}
            type='file'
            multiple
            onChange={(e) => setImages(e.target.files)}
          />
          <PhotoLibraryIcon
            className='photo_library_icon'
            color='secondary'
            onClick={(e) => postImages.current.click()}
          />
          <Form.Text>Photos</Form.Text>
        </div>
        <select
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
          className='form-control select_input'
          size='lg'
        >
          <option>Category</option>
          {results?.data.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <div>
          <Button type='submit' variant='success'>
            {submitting ? 'Sending' : 'Share'}
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails.user,
});

export default NewPost;
// {"mode":"full","isActive":false}