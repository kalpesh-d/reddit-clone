import Navbar from "../components/Navbar";
import CurrentPost from "../components/CurrentPost";
import { useLocation } from "react-router-dom";

function PostPage() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <CurrentPost permalink={pathname} />
    </>
  );
}

export default PostPage;
