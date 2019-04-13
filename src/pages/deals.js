import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Deals from '../components/deals/Deals';

const DealsPage = () => (
  <Layout>
    <SEO title="Deals!!" />
    <Deals />
    <Link to="/" className="return-home">Return to Homepage</Link>
  </Layout>
);

export default DealsPage;
