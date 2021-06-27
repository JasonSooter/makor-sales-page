import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

export default function BlogPostTemplate({ data: { markdownRemark, site } }) {
  const {
    html: __html,
    frontmatter: { title, date }
  } = markdownRemark;
  const { title: siteTitle } = site.siteMetadata;

  return (
    <>
      <Helmet title={`${title} | ${siteTitle}`} />
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
      <hr />
    </>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
