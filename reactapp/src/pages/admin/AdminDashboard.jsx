import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@material-ui/core";

import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import EngineeringIcon from "@material-ui/icons/Build";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AdminPanelSettingsIcon from "@material-ui/icons/Security";

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("employees");

  const employees = [
    {
      name: "Geetha",
      issues: [
        { ticketId: "T1", issue: "Login Issue", date: "2025-12-19" },
        { ticketId: "T3", issue: "Page crash", date: "2025-12-20" }
      ]
    },
    {
      name: "Raja",
      issues: [{ ticketId: "T2", issue: "Email Issue", date: "2025-12-19" }]
    },
    {
      name: "Suresh",
      issues: [{ ticketId: "T5", issue: "Printer Issue", date: "2025-12-21" }]
    }
  ];

  const technicians = [
    { name: "Technician 1", allocatedIssues: 3 },
    { name: "Technician 2", allocatedIssues: 1 },
    { name: "Technician 3", allocatedIssues: 4 },
    { name: "Technician 4", allocatedIssues: 2 },
    { name: "Technician 5", allocatedIssues: 0 }
  ];

  const issues = [
    {
      ticketId: "T1",
      issue: "Login Issue",
      type: "assigned",
      technician: "Technician 1",
      status: "In Progress",
      resolutionForm: "Pending",
      feedback: "Pending"
    },
    {
      ticketId: "T2",
      issue: "Email Issue",
      type: "assigned",
      technician: "Technician 2",
      status: "Solved",
      resolutionForm: "Submitted",
      feedback: "Good"
    },
    { ticketId: "T3", issue: "Network Issue", type: "unassigned" },
    {
      ticketId: "T4",
      issue: "System Crash",
      type: "assigned",
      technician: "Technician 3",
      status: "In Progress",
      resolutionForm: "Pending",
      feedback: "Pending"
    },
    { ticketId: "T5", issue: "Printer Not Working", type: "unassigned" }
  ];

  return (
    <Box style={{ display: "flex", height: "calc(100vh - 60px)" }}>

      {/* SIDEBAR */}
      <Paper style={{ width: 250, padding: 16, backgroundColor: "teal" }}>
        <Box display="flex" alignItems="center" style={{ marginBottom: 16 }}>
          <Avatar style={{ marginRight: 8 }}>A</Avatar>
          <Typography variant="h6">Admin</Typography>
        </Box>

        <Divider />

        <List>
          <ListItem
            button
            selected={selectedSection === "employees"}
            onClick={() => setSelectedSection("employees")}
          >
            <PeopleIcon style={{ marginRight: 8 }} />
            <ListItemText primary="Employees" />
          </ListItem>

          <ListItem
            button
            selected={selectedSection === "technicians"}
            onClick={() => setSelectedSection("technicians")}
          >
            <EngineeringIcon style={{ marginRight: 8 }} />
            <ListItemText primary="Technicians" />
          </ListItem>

          <ListItem
            button
            selected={selectedSection === "issues"}
            onClick={() => setSelectedSection("issues")}
          >
            <AssignmentIcon style={{ marginRight: 8 }} />
            <ListItemText primary="All Issues" />
          </ListItem>
        </List>
      </Paper>

      {/* MAIN CONTENT */}
      <Box style={{ flex: 1, padding: 16, overflowY: "auto" }}>

        {/* HEADER */}
        <Paper
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            marginBottom: 16
          }}
        >
          <Typography style={{ fontWeight: "bold" }}>
            Admin 1
          </Typography>
          <AdminPanelSettingsIcon style={{ fontSize: 40, color: "blue" }} />
          <IconButton>
            <InboxIcon />
          </IconButton>
        </Paper>

        {/* EMPLOYEES */}
        {selectedSection === "employees" && (
          <Paper style={{ padding: 24 }}>
            <Typography variant="h6" style={{ marginBottom: 16 }}>
              Employees & Issues
            </Typography>

            {employees.map(emp => (
              <Paper
                key={emp.name}
                elevation={1}
                style={{ marginBottom: 24, padding: 16 }}
              >
                <Typography style={{ fontWeight: "bold", marginBottom: 8 }}>
                  Employee: {emp.name}
                </Typography>

                <Table size="small">
                  <TableHead style={{ backgroundColor: "#f0f4f8" }}>
                    <TableRow>
                      <TableCell align="center"><b>Ticket ID</b></TableCell>
                      <TableCell><b>Issue</b></TableCell>
                      <TableCell align="center"><b>Date</b></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {emp.issues.length > 0 ? (
                      emp.issues.map(issue => (
                        <TableRow key={issue.ticketId} hover>
                          <TableCell align="center">{issue.ticketId}</TableCell>
                          <TableCell>{issue.issue}</TableCell>
                          <TableCell align="center">{issue.date}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={3} align="center">
                          <Typography color="textSecondary">
                            No issues reported
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Paper>
            ))}
          </Paper>
        )}

        {/* TECHNICIANS */}
        {selectedSection === "technicians" && (
          <Paper style={{ padding: 24 }}>
            <Typography variant="h6" style={{ marginBottom: 16 }}>
              Technicians & Workload
            </Typography>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Allocated Issues</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {technicians.map(tech => (
                  <TableRow key={tech.name}>
                    <TableCell>{tech.name}</TableCell>
                    <TableCell>{tech.allocatedIssues}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )}

        {/* ISSUES */}
        {selectedSection === "issues" && (
          <Paper style={{ padding: 24 }}>
            <Typography variant="h6" style={{ marginBottom: 16 }}>
              All Issues
            </Typography>

            {issues.map(issue => (
              <Paper key={issue.ticketId} style={{ padding: 16, marginBottom: 16 }}>
                <Typography><b>Ticket:</b> {issue.ticketId}</Typography>
                <Typography><b>Issue:</b> {issue.issue}</Typography>
                <Typography><b>Type:</b> {issue.type}</Typography>

                {issue.type === "assigned" ? (
                  <>
                    <Typography>Technician: {issue.technician}</Typography>
                    <Typography>Status: {issue.status}</Typography>
                    <Typography>Resolution: {issue.resolutionForm}</Typography>
                    <Typography>Feedback: {issue.feedback}</Typography>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 8 }}
                  >
                    Assign Technician
                  </Button>
                )}
              </Paper>
            ))}
          </Paper>
        )}

      </Box>
    </Box>
  );
};

export default AdminDashboard;