import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button, Input } from "@mui/material";

const ResolutionPage = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [solution, setSolution] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((prev) =>
      prev.map((task) =>
        task.ticketId === id
          ? { ...task, resolutionForm: solution, status: "Completed", file }
          : task
      )
    );

    alert("Resolution submitted! Task moved to History."); 
    navigate("/technician");
  };

  return (
    <Box sx={{ padding: "30px", display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{
          p: 4, 
          width: "500px",
          backgroundColor: "white",
          color: "black",
          fontWeight: "bold"
        }}
      >
        <Typography
          variant="h5"
          mb={3}
          sx={{
            backgroundColor: "teal",
            padding: "10px",
            borderRadius: "10px",
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          Resolve Ticket #{id}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Explain how you solved the issue..."
            multiline
            rows={5}
            fullWidth
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            sx={{ mb: 3 }}
            required
          />

          <Input type="file" onChange={handleFileChange} sx={{ mb: 2 }} />

          <Typography variant="caption" display="block" mb={2}>
            Optional: Upload related files
          </Typography>

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "teal",
              color: "black",
              fontWeight: "bold"
            }}
          >
            Submit Resolution
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ResolutionPage;
