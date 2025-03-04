import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  function handleClick() {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(function () {
      navigate("/");
    });
  }
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>
            {blog.title}
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete Blog</button>
          </h2>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
