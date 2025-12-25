import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Button,
  Select,
  MenuItem
} from "@material-ui/core";

import InboxIcon from "@material-ui/icons/Inbox";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HistoryIcon from "@material-ui/icons/History";
import BuildIcon from "@material-ui/icons/Build";

const TechnicianDashboard = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("inprogress");

  const [tasks, setTasks] = useState([
    { ticketId: "T1", name: "Ganga", issue: "Network Issue", priority: "High", status: "Pending", resolutionForm: null },
    { ticketId: "T2", name: "Raja", issue: "System Crash", priority: "Low", status: "In Progress(25%)", resolutionForm: null },
    { ticketId: "T3", name: "Geetha", issue: "Email issue", priority: "Medium", status: "Pending", resolutionForm: "Issue Solved" },
    { ticketId: "T4", name: "Dhigee", issue: "System Crash", priority: "High", status: "Pending", resolutionForm: null },
    { ticketId: "T5", name: "Rahul", issue: "Network issue", priority: "Low", status: "In Progress(75%)", resolutionForm: null },
    { ticketId: "T6", name: "Sheela", issue: "System Crash", priority: "Medium", status: "In Progress(25%)", resolutionForm: null },
    { ticketId: "T7", name: "Rani", issue: "Email issue", priority: "Low", status: "Pending", resolutionForm: null }
  ]);

  const handleStatusChange = (id, status) => {
    setTasks(prev => prev.map(t => (t.ticketId === id ? { ...t, status } : t)));
  };

  return (
    <Box style={{ display: "flex", height: "calc(100vh - 140px)" }}>
      {/* SIDEBAR */}
      <Paper style={{ width: 250, padding: 16, backgroundColor: "teal", height: "100%", overflowY: "auto" }}>
        <Box display="flex" alignItems="center" mb={4}>
          <Avatar style={{ marginRight: 8, backgroundColor: "white", color: "black" }}>T</Avatar>
          <Typography style={{ fontWeight: "bold" }}>Technician 1</Typography>
        </Box>

        <Divider />

        <List>
          <ListItem button selected={selectedSection === "inprogress"} onClick={() => setSelectedSection("inprogress")}>
            <AssignmentIcon style={{ marginRight: 8 }} />
            <ListItemText primary="In-Progress Issues" />
          </ListItem>


          <ListItem button selected={selectedSection === "history"} onClick={() => setSelectedSection("history")}>
<HistoryIcon style={{ marginRight: 8 }} />
<ListItemText primary="History" />
</ListItem>
</List>
</Paper>

{/* MAIN CONTENT */}
<Box style={{ flex: 1, padding: 16, height: "100%", overflow: "hidden" }}>
{/* TOOLBAR */}
<Paper style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16, marginBottom: 16 }}>
<Avatar style={{ backgroundColor: "teal", color: "black" }}>T</Avatar>
<BuildIcon style={{ fontSize: 40 }} />
<IconButton><InboxIcon /></IconButton>
</Paper>

{/* IN-PROGRESS */}
{selectedSection === "inprogress" && (
<Paper style={{ padding: 16 }}>
<Typography variant="h6" style={{ marginBottom: 16 }}>In-Progress Issues</Typography>
<Box style={{ maxHeight: 350, overflowY: "auto" }}>
<Table stickyHeader>
<TableHead>
<TableRow>
<TableCell><b>ID</b></TableCell>
<TableCell><b>Name</b></TableCell>
<TableCell><b>Issue</b></TableCell>
<TableCell><b>Priority</b></TableCell>
<TableCell><b>Status</b></TableCell>
<TableCell><b>Action</b></TableCell>
</TableRow>
</TableHead>

<TableBody>
{tasks.filter(t => t.resolutionForm === null).map(task => (
<TableRow key={task.ticketId}>
<TableCell>{task.ticketId}</TableCell>
<TableCell>{task.name}</TableCell>
<TableCell>{task.issue}</TableCell>
<TableCell>{task.priority}</TableCell>
<TableCell>
<Select
value={task.status}
onChange={e => handleStatusChange(task.ticketId, e.target.value)}
>
<MenuItem value="Pending">Pending</MenuItem>
<MenuItem value="In Progress(25%)">In Progress(25%)</MenuItem>
<MenuItem value="In Progress(50%)">In Progress(50%)</MenuItem>
<MenuItem value="In Progress(75%)">In Progress(75%)</MenuItem>
</Select>
</TableCell>
<TableCell>
<Button
variant="contained"
style={{ backgroundColor: "teal", color: "black" }}
onClick={() => navigate(`/resolve/${task.ticketId}`)}
>
Resolve
</Button>
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</Box>
</Paper>
)}

{/* HISTORY */}
{selectedSection === "history" && (
<Paper style={{ padding: 16 }}>
<Typography variant="h6" style={{ marginBottom: 16 }}>Completed Tasks</Typography>
<Box style={{ maxHeight: 350, overflowY: "auto" }}>
<Table stickyHeader>
<TableHead>
<TableRow>
<TableCell><b>ID</b></TableCell>
<TableCell><b>Name</b></TableCell>
<TableCell><b>Issue</b></TableCell>
<TableCell><b>Priority</b></TableCell>
<TableCell><b>Resolution</b></TableCell>
</TableRow>
</TableHead>

<TableBody>
{tasks.filter(t => t.resolutionForm !== null).map(task => (
<TableRow key={task.ticketId}>
<TableCell>{task.ticketId}</TableCell>
<TableCell>{task.name}</TableCell>
<TableCell>{task.issue}</TableCell>
<TableCell>{task.priority}</TableCell>
<TableCell>{task.resolutionForm}</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</Box>
</Paper>
)}
</Box>
</Box>
);
};

export default TechnicianDashboard;
