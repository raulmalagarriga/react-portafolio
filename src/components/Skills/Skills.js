import React , {useContext} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './skillsDark.css';
import './skillsLight.css';
import CSS from '../../assets/skills/css-3.png';
import HTML5 from '../../assets/skills/html.png';
import JS from '../../assets/skills/js.png';
import NodeJS from '../../assets/skills/node-js.png';
import ReactJS from '../../assets/skills/reactjs.png';
import Git from '../../assets/skills/git.png';
import Jest from '../../assets/skills/jest.png';
import npm from '../../assets/skills/npm.png';
import firebase from '../../assets/skills/firebase.webp';
import Redux from '../../assets/skills/redux.webp';
import themeContext from '../../context/themeContext';
import BackgroundManager from '../Particles/BackgroundManager';

const Skills = () => {

    // Global var for themes
    const {checked} = useContext(themeContext);

    /*react-multi-carousel responsive config */
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <>
        {checked === false ? 
        ( 
            <section className="skill" id="Skills">
            <div className="container">
                <div style={{position: 'absolute' , height:"100vh" , width:"100vw"}}>
                    <BackgroundManager  />
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx">
                            <h4>SKILLS</h4>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item-dark">
                                    <img src={JS} alt="meter1" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item-dark">
                                    <img src={HTML5} alt="meter4" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item-dark">
                                    <img src={CSS} alt="meter4" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item-dark">
                                    <img src={ReactJS} alt="meter2" />
                                    <h5>React JS</h5>
                                </div>
                                <div className="item-dark">
                                    <img src={Git} alt="meter3" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item-dark">
                                    <img src={NodeJS} alt="meter3" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item-dark">
                                    <img src={npm} alt="meter3" />
                                    <h5>npm</h5>
                                </div>
                                <div className="item-dark">
                                    <img src={Redux} alt="meter3" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item-dark">
                                    <img src={Jest} alt="meter3" />
                                    <h5>Jest</h5>
                                </div>
                                <div className="item-dark">
                                    <img src={firebase} alt="meter3" />
                                    <h5>Firebase</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={codeimg} alt="colorSharp" /> */}
        </section>
        ) : 
        (   
            <section className="skill-light" id="Skills">
            <div className="container">
                <div style={{position: 'absolute' , height:"100vh" , width:"100vw"}}>
                    <BackgroundManager  />
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx-light wow zoomIn">
                            <h4>SKILLS</h4>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={JS} alt="meter1" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={HTML5} alt="meter4" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={CSS} alt="meter4" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={ReactJS} alt="meter2" />
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={Git} alt="meter3" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={NodeJS} alt="meter3" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={npm} alt="meter3" />
                                    <h5>npm</h5>
                                </div>
                                <div className="item">
                                    <img src={Redux} alt="meter3" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={Jest} alt="meter3" />
                                    <h5>Jest</h5>
                                </div>
                                <div className="item">
                                    <img src={firebase} alt="meter3" />
                                    <h5>Firebase</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" alt="colorSharp" /> */}
        </section>
        )}
    </>
  )
}
export default Skills;