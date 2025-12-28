import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  const cardVariants = {
    rest: { scale: 1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" },
    hover: { scale: 1.08, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div style={pageContainerStyle}>
      {/* Title */}
      <h1 style={titleStyle}>IT Support HelpDesk Portal</h1>

      {/* Animated Cards */}
      <div style={cardsContainerStyle}>
        <motion.div
          style={cardStyle}
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          whileTap="hover"
          transition={{ type: "spring", stiffness: 300, damping: 20 }} 
        >
          <p style={cardTextStyle}>
            The IT Support HelpDesk System is a web-based application designed to
            manage and resolve technical issues within an organization efficiently.
          </p>
        </motion.div>

        <motion.div
          style={cardStyle}
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          whileTap="hover"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <p style={cardTextStyle}>
            Employees can raise support tickets for their IT-related problems,
            while administrators and technicians can track, assign, and resolve
            issues in a structured manner.
          </p>
        </motion.div>

        <motion.div
          style={cardStyle}
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          whileTap="hover"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <p style={cardTextStyle}>
            This system improves communication, reduces response time, and ensures
            smooth IT operations across the organization.
          </p>
        </motion.div>
      </div>

      {/* Contact Box */}
      <div style={contactContainerStyle}>
        <h6 style={contactStyle}>Contact: Gangalakshmi Raja </h6>
       <h6 style={contactStyle}> Email: glr16.engineer@gmail.com</h6>
      </div>
    </div>
  );
};

/* ---------- Styles ---------- */

const pageContainerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "40px 50px",
  textAlign: "center",
};

const titleStyle = {
  backgroundColor: "teal",
  color: "white",
  padding: "10px 20px",
  borderRadius: "30px",
  fontSize: "28px",
  fontWeight: "bold",
  border: "2.5px solid black",
  display: "inline-block",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
};

const cardsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap",
  margin: "40px 0",
};

const cardStyle = {
  backgroundColor: "white",
  borderRadius: "15px",
  padding: "25px",
  flex: "1 1 300px",
  maxWidth: "350px",
  border: "3px solid teal",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
};

const cardTextStyle = {
  color: "teal",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
};

const contactContainerStyle = {
  marginTop: "10px", 
};

const contactStyle = {
  backgroundColor: "teal",
  color: "white",
  borderRadius: "10px",
  border: "2px solid black",
  padding: "7px 0px",
  textAlign: "center",
  maxWidth: "270px",
  margin: "10px auto",
  fontSize: "14px",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
};

export default Welcome;
