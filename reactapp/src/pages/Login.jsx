import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
//import building from "../assets/building.jpg";

const Login = () => {
 const { role } = useParams();
 const navigate = useNavigate();

 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");

 const users = {
  admin: { username: "admin", password: "admin123" },
  technician: { username: "tech", password: "tech123" },
  employee: { username: "emp", password: "emp123" }
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (
   username === users[role].username &&
   password === users[role].password
  ) {
   navigate(`/${role}`);
  } else {
   setError("Invalid username or password");
  }
 };

 return (
  <div style={{ minHeight: "100vh" }}>
   <div
    style={{
     textAlign: "center",
     marginTop: "60px",
     paddingBottom: "80px"
    }}
   >
    {/* Welcome Box */}
    <h3
     style={{
      color: "black",
      backgroundColor: "teal",
      textAlign: "center",
      width: "220px",
      borderRadius: "10px",
      margin: "20px auto",
      padding: "10px",
      fontWeight: "bold"
     }}
    >
     Welcome {role?.toUpperCase()}
    </h3>


    {/* Login Box */}
    <div
     style={{
      backgroundColor: "white",
      width: "300px",
      margin: "auto",
      padding: "12px",
      borderRadius: "10px",
      boxShadow: "2px 6px 12px rgba(24, 113, 123, 0.2)",
      color: "black",
      fontWeight: "bold"
     }}
    >
     <h4>{role.toUpperCase()} Login</h4>

     <form onSubmit={handleSubmit}>
      <label>Username</label><br />
      <input
       style={{
        width: "60%",
        padding: "6px",
        marginTop: "5px",
        borderRadius: "8px",
        border: "2px solid teal"
       }}
       type="text"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <label>Password</label><br />
      <input
       style={{
        width: "60%",
        padding: "6px",
        marginTop: "5px",
        borderRadius: "8px",
        border: "2px solid teal"
       }}
       type="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      {error && (
       <p style={{ color: "red", fontWeight: "bold" }}>[Error - You need to specify the message]</p>
      )}

      <button
       style={{
        width: "40%",
        padding: "8px",
        backgroundColor: "teal",
        color: "black",
        cursor: "pointer",
        borderRadius: "10px",
        fontWeight: "bold"
       }}
       type="submit"
      >
       Login
      </button>
     </form>

     <br />

     <h5>
      New user?{" "}
      <Link to="/register" style={{ color: "teal", fontWeight: "bold" }}>
       Register here
      </Link>
     </h5>

     <hr />

     <p style={{ fontSize: "12px" }}>
      Demo Login <br />
      {users[role].username} / {users[role].password}
     </p>
    </div>
   </div>
  </div>
 );
};

export default Login;
