import { Card, CardContent, Typography, Chip, Stack } from "@mui/material";


export default function TicketCard({ ticket }) {
return (
<Card sx={{ mb: 2 }}>
<CardContent>
<Typography variant="h6">{ticket.issue}</Typography>
<Stack direction="row" spacing={1} mt={1}>
<Chip label={ticket.status} color="primary" />
<Chip label={ticket.priority} color="secondary" />
</Stack>
</CardContent>
</Card>
);
}