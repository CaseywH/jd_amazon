import React from 'react';
import { Link } from 'gatsby';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Deals from '../components/deals/Deals';

const DealsPage = () => (
  <Layout>
    <SEO title="Deals!!" />
    <div className="deals" />
    <Link to="/" className="return-home">
      <FaArrowLeft className="back" />
      <FaHome className="back" />
    </Link>


    <Deals />
  </Layout>
);

export default DealsPage;
