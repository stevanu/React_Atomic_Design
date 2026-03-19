import axios from "axios";
import jwt_decode from "jwt_decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token); // <-- panggil callback dengan token
    })
    .catch((err) => {
      callback(false, err); // <-- panggil callback dengan error
    });
};

export const getUsername = (token) => {
  const decode = jwt_decode(token);
  return decode.username;
};
