import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [data, setData] = useState({
    Name: "",
    Pass: "",
  });

  const users = JSON.parse(localStorage.getItem("Users"));
  const name = users.map((i) => i.Name).toString();
  const pass = users.map((i) => i.Pass).toString();
  const num = users.map((i) => i.Num).toString();

  // console.log(name, num, pass);

  const change = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!data.Name) {
      validationErrors.Name = "unsername is required";
    } else if (data.Name.toString() !== name && data.Name.toString() !== num) {
      validationErrors.Name = "username or phonenumber not matched";
    }
    if (!data.Pass) {
      validationErrors.Pass = "password is required";
    } else if (data.Pass.toString() !== pass) {
      validationErrors.Pass = "password not matched";
    }

    // console.log(data.Name.toString());

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setData({
        Name: "",
        Pass: "",
      });
      navigate("/User");
    }
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <label>Username (or) Phonenumber</label>
      <input
        className="input"
        type="text"
        name="Name"
        placeholder="Enter Username (or) phonenumber"
        value={data.Name}
        onChange={change}
      />
      {errors.Name && <span className="span">{errors.Name}</span>}
      <label>Password</label>
      <input
        className="input"
        type="password"
        name="Pass"
        placeholder="Enter Password"
        value={data.Pass}
        onChange={change}
      />
      {errors.Pass && <span className="span">{errors.Pass}</span>}
      <button className="btn btn-primary" onClick={submit}>
        Login
      </button>
    </div>
  );
}

export default Login;
