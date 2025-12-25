import React,{useState} from "react";
import {
 Box,Paper,Typography,Avatar,IconButton,List,ListItem,
 ListItemText,Divider,Table,TableHead,TableRow,
 TableCell,TableBody,Button
} from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const AdminDashboard=()=>{
 const [selectedSection,setSelectedSection]=useState("employees");

 const employees=[
  {name:"Geetha",issues:[
   {ticketId:"T1",issue:"Login Issue",date:"2025-12-19"},
   {ticketId:"T3",issue:"Page crash",date:"2025-12-20"}]},
  {name:"Raja",issues:[
   {ticketId:"T2",issue:"Email Issue",date:"2025-12-19"}]},
  {name:"Suresh",issues:[
   {ticketId:"T5",issue:"Printer Issue",date:"2025-12-21"}]}
 ];

 const technicians=[
  {name:"Technician 1",allocatedIssues:3},
  {name:"Technician 2",allocatedIssues:1},
  {name:"Technician 3",allocatedIssues:4},
  {name:"Technician 4",allocatedIssues:2},
  {name:"Technician 5",allocatedIssues:0}
 ];

 const issues=[
  {
   ticketId:"T1",
   issue:"Login Issue",
   type:"assigned",
   technician:"Technician 1",
   status:"In Progress",
   resolutionForm:"Pending",
   feedback:"Pending"
  },
  {
   ticketId:"T2",
   issue:"Email Issue",
   type:"assigned",
   technician:"Technician 2",
   status:"Solved",
   resolutionForm:"Submitted",
   feedback:"Good"
  },
  {
   ticketId:"T3",
   issue:"Network Issue",
   type:"unassigned"
  },
  {
   ticketId:"T4",
   issue:"System Crash",
   type:"assigned",
   technician:"Technician 3",
   status:"In Progress",
   resolutionForm:"Pending",
   feedback:"Pending"
  },
  {
   ticketId:"T5",
   issue:"Printer Not Working",
   type:"unassigned"
  }
 ];

 return(
  <Box sx={{ display: "flex", height: "calc(100vh - 60px)" }}>

   <Paper sx={{width:250,p:2,backgroundColor:"teal"}}>
    <Box display="flex" alignItems="center" mb={2}>
     <Avatar sx={{mr:1}}>A</Avatar>
     <Typography variant="h6">Admin</Typography>
    </Box>

    <Divider/>

    <List>
     <ListItem button selected={ selectedSection==="employees"} onClick={()=>setSelectedSection("employees")}>
      <PeopleIcon sx={{mr:1}}/>
      <ListItemText primary="Employees"/>
     </ListItem>

     <ListItem button selected={ selectedSection==="technicians"} onClick={()=>setSelectedSection("technicians")}>
      <EngineeringIcon sx={{mr:1}}/>
      <ListItemText primary="Technicians"/>
     </ListItem>

     <ListItem button selected={ selectedSection==="issues"} onClick={()=>setSelectedSection("issues")}>
      <AssignmentIcon sx={{mr:1}}/>
      <ListItemText primary="All Issues"/>
     </ListItem>
    </List>
   </Paper>

   {/* MAIN CONTENT (SCROLLABLE) */}
   <Box sx={{flex:1,p:2,overflowY:"auto"}}>

    {/* HEADER */}
    <Paper sx={{display:"flex",justifyContent:"space-between",alignItems:"center",p:2,mb:2}}>
     <Typography fontWeight="bold">
      Admin 1
     </Typography>
     <AdminPanelSettingsIcon sx={{fontSize:40,color:"blue"}}/>
     <IconButton><InboxIcon/></IconButton>
    </Paper>

    {/* EMPLOYEES */}
    {selectedSection === "employees" && (
 <Paper sx={{ p: 3 }}>
  <Typography variant="h6" mb={2}>
   Employees & Issues
  </Typography>

  { employees.map((emp) => (
   <Paper
    key={emp.name}
    elevation={1}
    sx={{ mb: 3, p: 2 }}
   >
    <Typography fontWeight="bold" mb={1}>
     Employee: {emp.name}
    </Typography>

    <Table size="small">
     <TableHead sx={{ backgroundColor: "#f0f4f8" }}>
      <TableRow>
       <TableCell align="center"><b>Ticket ID</b></TableCell>
       <TableCell><b>Issue</b></TableCell>
       <TableCell align="center"><b>Date</b></TableCell>
      </TableRow>
     </TableHead>

     <TableBody>
      { emp.issues.length > 0 ? (
       emp.issues.map((issue) => (
        <TableRow key={issue.ticketId} hover>
         <TableCell align="center">
          { issue.ticketId}
         </TableCell>
         <TableCell>
          { issue.issue}
         </TableCell>
         <TableCell align="center">
          { issue.date}
         </TableCell>
        </TableRow>
       ))
      ) : (
       <TableRow>
        <TableCell colSpan={3} align="center">
         <Typography color="text.secondary">
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
    { selectedSection==="technicians"&&(
     <Paper sx={{p:3}}>
      <Typography variant="h6" mb={2}>Technicians & Workload</Typography>
      <Table size="small">
       <TableHead>
        <TableRow>
         <TableCell>Name</TableCell>
         <TableCell>Allocated Issues</TableCell>
        </TableRow>
       </TableHead>
       <TableBody>
        { technicians.map(tech=>(
         <TableRow key={ tech.name}>
          <TableCell>{ tech.name}</TableCell>
          <TableCell>{ tech.allocatedIssues}</TableCell>
         </TableRow>
        ))}
       </TableBody>
      </Table>
     </Paper>
    )}

    {/* ISSUES */}
    { selectedSection==="issues"&&(
     <Paper sx={{p:3}}>
      <Typography variant="h6" mb={2}>All Issues</Typography>

      { issues.map(issue=>(
       <Paper key={ issue.ticketId} sx={{ p:2,mb:2}}>
        <Typography><b>Ticket:</b> { issue.ticketId}</Typography>
        <Typography><b>Issue:</b> { issue.issue}</Typography>
        <Typography><b>Type:</b> { issue.type}</Typography>

        { issue.type==="assigned" ? (
         <>
          <Typography>Technician: { issue.technician}</Typography>
          <Typography>Status: { issue.status}</Typography>
          <Typography>Resolution: { issue.resolutionForm}</Typography>
          <Typography>Feedback: { issue.feedback}</Typography>
         </>
        ) : (
         <Button variant="contained" sx={{ mt:1}}>
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