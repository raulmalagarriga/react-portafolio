import React , {useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import ArticleIcon from '@mui/icons-material/Article';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from '@mui/material';
import FooterBG from '../../animated/FooterBG';
import themeContext from '../../context/themeContext';
import FooterBGLight from '../../animated/FooterBGLight';



const Footer = () => {

    // Global var for switch theme
    const {checked} = useContext(themeContext);

  return (
    <div>
        <AppBar position="sticky" color="primary" sx={{ top: 'auto', bottom: 0 , 
                    bgcolor: 'backgroundB.main' , boxShadow: 'none', width: '100%', 
                    height: '180px' , alignItems: 'center'}}>
            <div style={{position: 'absolute' , height:"100%" , width:"100%"}}>
                {checked ? <FooterBGLight /> : <FooterBG /> }
            </div>
            <Toolbar>
                <Stack direction='row' spacing={-1} sx={{marginTop: '50%'}}>
                    <IconButton href='https://github.com/raulmalagarriga' target='_blank'>
                        <GitHubIcon fontSize='large' color='primary' />
                    </IconButton>
                    <IconButton href='https://www.linkedin.com/in/rjmalagarrigat' target='_blank'>
                        <LinkedInIcon fontSize='large' color='primary' />
                    </IconButton>
                    <IconButton href='https://drive.google.com/drive/folders/1pXGSCNAHk-p92R4LiXNfKBgiA_YyEvL_?usp=sharing'  target='_blank'>
                        <PictureAsPdfIcon fontSize='large' color='primary' />
                    </IconButton>
                </Stack>      
            </Toolbar>
        </AppBar>
    </div>
  )
}
export default Footer;