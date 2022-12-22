import { ReactElement } from "react";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";
import BlogSection from "../components/sections/Blog";
import Divider from "../components/part/Divider";
import { getAllAuthors } from "../model/Author";
import { getAllPosts } from "../model/Post";
import { InferGetStaticPropsType } from "next";
import { getAllTopics } from "../model/Topic";
import { getAllClubMembers } from "../model/ClubMember";
import PartnerEnjoyTeam from "../components/PartnerEnjoyTeam";
import HeadingPitch from "../components/HeadingPitch";

export default function HomePage({
  authors,
  posts,
  topics,
  clubMembers,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  return (
    <>
      <Container className="px-4 pt-4">
        <div className="px-4 py-4 mt-md-5 mb-5 text-center">
          <HeadingPitch clubMembers={clubMembers} />

          <div>
            <Link href="/about">
              <Button variant="outline-primary" size="lg">
                Dozvědět se více
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-end mb-3">
          <PartnerEnjoyTeam />
        </div>
      </Container>

      <Divider />

      <BlogSection
        authors={authors}
        posts={posts}
        topics={topics}
        hideMenuOnMobile
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      authors: getAllAuthors(),
      posts: getAllPosts(),
      topics: getAllTopics(),
      clubMembers: getAllClubMembers().sort(() =>
        Math.random() > 0.5 ? 1 : -1
      ),
    },
  };
}
