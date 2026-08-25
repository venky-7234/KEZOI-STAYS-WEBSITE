import React from 'react';
import Hero from '../components/Hero';
import BookingBar from '../components/BookingBar';
import About from '../components/About';
import FeaturedStays from '../components/FeaturedStays';
import Experience from '../components/Experience';
import BrandStatement from '../components/BrandStatement';
import Locations from '../components/Locations';
import Gallery from '../components/Gallery';
import WhyKezoi from '../components/WhyKezoi';
import Reviews from '../components/Reviews';
import LongStay from '../components/LongStay';
import BookingCTA from '../components/BookingCTA';
import FinalBrand from '../components/FinalBrand';

const Home = () => {
  return (
    <>
      <Hero />
      <BookingBar />
      <About />
      <FeaturedStays />
      <Gallery />
      <Experience />
      <BrandStatement />
      <Locations />
      <WhyKezoi />
      <Reviews />
      <LongStay />
      <BookingCTA />
      <FinalBrand />
    </>
  );
};

export default Home;
