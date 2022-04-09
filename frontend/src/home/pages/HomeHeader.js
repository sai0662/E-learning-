import React from 'react'
import { CssBaseline, Grid, Typography, Paper, Button, Box } from '@mui/material'
import { color, textAlign } from '@mui/system'
import EventNoteIcon from '@mui/icons-material/EventNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../../index.css'
import { Theme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Corosouel from './Corosouel';
import { Link } from 'react-router-dom';


const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand,sans-serif',
  }
})

const HomeHeader = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <div //first div 
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'white',
            marginTop: '1%'
          }}
        >
          <Grid
            container
            component="main"
            style={{
              width: '100%',
              justifyContent: "center",
              margin: '50px',
            }}
          >
            <CssBaseline />
            <Grid
              item
              xs={8}
              sm={6}
              md={7}
              component={Paper}
              elevation={8}
              square
              style={{
                boxShadow: 'none'
              }}
            >
              <Box sx={{ justifyContent: "center", margin: '60px' }}>
                <Typography
                  style={{
                    backgroundColor: '#E0E0D8',
                    width: '300px',
                    height: '35px',
                    borderRadius: '20px',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '8px'
                  }}
                >
                  100% Trusted Platform in the India
                </Typography>
                <Typography
                  style={{
                    fontSize: '65px',
                    margin: '0',
                    color: "#0B2060",
                    fontWeight: "600"
                  }}
                >
                  Experince a learning platform that take you next level
                </Typography>
                <Typography
                  style={{
                    fontSize: '20px',
                    margin: '10px',
                  }}
                >
                  There are many variation of pasages of avaliable but the majority have suffered
                </Typography>
                <Link to="/studlogin" style={{textDecoration:'none'}}>
                  <Button
                    style={{
                      height: '50px',
                      backgroundColor: '#5913B0',
                      borderRadius: '50px',
                      color: 'white',
                      width: '130px',
                      outline: 'none'

                    }}
                  >Get started</Button></Link>
              </Box>
            </Grid>



            <Grid
              item
              sm={6}
              md={4}
              margin={2}
              sx={{
                backgroundImage:
                  "url(https://www.pngitem.com/pimgs/m/57-574351_nursery-school-student-png-transparent-png.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",


              }}
            />

          </Grid>

        </div>

        {/* second header Our Service */}
        <div>
          <Box style={{ height: '60vh', backgroundColor: '#0B2060' }}>
            <Box style={{ textAlign: 'center' }}>
              <Typography style={{ fontSize: '50px', fontWeight: '500', color: 'white' }}>Our Services for you</Typography>
              <Typography style={{ fontSize: '20px', color: 'white' }}>There are many variation of passages avaliable homorouse  of randomised  Lorem beliavable.</Typography>
            </Box>
            <Box style={{ margin: '80px', display: 'flex', color: 'white' }}>
              <Box ml={10} >
                <Box sx={{ display: 'flex' }}>
                  <EventNoteIcon />
                  <Typography sx={{ fontSize: '20px' }}>Flexible Time Schedule</Typography>
                </Box>
                <Typography>There are many variation of  passagesof Lorem avalible , but the majority alteration in form</Typography>
              </Box>

              <Box ml={10}>
                <Box sx={{ display: 'flex' }}>
                  <EventNoteIcon />
                  <Typography sx={{ fontSize: '20px' }}>Flexible Time Schedule</Typography>
                </Box>
                <Typography>There are many variation of  passagesof Lorem avalible , but the majority alteration in form</Typography>
              </Box>

              <Box ml={10}>
                <Box sx={{ display: 'flex' }}>
                  <EventNoteIcon />
                  <Typography sx={{ fontSize: '20px' }}>Flexible Time Schedule</Typography>
                </Box>
                <Typography>There are many variation of  passagesof Lorem avalible , but the majority alteration in form</Typography>
              </Box>
            </Box>
          </Box>
        </div>

        {/* benifits of online learning */}
        <div>

          <Box sx={{ backgroundColor: 'white', margin: '80px', height: '90vh', display: 'flex' }}>
            <Grid
              item
              xs={6}
              md={6}
              style={{
                margin: '40px'
              }}

            >
              <img src='https://media.istockphoto.com/photos/online-remote-education-concept-child-girl-studying-at-home-picture-id1217114479?k=20&m=1217114479&s=612x612&w=0&h=laEqsuJLLqDuEp8qWjjgxe8MdOnVGl52RHWywtGZ7Ec='>

              </img>

            </Grid>
            <Grid
              item
              xs={6}
              md={7}
              style={{
                margin: '20px',
              }}
            >
              <Typography
                style={{
                  fontSize: '60px',
                  fontWeight: '600',
                  color: '#0B2060'
                }}
              >
                Benifits of online Learning
              </Typography>
              <Typography
                style={{
                  fontFamily: 'Quicksand,sans-serif',
                  fontSize: '20px'
                }}
              >
                There are many variation of passages of Lorem ipsum availible
                but the majority have suffered alteration in some form by look slightly believable
              </Typography>

              <Box sx={{ display: 'flex' }}>
                <Typography m={2}><EventNoteIcon /> Beginer Level</Typography>
                <Typography m={2} ml={30}><EventNoteIcon /> Beginer Level</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography m={2}><EventNoteIcon /> Beginer Level</Typography>
                <Typography m={2} ml={30}><EventNoteIcon /> Beginer Level</Typography>

              </Box>
              <Link to="/studlogin" style={{ textDecoration:'none'}}>
              <Button
                style={{
                  height: '45px',
                  backgroundColor: '#5913B0',
                  borderRadius: '50px',
                  color: 'white',
                  width: '130px',
                  outline: 'none'

                }}
              >Get started</Button>
              </Link>
            </Grid>
          </Box>

        </div>

        {/* track your online activity */}

        <div>
          <Box sx={{ backgroundColor: "white", height: '60vh', display: 'flex', marginLeft: '80px' }}>
            <Grid
              item
              xs={6}
              md={6}

            >
              <Typography style={{ fontSize: '60px', fontWeight: '600', color: '#0B2060' }}>Track your study activity daily</Typography>
              <Typography variant='h6'>There are variation of pasages availible homourous of randomised Lorem Ipsum beliavable</Typography>

              <Box m={1} marginTop={2} >
                <Typography m={1}><CheckCircleIcon color='primary' />Well Educated Staff</Typography>
                <Typography m={1}><CheckCircleIcon color='primary' />Well Educated Staff</Typography>
                <Typography m={1}><CheckCircleIcon color='primary' />Well Educated Staff</Typography>

              </Box>
              <Button
                style={{
                  height: '45px',
                  backgroundColor: '#5913B0',
                  borderRadius: '50px',
                  color: 'white',
                  width: '130px',
                  outline: 'none',

                }}
              >Explore More</Button>

            </Grid>
            <Grid
              item
              xs={5}
              md={8}
              ml={23}
            >
              {/* <img src="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20190422strada.jpg">
      
      </img>   */}
              <img height={400} width={600} src="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20190422strada.jpg">

              </img>
            </Grid>
          </Box>
        </div>

        {/* what student say about  */}
        <div style={{ height: '40vh', textAlign: 'center', marginTop: '100px' }}>
          <Box>
            <Typography style={{ fontSize: '60px', fontWeight: '600', color: '#0B2060' }}>What student say about us ?</Typography>
            <Typography variant='h6'>There are many of passages availible humourouse of randomised Loreum Ipsum beliavable</Typography>

          </Box>
        </div>

        <Corosouel />

        <div>
          <Box sx={{ textAlign: 'center', height: '40vh', backgroundColor: '#E2D775' }}>
            <Typography style={{ fontSize: '60px', paddingTop: '50px', fontWeight: '600', color: '#0B2060' }}>Learn from a distance with us</Typography>
            <Typography style={{ marginTop: "10px" }}>There are many variation of passages avalible humorous random beliavable</Typography>

          </Box>
        </div>
        <Footer />

      </ThemeProvider>
    </>
  )
}

export default HomeHeader;