import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TechnologiesUsed from './TechnologiesUsed';
import { Button, Grid, ImageList, ImageListItem } from '@mui/material';
import './tabsItem.css';

const TabsItem = ({title , description , image, linkGit, linkSite, techs}) => {
  // console.log(techs)
  return (
    <Card id='cardC' sx={{ width: '100%' , height: '70%' ,borderRadius: 0 , boxShadow: 'none' , overflow: 'visible'}}>
      <CardContent sx={{bgcolor: 'backgroundB.main' , boxShadow: 'none'}}>
        <Grid container>
          <Grid item xs={12} sm={5} md={5} sx={{display:{xs: 'none' , sm: 'block' , md: 'block'}}}>
            <Typography gutterBottom variant="h5" color="aux.text" component="div" sx={{fontWeight: 'bold' ,  marginLeft: 2, marginTop: 2}}>
              {title}
            </Typography>
            <Typography variant="body2" color="aux.text" sx={{marginLeft: 2 , marginTop: 4}}>
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} md={7}>
            <ImageList cols={1} sx={{
               marginTop: 1 , marginRight: 1 , overflow: 'visible'
            }}>
              <ImageListItem sx={{ marginLeft:{xs: 0, sm: 10, md:10}}}>
                <img className='ima' src={image} alt='img1'/>
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{bgcolor: 'backgroundB.main' , boxShadow: 'none' }}>
        <Grid container sx={{marginTop: -2}}>
          <Grid item xs={12} sm={10} md={10}>
            <Typography fontWeight='bold' marginRight={2} marginTop={-1} marginLeft={4} color='primary.main'>Technologies used:</Typography>
            <TechnologiesUsed techsUsed={techs}/>
          </Grid>
          <Grid item xs={12} sm={2} md={2} marginTop={2}>
            <Button size='small' href={linkGit} target='_blank' variant='contained' 
              sx={{alignSelf: 'right' , fontWeight: 'bold'}}>
              Github
            </Button>
            &nbsp;
            <Button size='small' href={linkSite} target='_blank'  variant='contained' 
              sx={{alignSelf: 'right' , fontWeight: 'bold'}}>
              Visit site
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
export default TabsItem;