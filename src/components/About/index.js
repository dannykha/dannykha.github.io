import { useEffect, useState } from 'react'
import {
  faCcVisa,
  faGitAlt,
  faJava,
  faPython,
  faLinux,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { motion } from 'framer-motion';
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import GitS from '../../assets/images/git.png'
import ReactS from '../../assets/images/react.png'
import CppS from '../../assets/images/cpp.png'
import PythonS from '../../assets/images/python.png'
import JavaScriptS from '../../assets/images/javascript.png'
import SeleniumS from '../../assets/images/selenium.png'
import NodeS from '../../assets/images/node.png'
import DockerS from '../../assets/images/docker.png'
import JavaS from '../../assets/images/java.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
  const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <div className='zone'>
            <h2 className='head-text'>Technical</h2>
            <div className="app__skills-container">
              <motion.div className='app__skills-list'>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={GitS} alt="Git" />
                  </div>
                  <p className="p-text">Git</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={ReactS} alt="React" />
                  </div>
                  <p className="p-text">React</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={CppS} alt="C++" />
                  </div>
                  <p className="p-text">C++</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={JavaS} alt="Java" />
                  </div>
                  <p className="p-text">Java</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={PythonS} alt="Python" />
                  </div>
                  <p className="p-text">Python</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={JavaScriptS} alt="JavaScript" />
                  </div>
                  <p className="p-text">JavaScript</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={SeleniumS} alt="Selenium" />
                  </div>
                  <p className="p-text">Selenium</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={NodeS} alt="Node.js" />
                  </div>
                  <p className="p-text">Node.js</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={DockerS} alt="Docker" />
                  </div>
                  <p className="p-text">Docker</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am currently a Computer Engineering student at the University of Washington Bothell.
            Constantly researching about a wide spread of technologies and incredibly
            interested in becoming a full stack developer.
          </p>
          <p>
            Upcoming new grad Software Engineer for 2023 at Visa.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#f89820" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCcVisa} color="#1A1F71" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#FFE873" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faLinux} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About