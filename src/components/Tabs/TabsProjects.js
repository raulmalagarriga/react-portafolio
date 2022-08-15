import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabsItem from './TabsItem';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material';
import mega from '../../assets/mega.png';
import rickwiki from '../../assets/rickwiki2.png';
import loginredux from '../../assets/loginredux.png';
import portafolio from '../../assets/porta.png'
import BackgroundManager from '../Particles/BackgroundManager';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  // For SwipeableViews effect
  const theme = useTheme();
  // For tabs 
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box id='Projects' sx={{ width: '100%' , marginTop: '100px' }}>
        <div style={{position: 'absolute' , height:"100vh" , width:"100vw"}}>
          <BackgroundManager  />
        </div>
        <Typography variant='h4' align='center' marginBottom={4} sx={{fontWeight: 'bold' , 
                color: 'primary.main' , letterSpacing: 4}}>
          PROJECTS
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' , alignSelf:'center'}}>
          <Tabs value={value} onChange={handleChange}   variant="scrollable" sx={{
            marginLeft: {xs: 0 , sm:25 , md: 25} 
          }}>
            <Tab sx={{color: 'aux.text'}} label="MegaCopias Web Page" {...a11yProps(0)} />
            <Tab sx={{color: 'aux.text'}} label="User Login / Register" {...a11yProps(1)} />
            <Tab sx={{color: 'aux.text'}} label="Rick and Morty Wiki Page" {...a11yProps(2)} />
            <Tab sx={{color: 'aux.text'}} label="This page :)" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <SwipeableViews 
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          disabled
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <TabsItem 
              techs={['HTML5' , 'CSS', 'JS' , 'reactJS']}
              image={mega}
              title={'MEGA COPIAS WEB PAGE'}
              linkGit={'https://github.com/raulmalagarriga/MegaCopias-WebPage'}
              description={'Lizards are a widespread group of squamate reptiles,Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica ,with over 6,000 species, ranging across all continents except Antarctica'}
            />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <TabsItem
              techs={['HTML5' , 'CSS' , 'reactJS' , 'redux' , 'firebase' , 'SASS']}
              image={loginredux}
              title={'USER LOGIN/REGISTER'}
              linkGit={'https://github.com/raulmalagarriga/React-Login-and-Redux'}
              description={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica , Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
            />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <TabsItem 
                techs={['CSS' , 'HTML5' , 'reactJS']}
                image={rickwiki}
                title={'RICK & MORTY WIKI PAGE'}
                linkGit={'https://github.com/raulmalagarriga/RickAndMorty'}
                description={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
              />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <TabsItem
                techs={['CSS' , 'HTML5' , 'reactJS' , 'materialUI']}
                image={portafolio} 
                title={'THIS PORTAFOLIO :)'}
                description={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
              />
          </TabPanel>
        </SwipeableViews>  
      </Box>
  );
}
export default BasicTabs;