import { ReactElement } from "react";
import { Container, Row } from "react-bootstrap";
import Divider from "../../components/part/Divider";
import MembershipSection from "../../components/sections/Membership";
import Heading from "../../components/part/Heading";
import { InferGetStaticPropsType } from "next";
import { getAllClubMembers } from "../../model/ClubMember";
import HeadingPitch from "../../components/HeadingPitch";
import PartnerEnjoyTeam from "../../components/PartnerEnjoyTeam";

export default function ContactPage({
  clubMembers,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  return (
    <>
      <Container className="px-4 pt-4">
        <div className="px-4 py-4 my-md-5 mb-5 text-center">
          <HeadingPitch clubMembers={clubMembers} />

          <div className="w-900">
            <p className="lead mb-4">
              💪 Každý máme určitou oblast, v níž vynikáme a v níž máme ostatním
              co předat. Sdílíme společně své zkušenosti, vzájemně si pomáháme,
              motivujeme se a inspirujeme.
            </p>

            <p className="lead mb-4">
              💭 S ostatními sdílíme zajímavé výukové materiály, videa a
              inspirativní myšlenky obecně, dělíme se o zajímavé postřehy z
              knih, které právě čteme a každý máme možnost si připravit
              přednášku nebo tématické setkání pro ostatní.
            </p>
          </div>
        </div>

        <div className="text-end mb-3">
          <PartnerEnjoyTeam />
        </div>
      </Container>

      <Divider />

      <Container className="p-4">
        <Heading level={2}>Naše hodnoty</Heading>

        <div className="px-4 py-2 my-md-5 text-center">
          <p className="lead">
            Snažme se do fungování skupinky dát alespoň tolik, kolik si z ní
            vezmeme. Jen tak se může klub dále rozvíjet. Nebojme se být
            proaktivní a dělejme, co považujete za správné. Společně udržujeme v
            klubu pozitivní atmosféru a hledáme především témata, která nás
            spojují, než ta která nás rozdělují (např. politika).
          </p>
        </div>

        <div className="list-group list-group-checkable d-grid gap-2 border-0 w-900 mb-5">
          <div className="list-group-item rounded-3 py-3">
            Důvěra
            <span className="d-block small opacity-50">
              Důvěra nejen v rámci našich setkání je základem pro možnost
              skupinového osobního rozvoje.
            </span>
          </div>

          <div className="list-group-item rounded-3 py-3">
            Autenticita, opravdovost, upřímnost
            <span className="d-block small opacity-50">
              Na nikoho si nehrajeme a mluvíme především ze svých vlastních
              zkušeností.
            </span>
          </div>

          <div className="list-group-item rounded-3 py-3">
            Otevřenost
            <span className="d-block small opacity-50">
              Jsme otevřeni ke změnám a dalšímu růstu.
            </span>
          </div>

          <div className="list-group-item rounded-3 py-3">
            Přátelství
            <span className="d-block small opacity-50">
              Budujeme dlouhodobé vztahy. Nepovyšujeme se jeden na druhého.
              Tykáme si.
            </span>
          </div>
        </div>
      </Container>

      <Divider />

      <MembershipSection />

      <Divider />

      <Container className="p-5">
        <Heading level={2}>Kontakty</Heading>

        <Row>
          <div className="col-md-6">
            <div className="p-4">
              Autorem blogu je:
              <br />
              <b>Miloš Havlíček</b>
              <br />
              E-mail:{" "}
              <a href="mailto:havlicek@cothema.com">havlicek@cothema.com</a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4">
              Provozovatelem webu je:
              <br />
              <a href="https://cothema.com/" target="_blank">
                <b>Cothema s.r.o.</b>
              </a>
              ,<br />
              náměstí 14. října 1307/2,
              <br />
              Smíchov, 150 00 Praha
              <br />
              IČ: 03255336
              <br />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      clubMembers: getAllClubMembers().sort(() =>
        Math.random() > 0.5 ? 1 : -1
      ),
    },
  };
}
