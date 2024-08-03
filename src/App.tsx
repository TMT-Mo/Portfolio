import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from 'components/Hero/Hero';
import Intro from 'components/Intro/Intro';

import Aos from 'aos'
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import SummaryInfo from 'components/SummaryInfo/SummaryInfo';
import Technologies from 'components/Technologies/Technologies';
import AnimatedCursor from 'react-animated-cursor';
import { isDesktop } from 'react-device-detect';

function App() {
  const [introIsDisplayed, setIntroIsDisplayed] = useState(true);
  
  useEffect(() => {
    Aos.init({ duration: 500 });
    setTimeout(() => setIntroIsDisplayed(false), 2500);
  }, []);
  return (
    <>
    <AnimatedCursor
      innerSize={0}
      outerSize={35}
      color='93, 190, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'span.cursor-pointer',
        'svg'
      ]}
    />
      {introIsDisplayed && <Intro/>}
      <Header/>
      <Hero/>
      <SummaryInfo/>
      
      {/* <About/>
      <Technologies/>
      <ProjectList/>
      <Contact/> */}
      <Footer/>
    </>
  );
}

export default App
