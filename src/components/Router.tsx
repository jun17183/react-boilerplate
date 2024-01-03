import { Route, Routes, Navigate } from "react-router-dom";

// homepage
import Home from "pages/home";

// post
import PostList from "pages/posts";
import PostDetail from "pages/posts/detail";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";

// user
import Profile from "pages/profile";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/"               element={<Home />} />
            <Route path="/posts"          element={<PostList />} />
            <Route path="/posts/:id"      element={<PostDetail />} />
            <Route path="/posts/new"      element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile"        element={<Profile />} />
            <Route path="*"               element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/login"          element={<LoginPage />} />
            <Route path="/signup"         element={<SignupPage />} />
            <Route path="*"               element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
