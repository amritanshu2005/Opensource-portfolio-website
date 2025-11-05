import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt'
import img from '../../assets/tech_logo/pp.jpg'

export const About = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);

  const texts = [
    'MernStack Developer',
    'AIML Enthusiast',
    'Programmer'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
      }, 500);
    } else if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setIsWaiting(true);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else {
      const speed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isWaiting]);

  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-8'>
        {/* Left side - Text Content */}
        <div className='w-full md:w-[50%] text-center md:text-left'>
          {/* greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Amritanshu Kumar
          </h2>
          {/* skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl text-[#8254ec] font-semibold mb-4 leading-tight min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]'>
            <span className='text-white'>
              I am a{' '}
            </span>
            <span className='text-[#8254ec] inline-block'>
              {displayText}
              <span className='text-[#8245ec] animate-blob'>|</span>
            </span>
          </h3>
          {/* about me paragraph */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
           I am a MERN Stack developer skilled in building scalable web applications. I am also a competitive programmer with a focus on DSA, and I am currently exploring Artificial Intelligence and Machine Learning.
          </p>
          {/* Resume button isko add krna hai in future*/}
        </div>

        {/* Right side - Image */}
        <div className='w-full md:w-[45%] flex justify-center md:justify-end'>
          <Tilt
            className='w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-purple-700 rounded-full flex-shrink-0'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img 
              src={img} 
              alt="Amritanshu Kumar"  
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' 
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About