import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-44-211-147-114.compute-1.amazonaws.com:8080",
  headers: {
    "Content-type": "application/json"
  }
});