import useFetch from "../../useFetch";
import Bloglist from "./BlogList";

const Home = () => {
  // const handleDeleteBlog = (id, title) => {
  //   console.log(title);
  //   setBlogs(blogs.filter((item) => item.id !== id));
  // };
  const {
    data: blogs,
    loading,
    isError,
  } = useFetch("http://localhost:3006/blogs");

  return (
    <div>
      {isError && <div>Server Internal error</div>}
      {loading && <div>Please wating</div>}
      <Bloglist blogs={blogs} author="Taidev blogs" />
    </div>
  );
};

export default Home;
