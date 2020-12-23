import React, { useState } from "react";
import "../style.css";
import axios from "axios";
function DataInput() {
  const [inputPost, setInputPost] = useState();
  const [inputImg, setInputImg] = useState();
  const AddItem = async (e) => {
    e.preventDefault();
    const newItem = inputPost;
    const newImg = inputImg;
    if (newItem !== "") {
      let newJSON = await {
        punshline: newItem,
        imgPost: newImg,
      };
      axios.post("http://localhost:8000/api/tasks", newJSON).then(() => {});
      setInputImg("");
      setInputPost("");
    }
  };
  console.log(inputPost);
  console.log(inputImg);

  return (
    <div className="DataIn__container">
      <form onSubmit={AddItem}>
        <input
          value={inputPost}
          type="text"
          placeholder="whats in your mind"
          onChange={(e) => setInputPost(e.target.value)}
        />
        <input
          value={inputImg}
          type="text"
          placeholder="Image Url"
          onChange={(e) => setInputImg(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default DataInput;
