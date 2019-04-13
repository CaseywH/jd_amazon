import React from 'react';
import Hero from '../components/hero';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderLinks from '../components/HeaderLinks';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div className="hero__container">
      <HeaderLinks />
      <Hero />
    </div>

  </Layout>
);

export default IndexPage;
