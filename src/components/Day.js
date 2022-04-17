import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// individual day weather cards
export default function Day({dt, temp, min, max, icon, wind, humidity}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: '1',
        flexShrink: '1',
        '& > :not(style)': {
          m: 1,
          width: 202,
          height: 202,
        },
      }}
    >
      <Paper elevation={5}>
        <h2>{dt.split(" ")[0]}</h2>
        <h3>{parseInt(temp-273.15)}°C</h3>
        <img src={`http://openweathermap.org/img/w/${icon}.png`}></img>
        <p><strong>min: </strong>{parseInt(min-273.15)}°C <strong>max: </strong>{parseInt(max-273.15)}°C</p>
        <p><strong>humidity: </strong>{humidity}% <strong>wind: </strong>{wind}m/s</p>
      </Paper>
    </Box>
  );
}