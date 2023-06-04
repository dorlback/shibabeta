import React, { useEffect, useState,useRef } from 'react';
import './App.css'; // 이 파일에서 .App 클래스에 h-vh를 적용
import { Nav } from "./componants/Nav";
import MainRouter from './router/MainRouter'
import Footer from "./componants/Footer";
import SlideMenu from './componants/SlideMenu';

function App() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [isOpen]);

    useEffect(() => {
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--vh', `${windowHeight * 0.01}px`);
    }, [windowHeight]);

    return (
        <>
            <div className="App h-vh flex flex-col">
                <Nav toggleMenu={toggleMenu} />
                <main  className="flex-grow w-full flex justify-center flex-col relative">
                    <MainRouter />
                </main>
            </div>
            <Footer />
            <SlideMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
}

export default App;
