import { Typography, Box, Grid, List, TextareaAutosize, TextField, Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { style } from '@mui/system';
import axios from '../../../src/axios';
import { Cookie, SwapCalls } from '@mui/icons-material';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand,sans-serif',
  },

})

const Footer = () => {

  const [feedback, setFeedback] = useState({
    name: "",
    feedback: ""
  })

  const sendFeedback = (e) => {
    const { name, value } = e.target
    setFeedback({ ...feedback, [name]: value })
  }

  const sendFeedbackData = async () => { 
    try {              
       const fbData =  await axios.post('/createfb',feedback)
          Swal.fire(`Thank you ${feedback.name} for the feedback 😊`)  
          console.log(fbData)                                                                              
      } catch (err) {
      console.log(err)
    }
    
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box style={{ backgroundColor: '#0B2060', height: '70vh', margin: '0' }}>
          <Box
            p={8}
            style={{ display: 'flex' }}>
            <Grid
              xs={4}
            >
              <Typography style={{ fontSize: '30px', fontWeight: '800', color: '#FFFFFF' }}>eLearning</Typography>
              <Typography style={{ color: '#FFFFFF' }}>In an ideal world all out work role that environment that we enjoy and thus keep our Unfortunately often failed</Typography>
              <Typography mt={5} style={{ color: '#FFFFFF', fontSize: '20px' }}> Connect With Us</Typography>

              <Box>
                <FacebookIcon color='secondary' />
                <InstagramIcon color='secondary' />
                <LinkedInIcon color='secondary' />
              </Box>


            </Grid>
            <Grid
              xs={4}
              ml={25}
            >
              <Typography style={{ color: '#FFFFFF', fontSize: '20px' }}> Our Sevice</Typography>
              <List style={{ color: '#FFFFFF' }}>Nursary</List>
              <List style={{ color: '#FFFFFF' }}>Primary School</List>
              <List style={{ color: '#FFFFFF' }}>School</List>
              <List style={{ color: '#FFFFFF' }}>College</List>

            </Grid>
            <Grid
              xs={4}
            >
              <Typography style={{ color: '#FFFFFF', fontSize: '20px', marginBottom: '20px' }}> Send your Feedback / Suggestion</Typography>
              <TextField
                type="name"
                name="name"
                placeholder='Enter Your Name'
                required
                className="inputRounded"
                value={feedback.name}
                onChange={sendFeedback}
              />

              <TextareaAutosize
                name='feedback'
                aria-label="minimum height"
                minRows={2}
                placeholder="Enter Your Feedback / Suggestion"
                style={{ width: 300, marginTop: '20px', backgroundColor: 'transparent', color: "white" }}
                value={feedback.feedback}
                onChange={sendFeedback}
              />
              <Button
                style={{
                  height: '45px',
                  backgroundColor: '#5913B0',
                  borderRadius: '50px',
                  color: 'white',
                  width: '130px',
                  outline: 'none',
                  marginLeft: '90px',
                  marginTop: '20px',
                }}
                onClick={sendFeedbackData}
              >Submit</Button>

            </Grid>

          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography style={{ textAlign: 'center', color: '#FFFFFF' }}>Copyright@ elearning 2022, All Rights Reserved</Typography>

            <Link to="/admin">
              <SettingsApplicationsIcon />
            </Link>
          </Box>

        </Box>

      </ThemeProvider>
    </div>
  )
}

export default Footer