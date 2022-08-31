import React, { useState ,useContext } from 'react'
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Drawer, FormControlLabel, FormGroup, Grid, IconButton, ImageListItem, Link, List, ListItem, ListItemIcon, ListItemText, Stack, Toolbar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { MaterialUISwitch } from './MaterialUISwitch';
import themeContext from '../../context/themeContext';
import LogoWhite from '../../assets/logoWhite.png';
import LogoBlack from '../../assets/logoBlack.png';
import Resume from '../../assets/Resume-EN.pdf';

const NavBar = () => {
    // Global var for switch theme
    const {checked , setChecked} = useContext(themeContext);
    // For responsive drawer
    const [toggle , setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    // Handle switch theme
    const handleSwitch = () => {
        setChecked(!checked);
    }

    return (
        <>
        <AppBar  position ='fixed' color='backgroundC'
                sx={{
                    width: '100%',
                }}  
            >
                <Toolbar>
                    <IconButton 
                        color='primary' 
                        edge='start' 
                        onClick={handleToggle}
                        sx={{
                        mr: 2 , 
                        display: {sm: 'none'}}}>
                        <MenuOutlined />
                        <Drawer 
                            open={toggle}
                            onClose={handleToggle}
                            sx={{display: {sm: 'none'} }}
                        >
                            <List sx={{
                               backgroundColor: 'backgroundB.main', color: 'primary.main' , height: '100vh'
                            }}>
                                {['Home' , 'Skills' , 'Projects' , 'Lets conect!'].map((text, index) => (                  
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            {index % 4 === 0 ? <HomeIcon /> : <AccountTreeIcon />}
                                        </ListItemIcon>
                                        <ListItemText><Link underline='none' href={`#${text}`}>{text}</Link></ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </IconButton>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        {/* <Typography color='#ffffff' variant='h4' noWrap component="div">LOGO</Typography> */}
                        <ImageListItem sx={{width:{xs:'40%' , sm: '20%' , md: '20%'}, height: 'auto'}}>
                            <img src={checked ? LogoBlack : LogoWhite} alt='logo'/>
                        </ImageListItem>
                        <Stack direction='row' spacing={2} sx={{
                            display: {xs: 'none' , md: 'block'}, marginLeft: -10 , letterSpacing: 2
                        }}>
                            <Link href='#Home' underline='hover' >
                                HOME
                            </Link>
                            <Link href='#Skills' underline='hover' >
                                SKILLS
                            </Link>
                            <Link href='#Projects' underline='hover' >
                                PROJECTS
                            </Link>
                            <Link href='#Lets conect!' underline='hover' >
                                LETS CONECT!
                            </Link>
                        </Stack>
                            <Stack direction='row' spacing={-1}>
                                <IconButton href='https://github.com/raulmalagarriga' target='_blank'>
                                    <GitHubIcon color='primary' />
                                </IconButton>
                                <IconButton href='https://www.linkedin.com/in/rjmalagarrigat' target='_blank'>
                                    <LinkedInIcon color='primary' />
                                </IconButton>
                                <IconButton href={Resume} download>
                                    <ArticleIcon color='primary' />
                                </IconButton>
                                <FormGroup>
                                <Stack direction='row'>
                                <FormControlLabel
                                    control={<MaterialUISwitch 
                                        checked={!checked}
                                        onChange={handleSwitch}
                                        inputProps={{ 'aria-label': 'controlled' }}    
                                        sx={{ m: 1 }} />}
                                />    
                                </Stack>
                                </FormGroup>
                            </Stack>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
  )
}
export default NavBar;