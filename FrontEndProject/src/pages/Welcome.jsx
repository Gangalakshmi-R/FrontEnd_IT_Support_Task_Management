import React from "react";

const Welcome = () => {
  return (
    <div>
      <div style={containerStyle}>

        <h1 style={titleStyle}>IT Support HelpDesk Portal</h1>
        <br />
        <p style={descriptionStyle}>
          The IT Support HelpDesk System is a web-based application designed to
          manage and resolve technical issues within an organization efficiently.
        </p>

        <p style={descriptionStyle}>
          Employees can raise support tickets for their IT-related problems, while
          administrators and technicians can track, assign, and resolve issues
          in a structured manner.
        </p>

        <p style={descriptionStyle}>
          This system improves communication, reduces response time, and ensures
          smooth IT operations across the organization.
        </p>
      </div>

      <div>
        <p style={NoteStyle}>
         Contact:
         Gangalakshmi Raja,
         6381934970
         </p>
      </div>

    </div>

  );
};

/* ---------- Styles ---------- */

const containerStyle = {
  backgroundColor: "white",
  borderRadius: "2cap",
  marginTop: "50px", // space below navbar
  padding: "20px",
  textAlign: "center",
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
};
const NoteStyle = {
  backgroundColor: "teal",
  borderRadius: "2cap",
  border:"2px solid black",
  marginTop: "38px", // space below navbar
  padding: "10px",
  textAlign: "center",
  maxWidth: "300px",
  marginLeft: "auto",
  marginRight: "auto",
};
const titleStyle = {
  backgroundColor: "teal",
  color: "black",
  padding: "10px",
  borderRadius: "30px",
  fontSize: "24px",
  fontWeight: "bold",
  border: "2px solid black",
};

const descriptionStyle = {
  color: "teal",
  marginTop: "20px",
  fontSize: "16px",
  lineHeight: "1.6",
};


export default Welcome;
