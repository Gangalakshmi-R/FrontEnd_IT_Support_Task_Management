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
import Alert from "@material-ui/lab/Alert";

import AssignmentIcon from "@material-ui/icons/Assignment";
import HistoryIcon from "@material-ui/icons/History";
import BugReportIcon from "@material-ui/icons/BugReport";
import SendIcon from "@material-ui/icons/Send";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
    overflow: "hidden"
  },
  sidebar: {
    width: 240,
    padding: 8, // p:1
    backgroundColor: "teal",
    color: "black"
  },
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8 // mb:1
  },
  avatar: {
    marginRight: 8,
    backgroundColor: "white",
    color: "black"
  },
  content: {
    flex: 1,
    padding: 12, // p:1.5
    overflowY: "auto",
    backgroundColor: "#f5f5f5"
  },
  paperNewIssue: {
    padding: 40 // p:5  ✅ VERY IMPORTANT — keeps the box look
  },
  paperSmall: {
    padding: 16 // p:2
  },
  mb1: { marginBottom: 8 },
  mb3: { marginBottom: 24 },
  mt1: { marginTop: 8 },
  tealBtn: {
    backgroundColor: "teal",
    color: "black"
  },
  tableHead: {
    backgroundColor: "#e0f2f1"
  }
}));

const EmployeeDashboard = () => {
  const classes = useStyles();

  const [selectedSection, setSelectedSection] = useState("new");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  return (
    <Box className={classes.root}>
      {/* SIDEBAR */}
      <Paper square className={classes.sidebar}>
        <Box className={classes.sidebarHeader}>
          <Avatar className={classes.avatar}>E</Avatar>
          <Typography style={{ fontWeight: "bold" }}>Employee</Typography>
        </Box>

        <Divider />

        <List dense>
          <ListItem
            button
            selected={selectedSection === "new"}
            onClick={() => setSelectedSection("new")}
          >
            <BugReportIcon style={{ marginRight: 8 }} />
            <ListItemText primary="New Issue" />
          </ListItem>

          <ListItem
            button
            selected={selectedSection === "progress"}
            onClick={() => setSelectedSection("progress")}
          >
            <AssignmentIcon style={{ marginRight: 8 }} />
            <ListItemText primary="Progressing Issues" />
          </ListItem>

          <ListItem
            button
            selected={selectedSection === "history"}
            onClick={() => setSelectedSection("history")}
          >
            <HistoryIcon style={{ marginRight: 8 }} />
            <ListItemText primary="History" />
          </ListItem>
        </List>
      </Paper>

      {/* MAIN CONTENT */}
      <Box className={classes.content}>
        {/* NEW ISSUE */}
        {selectedSection === "new" && (
          <Paper className={classes.paperNewIssue}>
            <Typography style={{ fontWeight: "bold", marginBottom: 8 }}>
              Submit New Issue
            </Typography>

            <br />

            <TextField
              fullWidth
              label="Employee Name"
              className={classes.mb3}
            />
            <TextField
              fullWidth
              label="Employee ID"
              className={classes.mb3}
            />
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Issue Description"
              style={{ marginBottom: 8 }}
            />

            <br /><br />

            <Button
              size="small"
              variant="contained"
              className={classes.tealBtn}
              endIcon={<SendIcon />}
              onClick={() => setSnackbarOpen(true)}
            >
              Submit
            </Button>

            <br /><br />

            <Snackbar
              open={snackbarOpen}
              autoHideDuration={2000}
              onClose={() => setSnackbarOpen(false)}
            >
              <Alert severity="success">
                Issue submitted successfully!
              </Alert>
            </Snackbar>
          </Paper>
        )}

        {/* PROGRESSING ISSUES */}
        {selectedSection === "progress" && (
          <Paper className={classes.paperSmall}>
            <Typography style={{ fontWeight: "bold", marginBottom: 8 }}>
              Progressing Issues
            </Typography>

            <TableContainer>
              <Table size="small">
                <TableHead className={classes.tableHead}>
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
                  <TableRow>
                    <TableCell>T-10234</TableCell>
                    <TableCell>System not booting</TableCell>
                    <TableCell>12/12/25</TableCell>
                    <TableCell>Arun</TableCell>
                    <TableCell>14/12/25</TableCell>
                    <TableCell>
                      <Typography style={{ color: "green" }}>
                        Solved
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="contained"
                        className={classes.tealBtn}
                        onClick={() => setFeedbackOpen(true)}
                      >
                        Feedback
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* FEEDBACK DIALOG */}
            <Dialog
              open={feedbackOpen}
              onClose={() => setFeedbackOpen(false)}
            >
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
                  label="Comments"
                  className={classes.mt1}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setFeedbackOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  className={classes.tealBtn}
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
          <Paper className={classes.paperSmall}>
            <Typography style={{ fontWeight: "bold" }}>
              History
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default EmployeeDashboard;