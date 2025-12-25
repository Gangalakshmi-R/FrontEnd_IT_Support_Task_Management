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
import EngineeringIcon from "@material-ui/icons/Engineering";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AdminPanelSettingsIcon from "@material-ui/icons/Security";

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("employees");

  const employees = [
    { name: "Geetha", issues: [{ ticketId: "T1", issue: "Login Issue", date: "2025-12-19" }] }
  ];

  const technicians = [
    { name: "Technician 1", allocatedIssues: 3 }
  ];

  const issues = [
    { ticketId: "T1", issue: "Login Issue", type: "assigned", technician: "Technician 1", status: "In Progress" }
  ];

  return (
    <Box style={{ display: "flex", height: "100vh" }}>
      <Paper style={{ width: 250, padding: 16, backgroundColor: "teal" }}>
        <Box display="flex" alignItems="center">
          <Avatar>A</Avatar>
          <Typography style={{ marginLeft: 8 }}>Admin</Typography>
        </Box>

        <Divider />

        <List>
          <ListItem button onClick={() => setSelectedSection("employees")}>
            <PeopleIcon />
            <ListItemText primary="Employees" />
          </ListItem>

          <ListItem button onClick={() => setSelectedSection("technicians")}>
            <EngineeringIcon />
            <ListItemText primary="Technicians" />
          </ListItem>

<ListItem button onClick={() => setSelectedSection("issues")}>
<AssignmentIcon />
<ListItemText primary="All Issues" />
</ListItem>
</List>
</Paper>

<Box style={{ flex: 1, padding: 16 }}>
<Paper style={{ display: "flex", justifyContent: "space-between", padding: 16 }}>
<Typography>Admin</Typography>
<AdminPanelSettingsIcon />
<IconButton><InboxIcon /></IconButton>
</Paper>

{selectedSection === "employees" && (
<Paper style={{ padding: 16 }}>
<Typography>Employees</Typography>
{employees.map(emp => (
<Typography key={emp.name}>{emp.name}</Typography>
))}
</Paper>
)}

{selectedSection === "technicians" && (
<Paper style={{ padding: 16 }}>
<Typography>Technicians</Typography>
{technicians.map(t => (
<Typography key={t.name}>{t.name}</Typography>
))}
</Paper>
)}

{selectedSection === "issues" && (
<Paper style={{ padding: 16 }}>
<Typography>Issues</Typography>
{issues.map(i => (
<Typography key={i.ticketId}>{i.issue}</Typography>
))}
</Paper>
)}
</Box>
</Box>
);
};

export default AdminDashboard;