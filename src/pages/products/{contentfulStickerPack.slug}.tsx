import React from "react";
import Seo from "../../components/Seo";
import { Page, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  return (
    <Layout title={`${data.contentfulStickerPack?.name}`}>
      <div>
        <GatsbyImage
          image={
            getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!)!
          }
          alt={data.contentfulStickerPack?.name + ""}
        />
        <h2>${data.contentfulStickerPack?.price}</h2>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Product($slug: String) {
    contentfulStickerPack(slug: { eq: $slug }) {
      name
      price
      slug
      preview {
        gatsbyImageData(height: 250, placeholder: BLURRED)
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.ProductQuery>) => (
  <Seo title={data.contentfulStickerPack?.name + ""} />
);
