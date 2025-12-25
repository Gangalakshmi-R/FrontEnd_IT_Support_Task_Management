import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
 const navigate = useNavigate();

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [empId, setEmpId] = useState("");
 const [gender, setGender] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
   alert("Passwords do not match");
   return;
  }

  const data = { name, email, empId, gender, password };
  //console.log("Registered User:", data);
  alert("Registration successful!");
  navigate(-1);
 };

 return (
  <div
   style={{
    textAlign: "center",
    marginTop: "30px",
    paddingBottom: "80px",
    maxHeight: "70vh",
    overflowY: "auto"
   }}
  >
   {/* Register Card */}
   <div
    style={{
     backgroundColor: "white",
     width: "300px",
     padding: "20px",
     borderRadius: "10px",
     boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
     margin: "auto",
     color: "black",
     fontWeight: "bold"
    }}
   >
    <h2 style={{ color: "black", backgroundColor: "teal", padding: "7px", borderRadius: "10px" }}>
     Register
    </h2>

    <form onSubmit={handleSubmit}>
     <label>Name</label><br />
     <input
      style={inputStyle}
      value={name}
      onChange={(e) => setName(e.target.value)}
     /><br /><br />

     <label>Email</label><br />
     <input
      style={inputStyle}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     /><br /><br />

     <label>Employee ID</label><br />
     <input
      style={inputStyle}
      value={empId}
      onChange={(e) => setEmpId(e.target.value)}
     /><br /><br />

     <label>Gender</label><br />
     
     <input
      type="radio"
      name="gender"
      value="Male"
      onChange={(e) => setGender(e.target.value)}
     /> Male 
       
     <input
      type="radio"
      name="gender"
      value="Female"
      onChange={(e) => setGender(e.target.value)}
     /> Female
     <br /><br />

     <label>Password</label><br />
     <input
      style={inputStyle}
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     /><br /><br />

     <label>Confirm Password</label><br />
     <input
      style={inputStyle}
      type="password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
     /><br /><br />

     <button
      type="submit"
      style={{
       width: "40%",
       padding: "8px",
       backgroundColor: "teal",
       color: "black",
       border: "none",
       cursor: "pointer",
       borderRadius: "10px",
       fontWeight: "bold"
      }}
     >
      Register
     </button>
    </form>
   </div>
  </div>
 );
};

const inputStyle = {
 width: "60%",
 padding: "6px",
 marginTop: "5px",
 borderRadius: "8px",
 border: "1px solid teal",
 fontWeight: "bold"
};

export default Register;
