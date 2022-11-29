import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MUIcards(props) {
const openActivityPage = () => {
  console.log('try to open', props.url)
  const url = props.url || 'http://google.com'
  window.open(url, '_blank')
}
  return (
    <div className="MUIcards" onClick={openActivityPage}>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia sx={{ textAlign: 'center', mt: 3 }}>
            {props.icon}
          </CardMedia>
          <CardContent>
            <Typography
              sx={{ textAlign: 'center' }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Suitable season: {props.season}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Minimum Participant: {props.minParticipant}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Max Temperature: {props.maxTemp}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Min Temperature: {props.minTemp}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Highest Wind speed: {props.wind}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default MUIcards;
