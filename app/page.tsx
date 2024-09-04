import { Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Typography variant="h1" component="h2" gutterBottom>
        Welcome to Next.js 14 with Material-UI!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
    </div>
  );
}