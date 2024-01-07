import Navbar from "../components/Navbar";
import CurrentPost from "../components/CurrentPost";
import { useLocation } from "react-router-dom";

function PostPage() {
  const location = useLocation();
  const permalink = location.pathname;

  return (
    <>
      <Navbar />
      <CurrentPost permalink={permalink} />
    </>
  );
}

export default PostPage;
