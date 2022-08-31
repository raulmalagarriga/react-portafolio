import React from 'react';
import { Button, Grid, ImageListItem, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhoneActive from '../../animated/PhoneActive';
import BackgroundManager from '../Particles/BackgroundManager';

const Contact = () => {

    
  return (
    <Grid id='Lets conect!' sx={{position: 'relative'}}>
        <div style={{position: 'absolute' , height:"100vh" , width:"100vw"}}>
            <BackgroundManager  />
        </div>
            <Typography variant='h4' color='primary.main' 
                align='center' fontWeight='bold' marginBottom={4} marginTop={10} sx={{letterSpacing: 4}}>
                SEND ME A MESSAGE!
            </Typography>
        <Grid container xs={12} sm={12} md={12} spacing={4} marginTop={10} marginBottom={2}>
            <Grid item xs={12} sm={6} md={6}>
                <ImageListItem sx={{width: '200%' , height:'auto' , 
                marginLeft: '-270px' , display: {xs: 'none',
                sm: 'block' , md: 'block'}}}>
                    {/* <img src={CodeBack} alt='ima'/> */}
                    <PhoneActive />
                </ImageListItem>
            </Grid>
            <Grid container xs={12} sm={6} md={6} spacing={1} 
                sx={{bgcolor: 'backgroundC.main' , padding: 2, borderRadius: 4, marginBottom: 2,
                   height: 600 , marginLeft: {xs: '60px' , sm: '0' , md: '0'}
                }}>
                    <form style={{width: '100%'}} action="https://formsubmit.co/rjmalagarrigat@gmail.com" method="POST">
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField label="Name" placeholder='Name' name='name' variant="outlined" fullWidth
                            sx={{marginBottom: 1 }} required/>
                            <TextField label="e-mail" placeholder='e-mail' name='email' variant="outlined" fullWidth
                            sx={{marginBottom: 1 }} required/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField label="Subject" placeholder='Subject' name='subject' variant="outlined" fullWidth
                            sx={{marginBottom: 1}} required/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField fullWidth multiline label='Message' name='coments'
                            placeholder='Message' rows={6} required/>
                        </Grid> 
                        <Button variant="outlined" type='submit' fullWidth sx={{height: 50 , marginTop: 5}} endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </form>
            </Grid>
        </Grid>
    </Grid>
  )
}
export default Contact;