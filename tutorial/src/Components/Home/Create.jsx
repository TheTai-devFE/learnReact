import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [blog, setBlog] = useState({});
  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!blog.title || !blog.comment || !blog.author) return;

    (async () => {
      const body = { id: Math.floor(Math.random() * 10), ...blog };
      const res = await fetch("http://localhost:3006/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data) {
        console.log(data);
        navigation(-1);
      }
    })();
  };

  return (
    <div className="create">
      <h1 className="create-title">ADD NEW BLog </h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={blog.title || ""}
          onChange={(e) => setBlog({ ...blog, ["title"]: e.target.value })}
        />
        <label>Comment</label>
        <textarea
          type="text"
          value={blog.comment || ""}
          onChange={(e) => setBlog({ ...blog, ["comment"]: e.target.value })}
        ></textarea>
        <label>Author</label>
        <select
          value={blog.author || ""}
          onChange={(e) => setBlog({ ...blog, ["author"]: e.target.value })}
        >
          <option value="">Choose Author</option>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button
          disabled={!blog.title || !blog.comment || !blog.author}
          className="button"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Create;
