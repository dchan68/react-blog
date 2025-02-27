import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("Mario");
  const [blogs, setBlogs] = useState([
    {
      title: "New new website",
      body: "lorem ipsum...",
      author: "mario",
      id: 1,
    },
    { title: "Welcome party!", body: "lorem ipsum...", author: "luigi", id: 2 },
    { title: "React!", body: "lorem ipsum...", author: "yoshi", id: 3 },
  ]);

  const handleClick = () => {
    setName("Luigi");
  };
  const handleClickAgain = (name) => {
    console.log("Hello " + name);
  };
  return (
    <div className="home">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        );
      })}

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
