import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  TextField,
  Button,
  Rating,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import HistoryIcon from "@mui/icons-material/History";
import BugReportIcon from "@mui/icons-material/BugReport";
import SendIcon from "@mui/icons-material/Send";

const EmployeeDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("new");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const issuesData = [
  {
    ticketNo: "T-10234",
    issue: "System not booting",
    submittedDate: "12/12/25",
    technician: "Arun",
    solvedDate: "14/12/25",
    status: "Solved"
  },
  {
    ticketNo: "T-10235",
    issue: "Keyboard not working",
    submittedDate: "13/12/25",
    technician: "Suresh",
    solvedDate: "",
    status: "In Progress"
  }
];


  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* SIDEBAR */}
      <Paper
        square
        sx={{
          width: 240,
          p: 1,
          backgroundColor: "teal",
          color: "black"
        }}
      >
        <Box display="flex" alignItems="center" mb={1}>
          <Avatar sx={{ mr: 1, bgcolor: "white", color: "black" }}>E</Avatar>
          <Typography fontWeight="bold">Employee</Typography>
        </Box>

        <Divider />

        <List dense>
          <ListItem button selected={selectedSection === "new"} onClick={() => setSelectedSection("new")}   sx={{ cursor: "pointer" }}>
            <BugReportIcon sx={{ mr: 1 }} />
            <ListItemText primary="New Issue" />
          </ListItem>

          <ListItem button selected={selectedSection === "progress"} onClick={() => setSelectedSection("progress")}   sx={{ cursor: "pointer" }}>
            <AssignmentIcon sx={{ mr: 1 }} />
            <ListItemText primary="Progressing Issues" />
          </ListItem>

          <ListItem button selected={selectedSection === "history"} onClick={() => setSelectedSection("history")}   sx={{ cursor: "pointer" }}>
            <HistoryIcon sx={{ mr: 1 }} />
            <ListItemText primary="History" />
          </ListItem>
        </List>
      </Paper>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          flex: 1,
          p: 1.5,
          overflowY: "auto",
          backgroundColor: "#f5f5f5"
        }}
      >
        {/* NEW ISSUE */}
        {selectedSection === "new" && (
          <Paper sx={{ p: 5 }}>
            <Typography fontWeight="bold" mb={1}>
              Submit New Issue
            </Typography>
<br />
            <TextField fullWidth size="medium" label="Employee Name" sx={{ mb: 3 }} />
            <TextField fullWidth size="medium" label="Employee ID" sx={{ mb: 3 }} />
            <TextField fullWidth size="medium" multiline rows={5} label="Issue Description" sx={{ mb: 1 }} />
<br /><br />
            <Button
              size="small"
              variant="contained"
              sx={{ backgroundColor: "teal", color: "black" }}
              endIcon={<SendIcon />}
              onClick={() => setSnackbarOpen(true)}
            >
              Submit
            </Button>
<br /><br />
            <Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={() => setSnackbarOpen(false)}>
              <Alert severity="success">Issue submitted successfully!</Alert>
            </Snackbar>
          </Paper>
        )}

        {/* PROGRESSING ISSUES */}
        {selectedSection === "progress" && (
          <Paper sx={{ p: 2 }}>
            <Typography fontWeight="bold" mb={1}>
              Progressing Issues
            </Typography>

            <TableContainer>
              <Table size="small">
                <TableHead sx={{ backgroundColor: "#e0f2f1" }}>
                  <TableRow>
                    <TableCell>Ticket No</TableCell>
                    <TableCell>Issue</TableCell>
                    <TableCell>Submitted</TableCell>
                    <TableCell>Technician</TableCell>
                    <TableCell>Solved</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Feedback</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
  {issuesData.map((issue, index) => (
    <TableRow key={index}>
      <TableCell>{issue.ticketNo}</TableCell>
      <TableCell>{issue.issue}</TableCell>
      <TableCell>{issue.submittedDate}</TableCell>
      <TableCell>{issue.technician}</TableCell>
      <TableCell>{issue.solvedDate || "-"}</TableCell>
      <TableCell>
        <Typography
          color={issue.status === "Solved" ? "green" : "orange"}
        >
          {issue.status}
        </Typography>
      </TableCell>
      <TableCell>
        {issue.status === "Solved" && (
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "teal", color: "black" }}
            onClick={() => setFeedbackOpen(true)}
          >
            Feedback
          </Button>
        )}
      </TableCell>
    </TableRow>
  ))}
</TableBody>

              </Table>
            </TableContainer>

            {/* FEEDBACK DIALOG */}
            <Dialog open={feedbackOpen} onClose={() => setFeedbackOpen(false)}>
              <DialogTitle>Feedback</DialogTitle>
              <DialogContent>
                <Rating
                  value={rating}
                  onChange={(e, val) => setRating(val)}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                  label="Comments"
                  sx={{ mt: 1 }}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setFeedbackOpen(false)}>Cancel</Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "teal", color: "black" }}
                  onClick={() => setFeedbackOpen(false)}
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
        )}

        {/* HISTORY */}
        {selectedSection === "history" && (
          <Paper sx={{ p: 2 }}>
            <Typography fontWeight="bold">History</Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default EmployeeDashboard;
