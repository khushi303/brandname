import './App.css';
import Header from './components/Header';
import Courses from './components/Courses';
import TrainingCourse from './components/TrainingCourse';
import Graph from './components/Graph';
import ClientMatter from './components/ClientMatter';
import QualityEducation from './components/QualityEducation';
import LiveAction from './components/LiveAction';
import Footer from './components/Footer';
import BackToTop from '../src/assets/png/arrowtop.png';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Loader } from './components/Iconimg'

function App() {
  // ------------Back-to-Top----------//
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ---------aos------------//
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
        easing: 'ease-in-out',
      }
    );
    Aos.refresh()
  });
  // -----------pre-loader-----------//
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3500);
  }, []);
  return (
    <div>
      {screenLoading ? (
        <>
          <div className='fixed min-h-screen bg-white top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className='max-w-[95px] w-full'>
              <Loader />
            </div>

          </div>

        </>

      ) : (
        <div className='overflow-hidden'>
          <Header />
          <Courses />
          <TrainingCourse />
          <Graph />
          <ClientMatter />
          <QualityEducation />
          <LiveAction />
          <Footer />
          <div className='fixed bottom-4 right-4 z-[6] cursor-pointer'>
            <div className={`${backToTop ? '' : 'hidden'} fixed bottom-[4%] right-[2%] w-[50px] h-[50px] cursor-pointer animate-[mover_2500ms_ease-in-out_infinite] rounded-[60px] bg-[#96BB7C] flex items-center justify-center`} onClick={() => top()}>
              <img src={BackToTop} alt="Backtotop" className='w-[30px] h-[30px]' />
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default App;
