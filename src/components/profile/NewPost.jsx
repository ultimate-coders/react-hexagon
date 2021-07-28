import { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Avatar from '@material-ui/core/Avatar';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Button from 'react-bootstrap/Button';
import '../post/NewPost.scss';
import { useSelector } from 'react-redux';
import useAjax from '../../hooks/useAjax';
import { getToken } from '../../helpers';
import { CATEGORY_URL, POST_URL } from '../../urls';
import axios from 'axios';

const profileImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&usqp=CAU';
const userName = 'Wesam almasri';

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
let errorMessage;
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

  // const getAllCategories = () => {
  //   (async () => {
  //     const token = await getToken();
  //     reload(CATEGORY_URL, 'get', null, token);
  //   })();
  // };

  return (
    <Form style={{width: '98.3%', margin:'10px auto'}} onSubmit={onSubmit} className='new_post_container profile'>
      <Form.Group className='new_post_first_row' controlId='formTextInput'>
        <Avatar className='new_post_avatar' alt={userName} src={profileImage} />
        <Form.Control
          className='new_post_text_area'
          as='textarea'
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
            onChange={(e) => console.log(e.target.files)}
          />
          <PhotoLibraryIcon
            className='photo_library_icon'
            color='success'
            onClick={(e) => postImages.current.click()}
          />
          <Form.Text>Photos</Form.Text>
        </div>
        <div>
            <Button type='submit' variant="success">Share</Button>
        </div>
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails.user,
});

export default NewPost;
