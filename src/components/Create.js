import React, { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form>
        <label>Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        />
        <label>Blog Body: </label>
        <textarea
          requried
          value={body}
          onChange={function (e) {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={function (e) {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;
