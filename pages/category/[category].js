import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { capitalize } from "../../lib/helpers";
import Container from "../../components/container";
import { getAllPosts, getAllPostsWithSlugAndCategory } from "../../lib/api";
import Layout from "../../components/layout";
import PostPreview from "../../components/post-preview";

export default function Category({ posts }) {
  const router = useRouter();
  const { query } = router;

  const filteredPosts = posts?.filter(
    (post) => post.category === capitalize(query.category)
  );

  return (
    <Layout>
      <Head>
        <title>Category "{capitalize(query.category)}" | Indino.</title>
      </Head>
      <section>
        <Container>
          <p className="tracking-widest">CATEGORY</p>
          <h2 className="mb-8 text-6xl md:text-7xl font-kuz1 font-bold tracking-tighter leading-tight">
            {capitalize(query.category)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
            {filteredPosts?.length === 0 && (
              <div className=" backdrop-filter backdrop-blur-lg md:backdrop-blur-lg">
                No post yet
              </div>
            )}
            {filteredPosts?.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAllPosts();
  return {
    props: {
      posts: data,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlugAndCategory();
  //   console.log(allPosts);
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          category: post.category,
          //   category: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
