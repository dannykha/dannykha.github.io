import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Cats = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [imgUrl,setUrl]=useState("https://cdn2.thecatapi.com/images/DZba-eH_4.jpg");
    const callImg=()=>{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json())
        .then(data=>setUrl(data[0].url))
    }
    useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container cats-page">
                <div className="text-zone">
                    <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'a', 't', 's']}
                        idx={15}
                        />
                    </h1>
                    <div className='cats-zone'>
                        <h2 className='head-text'>This is where the cats are at ya know</h2><br></br>
                        <img class="catImages" src={imgUrl} alt="CAT"></img><br></br>
                        <button onClick={()=>callImg()}>Generate More Cats</button>
                    </div>
                </div>
            </div>
        
        
        <Loader type="pacman" />
        </>
    )
}

export default Cats
