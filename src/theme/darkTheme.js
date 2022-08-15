import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#5dc1b9',
            darker: '#4cf5e7'
        },
        secondary: {
            main: '#b8f0ed'
        },
        backgroundC: {
            main: '#353535'
        },
        backgroundB: {
            main: '#242424'
        },
        aux: {
            main: '#DDDDDD',
            text: '#FFFFFF'
        },
        error: {
            main: red.A400
        }
    },
    typography: {
        fontFamily: [
          'Montserrat',
          'bold',
        ].join(','),
      }
});