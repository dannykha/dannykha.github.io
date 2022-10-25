import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Hobbies = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container hobbies-page">
                <div className="text-zone">
                    <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['H', 'o', 'b', 'b', 'i', 'e', 's']}
                        idx={15}
                        />
                    </h1>


                    <div className='hobbies-zone'>
                        <h2 className='head-text'>This is where I put the stuff I have done in my life at:</h2>
                            <p>
                                This a WIP but...
                                <br />
                                Keyboards.
                                <br />
                                Code(?).
                                <br />
                                Cars.
                                <br />
                                A lotta music.
                            </p>


                    </div>
                </div>
            </div>
        
        
        
        
        
        <Loader type="pacman" />
        </>
    )




}

export default Hobbies
