import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("Users"));
  const name = users.map((i) => i.Name).toString();

  return (
    <div>
      <h2>Welcom {name}</h2>
      <table style={{ margin: "50px auto 50px auto" }}>
        <thead>
          <h3>{name} details</h3>
          <tr>
            <th>Username</th>
            <th>Phonenumber</th>
            <th>E-mail id</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i) => {
            return (
              <tr>
                <td>{i.Name}</td>
                <td>{i.Num}</td>
                <td>{i.Email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        // style={{ marginTop: "50px" }}
        className="btn btn-primary"
        onClick={() => {
          localStorage.removeItem("Users");
          navigate("/");
        }}
      >
        Main
      </button>
    </div>
  );
}

export default User;
