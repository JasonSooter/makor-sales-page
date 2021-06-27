import React from 'react';
import { graphql } from 'gatsby';

import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';

export default function Homepage(props) {
  const { title } = props.data.site.siteMetadata;

  return (
    <>
      <Helmet title={title} />
      <Layout>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
