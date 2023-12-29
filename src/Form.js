import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [inputdata, setInputdata] = useState({
    Name: "",
    Num: "",
    Email: "",
    Pass: "",
    Cpass: "",
  });

  const changeHandle = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!inputdata.Name.trim()) {
      validationErrors.Name = "username is required";
    }
    if (!inputdata.Num.trim()) {
      validationErrors.Num = "phonenumber is required";
    } else if (inputdata.Num.length < 10 || inputdata.Num.length > 10) {
      validationErrors.Num = "enter correct phonenumber";
    }
    if (!inputdata.Email.trim()) {
      validationErrors.Email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(inputdata.Email)) {
      validationErrors.Email = "enter correct email formate";
    }
    if (!inputdata.Pass.trim()) {
      validationErrors.Pass = "pasword is required";
    } else if (inputdata.Pass.length < 6) {
      validationErrors.Pass = "password must 6 digit";
    }
    if (!inputdata.Cpass.trim()) {
      validationErrors.Cpass = "confirm pasword is required";
    } else if (inputdata.Cpass !== inputdata.Pass) {
      validationErrors.Cpass = "password not matched";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      var Users = [];
      Users.push(inputdata);
      localStorage.setItem("Users", JSON.stringify(Users));
      navigate("/Login");
      setInputdata({ Name: "", Num: "", Email: "", Pass: "", Cpass: "" });
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleChange}>
        <h2>Register</h2>
        <label>Username</label>
        <input
          className="input"
          type="text"
          name="Name"
          placeholder="Enter Username"
          value={inputdata.Name}
          onChange={changeHandle}
        />
        {errors.Name && <span className="span">{errors.Name}</span>}
        <label>Phone number</label>
        <input
          className="input"
          type="number"
          name="Num"
          placeholder="Enter Phonenumber"
          value={inputdata.Num}
          onChange={changeHandle}
        />
        {errors.Num && <span className="span">{errors.Num}</span>}
        <label>E-mail</label>
        <input
          className="input"
          type="email"
          name="Email"
          placeholder="Enter E-mail id"
          value={inputdata.Email}
          onChange={changeHandle}
        />
        {errors.Email && <span className="span">{errors.Email}</span>}
        <label>Password</label>
        <input
          className="input"
          type="password"
          name="Pass"
          placeholder="Enter Password"
          value={inputdata.Pass}
          onChange={changeHandle}
        />
        {errors.Pass && <span className="span">{errors.Pass}</span>}
        <label>Confirm Password</label>
        <input
          className="input"
          type="password"
          name="Cpass"
          placeholder="Enter Conform Password"
          value={inputdata.Cpass}
          onChange={changeHandle}
        />
        {errors.Cpass && <span className="span">{errors.Cpass}</span>}
        <button button className="btn btn-primary w-auto">
          Sign Up
        </button>
      </form>
    </div>
  );
}

/*  
      <button
        className="btn btn-primary w-auto"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show === true ? "Show table" : "Hide table"}
      </button>

      {}

      {!show && (
        <div>
          <table width="50%" border={2} cellPadding={"20px"}>
            <tbody>
              <tr>
                <th style={{ width: "5%" }}>Sl.no</th>
                <th>Name</th>
                <th style={{ width: "15%" }}>Roll no</th>
              </tr>

              {inputarr.map((item, id) => {
                return (
                  <tr>
                    <td>{id + 1}</td>
                    <td>{item.Name}</td>
                    <td>{item.Rollno}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      */

export default Form;
