import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { Link, PageProps, graphql } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <Link to={`/blog/${file.frontmatter?.slug}`}>
            <article key={index}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <p>{file.excerpt}</p>
            </article>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          category
          title
          author
          slug
          date(formatString: "YYYY/MM/DD")
        }
        excerpt(pruneLength: 40)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
