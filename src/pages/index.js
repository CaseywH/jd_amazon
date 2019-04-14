import React from 'react';
import Hero from '../components/hero';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div className="indexpage">
      <Hero />
    </div>

  </Layout>
);

export default IndexPage;
