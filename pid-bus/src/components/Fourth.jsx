import React, { useEffect } from 'react'
import './Fourth.css'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import GLOBE from 'vanta/src/vanta.globe'
import Image1 from './Me.png';
import Image2 from './1690378501214.jpg';


export const Fourth = () => {

    useEffect(() => {
        GLOBE({
            el: "#vanta2",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  backgroundColor: 0x020202
  
        })
    }, [])


  return (

    <div className="nosotros" id='vanta2' >
        <h2 className='title' data-aos="fade-right"> ¿Quiénes somos?</h2>
<div className="cards">
    
    <Card maxW='sm' id='card1' data-aos="fade-right" data-aos-delay="800">
  <CardBody>
    <Image
      src={Image1}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>José Mª García Quijada</Heading>
      <Text>
        Deep Learning AI Engineer <br></br> Front End Developer
      </Text>
      <Text color='white' fontSize='2xl'>
        MP Lifts 
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='outline' colorScheme='blue'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
      </Button>
      <Button variant='ghost' colorScheme='white'>
        josemarigquijada@gmail.com
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card maxW='sm' id='card1' data-aos="fade-left" data-aos-delay="800">
  <CardBody>
    <Image
    id='image2'
      src={Image2}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Julio Navarro Rodríguez </Heading>
      <Text>
        Software Engineer <br></br>
        Consultancy aspects
      </Text>
      <Text color='white' fontSize='2xl' id='letra'>
        Drimay Consultores
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Button variant='outline' colorScheme='blue'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
      </Button>
      <Button variant='ghost' colorScheme='white'>
        navarrodriguez01@gmail.com
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>
</div>
  )
}
