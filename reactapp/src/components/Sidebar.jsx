import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";


export default function Sidebar() {
    return (
        <Drawer variant="permanent" sx={{ width: 220 }}>
            <List sx={{ mt: 8 }}>
                {["Dashboard", "Tickets", "Profile"].map(text => (
                    <ListItemButton key={text}>
                        <ListItemText primary={text} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
}
