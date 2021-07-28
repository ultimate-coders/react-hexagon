import Loader from 'react-loader-spinner';
import Post from './Post';


const PostsList = ({postsList, onChangePostsList, onUpdatePostsList}) => {

  if(!postsList || postsList.length === 0){
    return (
      <Loader
            type="Puff"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}
            color="#00BFFF"
        />

    )
  }

  if(postsList.length === 0){
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>No posts to display</div>
    )
  }

    return (
        <div>
            {
                postsList.map(post => <Post onChangePostsList={onChangePostsList} onUpdatePostsList={onUpdatePostsList} key={post.id} post={post} />)
            }
        </div>
    )
}

export default PostsList;