import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import TopPage from "./components/TopPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />}>
          {/* <Route path="blogs" element={<Blogs />}>
            <Route path=":id" element={<Blog />} />
          </Route> */}
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
