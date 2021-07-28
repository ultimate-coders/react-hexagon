import Loader from 'react-loader-spinner';
import Post from './Post';


const PostsList = ({postsList, onChangePostsList}) => {

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
      <div>No posts to display</div>
    )
  }

    return (
        <div>
            {
                postsList.map(post => <Post onChangePostsList={onChangePostsList} key={post.id} post={post} />)
            }
        </div>
    )
}

export default PostsList;