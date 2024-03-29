import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Routes>
      <Route
        path="/r/:subreddit/comments/:name/:title"
        element={<PostPage />}
      />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
