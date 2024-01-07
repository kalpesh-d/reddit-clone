import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPost } from "../feature/currentPost/currentPostSlice";
import removeT3FromUrl from "../utils/removeT3FromUrl";

function CurrentPost({ permalink }) {
  const currentPost = useSelector((state) => state.currentPost.currentPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentPost(removeT3FromUrl(permalink)));
  }, [dispatch, permalink]);

  return <div>Post</div>;
}

export default CurrentPost;
