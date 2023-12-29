import Form from "./Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <div className="container">
      <h1>Trusty Bytes (P)ltd.,</h1>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
