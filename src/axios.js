import axios from "axios";

const instance = axios.create({
  baseURL: "https://insta-cbackend.herokuapp.com/api/tasks",
});

export default instance;
