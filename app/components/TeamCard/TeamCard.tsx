import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AnimatedText from '../Animated/AnimatedText';
import theme from '@/app/theme/theme';

interface TeamCardProps {
  name: string;
  position: string;
  image?: string | undefined;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, position, image }) => {

  return (
    <AnimatedText direction="right">
      <Card sx={{
        width: "100%",
        border: '1px #E8E8E8 solid',
        boxShadow: 'none',
        borderColor: theme.palette.primary.main,
        minHeight: 130
      }}>
        <CardActionArea>
          {image && (
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={name}
              sx={{ width: "100%", objectFit: "cover" }}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {position}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </AnimatedText>
  );
};

export default TeamCard;