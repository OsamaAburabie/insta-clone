// import './App.css';
import React, { useEffect, useState } from "react";
import "./style.css";
import Mynav from "./components/Nav";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Story from "./components/Story";
import Data from "./StoryAr";
import axios from "./axios";
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DataInput from "./components/DataInput";
import Pusher from "pusher-js";

// const posts = Data.map((item) => (
//   <Post
//     key={item.id}
//     name={item.name}
//     img={item.img}
//     likes={item.likes}
//     punchline={item.punchline}
//     cname={item.cname}
//     cpline={item.cpline}
//     ctime={item.ctime}
//     imgp={item.imgp}
//   />
// ));

function Home() {
  async function fetchData() {
    await axios
      .get("http://localhost:8000/api/tasks")
      .then((req) => setPost(req.data));
  }
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetchData();
    const pusher = new Pusher("3f1c53e7604a0a23b911", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("tasks");
    channel.bind("inserted", (data) => {
      fetchData();
    });
  }, []);
  console.log(post);

  return (
    <div>
      <DataInput />
      <Story />
      {/* {posts} */}
      {post.map((post) => (
        <Post
          key={post._id}
          name={post.name}
          img={post.img}
          likes={post.likes}
          punchline={post.punshline}
          imgp={post.imgPost}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <HashRouter basename="/">
      <div className="big__posts">
        <Mynav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
