import { Grid } from '@mui/material';
import React , {useState} from 'react';
import { Main } from './components/Main/Main';
import BackgroundManager from './components/Particles/BackgroundManager';
import themeContext from './context/themeContext';
import AppTheme from './theme/AppTheme';

const App = () => {
  // Context , global vaar for theme
  const [checked , setChecked] = useState(false);

  return (
    <> 
          <div className='body'>
            <themeContext.Provider value={{checked , setChecked}}>
            <AppTheme>
              <Grid sx={{backgroundColor: 'backgroundB.main' , height: '100vh' , position: 'relative'}}>
                <div style={{position: 'absolute' , height:"100vh" , width:"100vw"}}>
                    <BackgroundManager  />
                </div>
                <Main />      
             </Grid>
            </AppTheme>
          </themeContext.Provider> 
        </div>      
    </>
  );
}

export default App;
