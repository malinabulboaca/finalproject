import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate();
  };
};

export default Blog;
