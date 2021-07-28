import { useEffect, useState } from 'react';
import NewPost from '../post/NewPost';
import PostsList from '../post/PostsList';
import { CATEGORY_POSTS_URL, TIMELINE_POSTS_URL } from '../../urls';
import useAjax from '../../hooks/useAjax';
import { getToken } from '../../helpers';
import Loader from '../loader/loeader';

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
        <Loader/>
      ) : (
        <PostsList
          onChangePostsList={onChangePostsList}
          postsList={posts}
        />
      )}
    </div>
  );
};

export default Main;
