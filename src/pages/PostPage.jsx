import { useParams } from "react-router-dom";

function PostPage() {
  const { permalink } = useParams();

  return (
    <div>
      <h2>Post Page</h2>
      <p>Permalink: {permalink}</p>
    </div>
  );
}

export default PostPage;
