import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import activities from '../activities.js';

export default function Dropdown(props) {
  const [age, setAge] = React.useState('');

  const openActivityPage = (e) => {
    console.log('try to open', e.target.value.url)
    const url = e.target.value.url || 'http://google.com'
    window.open(url, '_blank')
  }

  return (
    <Box sx={{ minWidth: 500, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 5 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Select Activity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Activity"
          onChange={openActivityPage}
        >
        {activities.map(activity => (
            <MenuItem value={activity}>{activity.name}</MenuItem>
        ))}
        </Select>
      </FormControl>
    </Box>
  );
}