import React from 'react';

import Header from '../components/Header';
import ServiceFeedback from '../components/ServiceFeedback';
import Main from '../components/Main';
import BackgroundElement from '../components/BackgroundElement';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Header />
      <ServiceFeedback />
      <Main />
      <BackgroundElement />
      <Footer />
    </div>
  );
};

export default Home;
