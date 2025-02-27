import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [name, setName] = useState("Mario");
  const [blogs, setBlogs] = useState(null);

  const handleClick = () => {
    setName("Luigi");
  };
  const handleClickAgain = (name) => {
    console.log("Hello " + name);
  };

  useEffect(function () {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => {
            return blog.author === "mario";
          })}
          title="Mario's Blogs"
        />
      )}
      <button
        onClick={() => {
          setName("Tommy");
        }}
      >
        Change Name
      </button>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          handleClickAgain("Mario");
        }}
      >
        Click Me Again
      </button>
    </div>
  );
}

export default Home;
