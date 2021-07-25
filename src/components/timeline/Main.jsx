import { useEffect, useState } from 'react';
import NewPost from '../post/NewPost';
import PostsList from '../post/PostsList';
import { CATEGORY_POSTS_URL, TIMELINE_POSTS_URL } from '../../urls';
import useAjax from '../../hooks/useAjax';
import { getToken } from '../../helpers';

const Main = (props) => {
  const [results, reload, loading, error] = useAjax();

  const getAllPosts = (ulr) => {
    (async () => {
      const token = await getToken();
      reload(ulr, 'get', null, token);
    })();
  };

  useEffect(() => {
    if (props.category) {
      getAllPosts(`${CATEGORY_POSTS_URL}/${props.category.name}`);
    } else {
      getAllPosts(TIMELINE_POSTS_URL);
    }
  }, [props.category]);

  return (
    <div>
      <NewPost />
      {loading ? 'loading' : <PostsList posts={results?.data.results} />}
    </div>
  );
};

export default Main;
