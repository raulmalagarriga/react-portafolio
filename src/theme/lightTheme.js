import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#242424'
        },
        secondary: {
            main: '#b8f0ed'
        },
        backgroundC: {
            main: '#DDDDDD'
        },
        backgroundB: {
            main: '#eeeeee'
        },
        aux: {
            main: '#353535',
            text: '#353535'
        },
        aqua: {
            main: '#5dc1b9'
        },
        error: {
            main: red.A400
        }
    },
    typography: {
        fontFamily: [
          'Montserrat',
          '',
        ].join(','),
      }
});