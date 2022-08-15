import React, { useContext } from 'react';
import Typed from 'react-typed';
import { Container, Grid, ImageListItem, Stack, Typography  } from '@mui/material';
import themeContext from '../../context/themeContext';
import Code2 from '../../animated/Code2';
// import CodeBack from '../../assets/code-background.png';
import './banner.css';

const Banner = () => {

  const {checked} = useContext(themeContext);

  return (
      <Container id='Home' sx={{
          padding: '200px 0 100px 0',
          width: '100vw',
          height: '100vh',
      }}>
        <Stack className='animate__animated animate__fadeIn' direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 2 }}>
                    {checked ? 
                    (
                      <Grid container xs={12} sm={12} md={12} sx={{color:'#242424', 
                      fontSize: '4.5rem', fontWeight: 'bold'}}>
                    {/* </Box> */}
                    <Grid item  xs={12} sm={6} md={6}>
                      <Typography variant='h4' sx={{
                          color: 'aqua.main', fontWeight: 'bold',
                        }}>
                          Hi! I'm Raul Malagarriga, welcome to my portafolio!
                      </Typography>
                      <Typed
                          strings={[
                            "Software developer",
                            "Computer engineer",
                            "Front-end / back-end"
                          ]}
                          typeSpeed={170}
                          backSpeed={120}
                          loop
                          className='typed'
                      />
                      <Typography  variant='h6' sx={{
                        fontSize: '1rem' , display: {xs: 'block' , md: 'block'}
                      }}>
                        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                      </Typography>
                    </Grid>
                    <Grid item xs={'none'} sm={6} md={6}>
                      <ImageListItem sx={{width: '300%' , marginLeft: '-550px', marginTop: '-108px',
                        height:'auto', display: {xs: 'none',
                        sm: 'block' , md: 'block'}}}>
                         <Code2 />
                      </ImageListItem>
                    </Grid>
                </Grid>
                    ) : 
                    (
                        <Grid container xs={12} sm={12} md={12} sx={{color:'#FFFFFF', 
                          fontSize: '4.5rem', fontWeight: 'bold'}}>
                        {/* </Box> */}
                        <Grid item  xs={12} sm={6} md={6}>
                          <Typography variant='h4' sx={{
                                color: 'primary.main', fontWeight: 'bold',
                              }}>
                                Hi! I'm Raul Malagarriga, welcome to my portafolio!
                            </Typography>
                          <Typed
                              strings={[
                                "Software developer",
                                "Computer engineer",
                                "Front-end / back-end"
                              ]}
                              typeSpeed={170}
                              backSpeed={120}
                              loop
                              className='typed'
                          />
                          <Typography  variant='h6' sx={{
                            fontSize: '1rem' , display: {xs: 'block' , md: 'block'}
                          }}>
                            lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                          </Typography>
                        </Grid>
                        <Grid item xs={'none'} sm={6} md={6}>
                          <ImageListItem sx={{width: '300%' , marginLeft: '-550px', marginTop: '-108px',
                        height:'auto', display: {xs: 'none',
                        sm: 'block' , md: 'block'}}}>
                            {/* <img src={CodeBack} alt='ima'/> */}
                            <Code2 />
                          </ImageListItem>
                        </Grid>
                    </Grid>
                    )}
        </Stack>
      </Container>
  )
}
export default Banner;