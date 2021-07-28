import "./info.scss";

import { PROFILE_POSTS_URL, PROFILE_URL } from "../../urls";
import NewPost from "../post/NewPost";
import PostsList from "../post/PostsList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useAjax from "../../hooks/useAjax";
import { getToken } from "../../helpers";

const ProfilePosts = () => {
  const [posts, setPosts] = useState([]);
  const [results, reload] = useAjax();
  const [checking, setChecking] = useState(true);
  const [token, setToken] = useState();
  const [profile, setprofile] = useState();
  const state = useSelector(mapStateToProps);

  const profile_name = window.location.pathname.split("/")[2];
  const url = `${PROFILE_URL}/${profile_name}`;
  getToken().then((results) => setToken(results));

  const getProfile = () => {
    reload(url, "get", null, token);
  };
  useEffect(() => {
    (async () => {
      await getProfile();
    })();
  }, [token]);

  useEffect(() => {
    if (results && results.data.id) {
      setprofile(results.data);
    }
    if (results && results.data.results) {
      setPosts(results.data.results);
    }
  }, [results]);

  useEffect(() => {
    getAllPosts();
  }, [profile]);
  
  const getAllPosts = () => {
    console.log(profile);
    if (profile && profile.id) {
      (async () => {
        const url = `${PROFILE_POSTS_URL}/${profile.id}`;
        reload(url, "get", null, token);
        setChecking(false);
      })();
    }
  };

  const onChangePostsList = (postId) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  const onAddNewPosts = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div>
      {console.log(profile && profile.id === state.user)}
      {profile && profile.id === state.user ? (
        <NewPost onAddNewPosts={onAddNewPosts} />
      ) : (
        <div></div>
      )}
      {checking ? (
        "loading"
      ) : (
        <PostsList onChangePostsList={onChangePostsList} postsList={posts} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userDetails.user.id,
});
export default ProfilePosts;
