import { ThemeProvider } from '@emotion/react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import React, { useContext } from 'react'
import themeContext from '../context/themeContext';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

const AppTheme = ({ children }) => {

    // Global var for switch theme
    const {checked } = useContext(themeContext);

    return ( 
        <ThemeProvider theme={ checked === false ?  darkTheme : lightTheme}>
            <CssBaseline />
            { checked ? 
            ( // Material UI component : is like use 'body' in css
                <GlobalStyles styles={{body: { backgroundColor: '#eeeeee' }}}/>    
            ) : 
            (
                <GlobalStyles styles={{body: { backgroundColor: '#242424' }}}/>
            )}
            { children }
        </ThemeProvider>
     );
}

export default AppTheme;