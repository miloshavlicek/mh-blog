import { ReactElement } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
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
import Heading from "../components/part/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons/faMapMarker";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

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

      <div className="p-4 text-center">
        <Container className={"mb-4"}>
          <Heading level={1}>Nejbližší akce</Heading>

          <Row>
            <div className={"col-md-4"}></div>
            <div className={"col-md-4"}>
              <Card className={"border-primary"}>
                <Card.Header className="text-bg-primary">
                  <a
                    href="https://www.facebook.com/events/1177138076230189"
                    className={"text-white"}
                  >
                    <b>🫖 Čaj s přáteli: Novoroční předsevzetí</b>
                  </a>
                </Card.Header>
                <Card.Body>
                  <div className={"mb-2"}>
                    <FontAwesomeIcon icon={faCalendar} className={"me-2"} />
                    <b>Středa 4. 1. 2023</b> 17:55 - 20:00
                    <br />
                    <FontAwesomeIcon icon={faMapMarker} className={"me-2"} />
                    Čajovna U Džoudyho, Praha
                  </div>
                  <p>
                    Dáváte si novoroční předsevzetí nebo pracujete na zlepšování
                    svých návyků průběžně během roku? Ať už tak či tak, pojďme
                    se vzájemně motivovat a zvýšit pravděpodobnost, že námi
                    stanovených cílů dosáhneme. 🙂
                  </p>
                  <a
                    href="https://forms.gle/S4iukR6ooJbpZrkt6"
                    target="_blank"
                    className="btn btn-sm btn-primary"
                  >
                    Chci se zúčastnit
                    <FontAwesomeIcon icon={faArrowRight} className={"ms-2"} />
                  </a>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Container>
      </div>

      <Divider />

      <BlogSection
        authors={authors}
        posts={posts}
        topics={topics}
        limit={3}
        hideMenu
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
