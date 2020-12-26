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
    const newName = "Group 2";
    const newPostImg =
      "https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png";
    if (inputPost && inputImg !== "") {
      let newJSON = await {
        punshline: newItem,
        imgPost: newImg,
        name: newName,
        img: newPostImg,
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
