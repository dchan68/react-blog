import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [name, setName] = useState("Mario");
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleClick = () => {
    setName("Luigi");
  };
  const handleClickAgain = (name) => {
    console.log("Hello " + name);
  };

  //using useEffect to simulate loading data and then remove <div>Loading...</div> once data has been fetched
  useEffect(function () {
    setTimeout(function () {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
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
