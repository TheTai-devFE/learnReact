import { useState } from "react";
import { Link } from "react-router-dom";

const Bloglist = (props) => {
  const { blogs, author } = props;

  const [txtSearch, setTxtSearch] = useState("");

  return (
    <div className="blog-list">
      <div className="d-flex justify-content-between align-items">
        <h2>{author}</h2>
        <input
          placeholder="Search blog"
          style={{ width: "300px" }}
          type="text"
          value={txtSearch || ""}
          onChange={(e) => setTxtSearch(e.target.value)}
        />
      </div>

      {blogs &&
        blogs.map((item) => (
          <div className="blog-reviews" key={item.id}>
            <Link to={`/blogs/${item.id}`}>
              <h2>{item.title}</h2>
              <div className="line-clamp">{item.comment}</div>
            </Link>
          </div>
        ))}
    </div>

    // <div className="Bloglist">
    //   {blogs &&
    //     blogs.map((item) => (
    //       <Link to={`/blog/${item.id}`} key={item.id} className="blog-reviews">
    //         <h2>{item.title}</h2>
    //         <p>{item.comment}</p>
    //         <button onClick={() => handleDeleteBlog(item.id, item.title)}>
    //           Delete
    //         </button>
    //       </Link>
    //     ))}
    // </div>
  );
};

export default Bloglist;
