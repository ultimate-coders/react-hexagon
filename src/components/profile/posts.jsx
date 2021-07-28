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
    console.log(profile_name !== state.first_name,state.first_name);
    if(profile_name !== state.first_name)
    {(async () => {
      await getProfile();
    })();}
    console.log(state.profile);
    setprofile(state.profile );
  }, [token]);

  useEffect(() => {
    if (results && results.data.id) {
      setprofile(results.data);
    }
    if (results && results.data.results) {
      console.log(results.data.results);
      setPosts(results.data.results);
    }
  }, [results]);

  useEffect(() => {
    console.log(888888);
    getAllPosts();
  }, [profile]);

  const getAllPosts = () => {
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
        {profile && profile.id === state.user ? 
        <NewPost onAddNewPosts={onAddNewPosts} />
        :<div></div>
        }
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
  first_name: state.userDetails.user.first_name,
  profile:state.userDetails.user
});
export default ProfilePosts;
