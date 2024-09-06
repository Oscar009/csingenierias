import { Box, Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center" }}>
      <Typography gutterBottom>
        Welcome to Next.js 14 with Material-UI!
      </Typography>
      <Box>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Box>
    </div>
  );
}