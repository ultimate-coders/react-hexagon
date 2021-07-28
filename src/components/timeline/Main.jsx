import { useEffect, useState } from 'react';
import NewPost from '../post/NewPost';
import PostsList from '../post/PostsList';
import { CATEGORY_POSTS_URL, TIMELINE_POSTS_URL } from '../../urls';
import useAjax from '../../hooks/useAjax';
import { getToken } from '../../helpers';
import Loader from 'react-loader-spinner';


const Main = (props) => {
  const [posts, setPosts] = useState(null);
  const [results, reload] = useAjax();
  const [checking, setChecking] = useState(true);

  const getAllPosts = (ulr) => {
    (async () => {
      const token = await getToken();
      reload(ulr, 'get', null, token);
      setChecking(false);
    })();
  };

  const onChangePostsList = (postId) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
  };

  const onUpdatePostsList = (postData) => {
    setPosts(prev => prev.map(post => {
      if(postData.id === post.id){
        return postData;
      }
      return post;
    }));
  };

  const onAddNewPosts = (post) => {
    setPosts(prev => [post, ...prev]);
  };
  
  useEffect(() => {
    if (props.category) {
      getAllPosts(`${CATEGORY_POSTS_URL}/${props.category.name}`);
    } else {
      getAllPosts(TIMELINE_POSTS_URL);
    }
  }, [props.category]);

  useEffect(() => {
    setPosts(results?.data.results);
  }, [results])
  
  return (
    <div>
      <NewPost onAddNewPosts={onAddNewPosts} />
      {checking ? (
        <Loader
            type="Puff"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}
            color="#00BFFF"
        />

      ) : (
        <PostsList
          onChangePostsList={onChangePostsList}
          onUpdatePostsList={onUpdatePostsList}
          postsList={posts}
        />
      )}
    </div>
  );
};

export default Main;
