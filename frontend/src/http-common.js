import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1/tyres",
  headers: {
    "Content-type": "application/json"
  }
});

// axios library used to set a baseurl that makes it easier to use GET/POST etc requests automatically