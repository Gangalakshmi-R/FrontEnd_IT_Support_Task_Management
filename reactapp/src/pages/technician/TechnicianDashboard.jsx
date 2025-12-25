import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
 Box, Paper, Typography, Avatar, IconButton, List, ListItem, ListItemText, Divider, Table, TableHead, TableRow, TableCell, TableBody, Button, Select, MenuItem
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HistoryIcon from "@mui/icons-material/History";
import BuildIcon from "@mui/icons-material/Build";

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
  setTasks(prev =>
   prev.map(t => (t.ticketId === id ? { ...t, status } : t))
  );
 };
 return (

  <Box sx={{ display: "flex", height: "calc(100vh - 140px)" }}> {/*header and footer diff length*/}
{/* p-padding, mr - margin right, md - screen size breakpoint for diff screens */}
   {/* SIDEBAR */}
   <Paper
    sx={{
     width: 250,
     p: 2,
     backgroundColor: "teal",
     height: "100%",
     overflowY: "auto"
    }}
   >
    <Box display="flex" alignItems="center" mb={4}>
     <Avatar sx={{ mr: 1, bgcolor: "white", color: "black" }}>T</Avatar>{}
     <Typography fontWeight="bold"> Technician 1</Typography>
    </Box>

    <Divider />

    <List>
     <ListItem button selected={selectedSection === "inprogress"} onClick={() => setSelectedSection("inprogress")}>
      <AssignmentIcon sx={{ mr: 1 }} />
      <ListItemText primary="In-Progress Issues" />
     </ListItem>

     <ListItem button selected={selectedSection === "history"} onClick={() => setSelectedSection("history")}>
      <HistoryIcon sx={{ mr: 1 }} />
      <ListItemText primary="History" />
     </ListItem>
    </List>
   </Paper>

 {/* MAIN CONTENT */}
   <Box sx={{ flex: 1, p: 2, height: "100%", overflow: "hidden" }}>

    {/* TOOL BAR */}
    <Paper sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, mb: 2 }}>
     <Avatar sx={{ bgcolor: "teal", color: "black" }}>T</Avatar>
     <BuildIcon sx={{ fontSize: 40 }} />
     <IconButton><InboxIcon /></IconButton>
    </Paper>

    {/* IN-PROGRESS */}
    {selectedSection === "inprogress" && (
     <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>In-Progress Issues</Typography>

      {/* DISPLAY TABLE */}
      <Box sx={{ maxHeight: "350px", overflowY: "auto" }}>
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
             size="small"
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
             sx={{ backgroundColor: "teal", color: "black" }}
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
 {/* HISTORY SECTION */}
    {selectedSection === "history" && (
     <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>Completed Tasks</Typography>

      <Box sx={{ maxHeight: "350px", overflowY: "auto" }}>
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

