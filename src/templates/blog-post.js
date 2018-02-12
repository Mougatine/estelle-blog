import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

import { TwitterButton, LinkedInButton, FacebookButton  } from "react-social";

export const BlogPostTemplate = ({
  content, contentComponent, description, title, helmet, date, path, facebookAppId
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      { helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-1 has-text-weight-bold is-bold-light">{title}</h1>
            <h2 className="is-size-5 is-bold-light">{date}</h2>
            <p>{description}</p>
            <PostContent content={content} />

            <br/>
            Partagez cet article:
            <ul>
              <li className="me-social"></li>
              <li className="me-social">
              <TwitterButton title="Share via Twitter" message={title} url={path} element="a" className="">
                  <i className="fa fa-twitter-square fa-4x"/>
              </TwitterButton>
              </li>
              <li className="me-social">
              <LinkedInButton title="Share via Linkedin" message={title} url={path} element="a" className="">
                      <i className="fa fa-linkedin-square fa-4x"/>
              </LinkedInButton>
              </li>
              <li className="me-social">
              <FacebookButton title="Share via Facebook" message={title} appId={facebookAppId} url={path} element="a" className="">
                    <i className="fa fa-facebook-square fa-4x"/>
                </FacebookButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<BlogPostTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={post.frontmatter.description}
    helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
    date={post.frontmatter.date}
    title={post.frontmatter.title}
    path={"https://ethou.fr/" + post.frontmatter.path}
    facebookAppId={2000483206942298}
  />);
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        title
        description
      }
    }
  }
`;
