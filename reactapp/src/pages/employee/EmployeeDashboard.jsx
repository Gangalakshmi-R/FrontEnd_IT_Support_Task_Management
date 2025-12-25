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
  Snackbar,
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
} from "@material-ui/core";

import Rating from "@material-ui/lab/Rating";
import MuiAlert from "@material-ui/lab/Alert";

import AssignmentIcon from "@material-ui/icons/Assignment";
import HistoryIcon from "@material-ui/icons/History";
import BugReportIcon from "@material-ui/icons/BugReport";
import SendIcon from "@material-ui/icons/Send";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const EmployeeDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("new");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  return (
    <Box style={{ display: "flex", height: "100vh" }}>
      {/* SIDEBAR */}
      <Paper style={{ width: 240, padding: 8, backgroundColor: "teal" }}>
        <Box display="flex" alignItems="center">
          <Avatar style={{ marginRight: 8 }}>E</Avatar>
          <Typography style={{ fontWeight: "bold" }}>Employee</Typography>
        </Box>

        <Divider />

        <List>
          <ListItem button selected={selectedSection === "new"} onClick={() => setSelectedSection("new")}>
            <BugReportIcon />
            <ListItemText primary="New Issue" />
          </ListItem>

          <ListItem button selected={selectedSection === "progress"} onClick={() => setSelectedSection("progress")}>
            <AssignmentIcon />
            <ListItemText primary="Progressing Issues" />
          </ListItem>

          <ListItem button selected={selectedSection === "history"} onClick={() => setSelectedSection("history")}>
            <HistoryIcon />
            <ListItemText primary="History" />
          </ListItem>
        </List>
      </Paper>

{/* MAIN */}
<Box style={{ flex: 1, padding: 16 }}>
{selectedSection === "new" && (
<Paper style={{ padding: 32 }}>
<Typography style={{ fontWeight: "bold" }}>Submit New Issue</Typography>

<TextField fullWidth label="Employee Name" style={{ margin: "16px 0" }} />
<TextField fullWidth label="Employee ID" style={{ marginBottom: 16 }} />
<TextField fullWidth multiline rows={5} label="Issue Description" />

<Button
variant="contained"
style={{ backgroundColor: "teal", color: "black", marginTop: 16 }}
endIcon={<SendIcon />}
onClick={() => setSnackbarOpen(true)}
>
Submit
</Button>

<Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={() => setSnackbarOpen(false)}>
<Alert severity="success">Issue submitted successfully!</Alert>
</Snackbar>
</Paper>
)}

{selectedSection === "progress" && (
<Paper style={{ padding: 16 }}>
<Typography style={{ fontWeight: "bold" }}>Progressing Issues</Typography>

<TableContainer>
<Table size="small">
<TableHead>
<TableRow>
<TableCell>Ticket No</TableCell>
<TableCell>Issue</TableCell>
<TableCell>Status</TableCell>
<TableCell>Feedback</TableCell>
</TableRow>
</TableHead>

<TableBody>
<TableRow>
<TableCell>T-10234</TableCell>
<TableCell>System not booting</TableCell>
<TableCell>Solved</TableCell>
<TableCell>
<Button
variant="contained"
style={{ backgroundColor: "teal", color: "black" }}
onClick={() => setFeedbackOpen(true)}
>
Feedback
</Button>
</TableCell>
</TableRow>
</TableBody>
</Table>
</TableContainer>

<Dialog open={feedbackOpen} onClose={() => setFeedbackOpen(false)}>
<DialogTitle>Feedback</DialogTitle>
<DialogContent>
<Rating value={rating} onChange={(e, v) => setRating(v)} />
<TextField
fullWidth
multiline
rows={3}
label="Comments"
value={feedback}
onChange={(e) => setFeedback(e.target.value)}
/>
</DialogContent>
<DialogActions>
<Button onClick={() => setFeedbackOpen(false)}>Cancel</Button>
<Button
variant="contained"
style={{ backgroundColor: "teal", color: "black" }}
onClick={() => setFeedbackOpen(false)}
>
Submit
</Button>
</DialogActions>
</Dialog>
</Paper>
)}

{selectedSection === "history" && (
<Paper style={{ padding: 16 }}>
<Typography style={{ fontWeight: "bold" }}>History</Typography>
</Paper>
)}
</Box>
</Box>
);
};

export default EmployeeDashboard;