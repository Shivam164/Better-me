import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import { Button } from '@mui/material';
import { Client, Databases } from "appwrite";
import uniqid from "uniqid";


const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider({setChange, change}) {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

    const client = new Client();

    const databases = new Databases(client);

    client
        .setEndpoint('http://localhost:5000/v1') // Your API Endpoint
        .setProject(`${process.env.REACT_APP_PROJECT_ID}`) // Your project ID
    ;

    const postData = async () => {
        console.log(value);
        const promise = databases.createDocument(
            `${process.env.REACT_APP_SLEEP_DATABASE}`, 
            `${process.env.REACT_APP_SLEEP_COLLECTION}`, 
            `${uniqid()}`, 
            {SleepQuality: value});

        promise.then(function (response) {
            console.log(response); // Success
            setChange(1 - change);
        }, function (error) {
            console.log(error); // Failure
        });
    }

    

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
        Sleep Quality
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <AirlineSeatFlatIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
      <Button onClick={() => postData()}>Submit</Button>
    </Box>
  );
}