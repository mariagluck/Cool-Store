import React from 'react';
import Layout from '../layout.jsx';
import Hero from '../hero/hero.jsx';
import Main from '../main/main.jsx';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Main />
      </Layout>
    </>
  );
}

export default HomePage;