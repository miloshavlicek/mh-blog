import type { InferGetStaticPropsType } from "next";
import { getAllPosts } from "../../model/Post";
import { ReactElement } from "react";
import { getAllAuthors } from "../../model/Author";
import BlogSection from "../../components/sections/Blog";
import { getAllTopics } from "../../model/Topic";

export default function PostsPage({
  authors,
  posts,
  topics,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  return <BlogSection authors={authors} posts={posts} topics={topics} />;
}

export async function getStaticProps() {
  return {
    props: {
      authors: getAllAuthors(),
      posts: getAllPosts(),
      topics: getAllTopics(),
    },
  };
}
