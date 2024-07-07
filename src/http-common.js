import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-100-27-212-203.compute-1.amazonaws.com:8080",
  headers: {
    "Content-type": "application/json"
  }
});