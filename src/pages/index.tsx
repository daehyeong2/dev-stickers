import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, PageProps, graphql } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to my DevStickers 🙌">
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker) => (
          <article>
            <GatsbyImage
              image={getImage(sticker.preview?.gatsbyImageData!)!}
              alt={sticker.name + ""}
            />
            <Link to={`/products/${sticker.slug}`}>
              <h2>{sticker.name}</h2>
            </Link>
            <h4>${sticker.price}</h4>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        name
        price
        slug
        preview {
          gatsbyImageData(height: 250, placeholder: BLURRED)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
