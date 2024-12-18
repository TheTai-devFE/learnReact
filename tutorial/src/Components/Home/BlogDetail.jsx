import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const {
    data: blog,
    isError,
    loading,
  } = useFetch(`http://localhost:3006/blogs/${id}`);

  const handleDeleteBlog = () => {
    (async () => {
      const res = await fetch(`http://localhost:3006/blogs/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        navigation("/");
      } else {
        console.error("Failed to delete blog:", res.status);
      }
    })();
  };

  return (
    <div className="blogs-details">
      {isError && <div>Server Internal error</div>}
      {loading && <div>Please wating</div>}
      {blog && (
        <div>
          <h1>{blog?.title}</h1>
          <h4>{blog?.author}</h4>
          <div>{blog?.comment}</div>
        </div>
      )}
      <button onClick={handleDeleteBlog} className="button">
        Delete
      </button>
    </div>
  );
};

export default BlogDetail;
