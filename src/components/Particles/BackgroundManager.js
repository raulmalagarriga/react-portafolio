import React , {useContext} from 'react'
import Background from '../../animated/Background';
import BackgroundThemeAlt from '../../animated/BackgroundThemeAlt';
import themeContext from '../../context/themeContext';

const BackgroundManager = () => {
// Global var for switch theme
const {checked} = useContext(themeContext);

  return (
    <>
        {checked ? <BackgroundThemeAlt /> : <Background />}
    </>
  )
}
export default BackgroundManager;