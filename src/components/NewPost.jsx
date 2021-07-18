import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Avatar from '@material-ui/core/Avatar';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Button from 'react-bootstrap/Button';
import './NewPost.scss';

const profileImage = 'https://avatars.githubusercontent.com/u/71489065?v=4';
const userName = 'Wesam almasri';

const NewPost = () => {
  const postImages = useRef(null);

  const onSubmit = (e) => {
      e.preventDefault();
      console.log('Submitted');
  }

  return (
    <Form onSubmit={onSubmit} className='new_post_container'>
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
            color='secondary'
            onClick={(e) => postImages.current.click()}
          />
          <Form.Text>Photos</Form.Text>
        </div>
        <div>
            <Button type='submit' variant="success">Success</Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default NewPost;
