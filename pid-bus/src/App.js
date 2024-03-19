import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { ChakraProvider, Th } from '@chakra-ui/react'
import { Navbar } from './components/Navbar';
import { Drag } from './components/Drag';
import { CloudsComponent } from './components/CloudsComponent';
import { Second } from './components/Second';
import { Third } from './components/Third';
import { Fourth } from './components/Fourth';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ChakraProvider>
      <CloudsComponent />
      <Drag />
      <Second />
      <Third />
      <Fourth />
    </ChakraProvider>

  );
}

export default App;
