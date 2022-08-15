import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CSS from '../../assets/skills/css-3.png';
import HTML5 from '../../assets/skills/html.png';
import JS from '../../assets/skills/js.png';
import nodeJS from '../../assets/skills/node-js.png';
import reactJS from '../../assets/skills/reactjs.png';
import git from '../../assets/skills/git.png';
import jest from '../../assets/skills/jest.png';
import npm from '../../assets/skills/npm.png';
import firebase from '../../assets/skills/firebase.webp';
import redux from '../../assets/skills/redux.webp';
import materialUI from '../../assets/skills/material-ui.svg';
import SASS from '../../assets/skills/sass.png';
import './tech.css';


const TechnologiesUsed = ({techsUsed}) => {

  // console.log(techsUsed) //['CSS' , 'HTML5' , 'JS', 'ReactJS']
  // Compare array of strings techUsed[] and array pf objects itemData[]
  let res = itemData.map(x => ({...x,name:techsUsed.includes(x.name)}));
  return (
    <ImageList sx={{ width:{xs: '80%' , sm: '30%' , md:'30%' }, height: 40, 
        overflowY: 'hidden' , overflowX: 'hidden' , marginLeft: 4}} 
        cols={9} 
        rowHeight={20}
    >
      {res.map((item) => (
        <>
          {item.name ? 
          (
            <ImageListItem sx={{width: 20 , height:'auto' , cursor: 'pointer' }}  key={item.name}>
                    <div className='div-img'>
                      <img  className='wrap'
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={`${item.name}`}
                      loading="lazy"
                      />
                      <figcaption>{`${item.aux}`}</figcaption>
                    </div>
          </ImageListItem>
          ) : 
          (<></>)
          }
        </>
      ))}
    </ImageList>
  );
}
export default TechnologiesUsed;

const itemData = [{
  name: 'CSS',
  aux: 'CSS',
  img: CSS
},
{
  name: 'HTML5',
  aux: 'HTML5',
  img: HTML5
},
{
  name: 'JS',
  aux: 'JS',
  img: JS
},
{
  name: 'reactJS',
  aux: 'ReactJS',
  img: reactJS
},
{
  name: 'Git',
  aux: 'Git',
  img: git
},
{
  name: 'nodeJS',
  aux: 'NodeJS',
  img: nodeJS
},
{
  name: 'jest',
  aux: 'Jest',
  img: jest
},
{
  name: 'npm',
  aux: 'NPM',
  img: npm
},
{
  name: 'firebase',
  aux: 'Firebase',
  img: firebase
},
{
  name: 'redux',
  aux: 'Redux',
  img: redux
},
{
  name: 'materialUI',
  aux: 'MaterialUI',
  img: materialUI
},
{
  name: 'SASS',
  aux: 'SASS',
  img: SASS
}
];
