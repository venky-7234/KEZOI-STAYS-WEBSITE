import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import KezoiStory from '../components/KezoiStory';
import BrandStatement from '../components/BrandStatement';
import CustomerStories from '../components/CustomerStories';


const Home = () => {
  return (
    <>
      <Hero />
      <KezoiStory />

      <Experience />
      <CustomerStories />
      <BrandStatement />
    </>
  );
};

export default Home;
