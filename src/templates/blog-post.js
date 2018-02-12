import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content, contentComponent, description, title, helmet, date
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
            <h4>              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw"
               className="twitter-share-button" data-size="large"
               data-text={title}
               data-hashtags="nutrition" data-lang="fr" data-show-count="false">
               Tweet
              </a></h4>
            <p>{description}</p>
            <PostContent content={content} /><br/>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw"
               className="twitter-share-button" data-size="large"
               data-text="test"
               data-hashtags="nutrition" data-lang="fr" data-show-count="false">
               Tweet
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
