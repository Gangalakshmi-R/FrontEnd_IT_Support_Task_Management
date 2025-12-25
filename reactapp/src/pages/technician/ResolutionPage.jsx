import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Input
} from "@material-ui/core";

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

    setTasks(prev =>
      prev.map(task =>
        task.ticketId === id
          ? { ...task, resolutionForm: solution, status: "Completed", file }
          : task
      )
    );

    alert("Resolution submitted! Task moved to History.");
    navigate("/technician");
  };

  return (
    <Box style={{ padding: 27, display: "flex", justifyContent: "center" }}>
      <Paper style={{ padding: 28, width: 500 }}>
        <Typography
          variant="h6"
          style={{
            backgroundColor: "teal",
            padding: 8,
            borderRadius: 10,
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 24
          }}
        >
          Resolve Ticket #{id}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Explain how you solved the issue..."
            multiline
            rows={6}
            fullWidth
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            variant="outlined"
            sx={{ mb: 3 }}
            required
          />

          <br /><br />
          <Input type="file" onChange={handleFileChange} />

          <Typography variant="caption" display="block" style={{ margin: "12px 0" }}>
            Optional: Upload related files
          </Typography>
          <br /><br />
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "teal", color: "black", fontWeight: "bold" }}
          >
            Submit Resolution
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ResolutionPage;
