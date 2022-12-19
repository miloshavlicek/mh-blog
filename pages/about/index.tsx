import { ReactElement } from "react";
import { Container, Row } from "react-bootstrap";
import Divider from "../../components/part/Divider";
import MembershipSection from "../../components/sections/Membership";
import Heading from "../../components/part/Heading";

export default function ContactPage(): ReactElement {
  return (
    <>
      <Container className="p-4">
        <div className="px-4 py-5 my-5 text-center">
          <Heading level={1}>Klub osobnostního rozvoje Žij svou vášní</Heading>

          <p className="lead mb-4">
            👋 Společně utváříme klub vzájemně se podporujících lidí, kteří si
            jdou za svými cíli a sny.
          </p>

          <p className="lead mb-4">
            💪 Každý máme určitou oblast, v níž vynikáme a v níž máme ostatním
            co předat. Sdílíme společně své zkušenosti, vzájemně si pomáháme,
            motivujeme se a inspirujeme.
          </p>

          <p className="lead mb-4">
            💭 S ostatními sdílíme zajímavé výukové materiály, videa a
            inspirativní myšlenky obecně, dělíme se o zajímavé postřehy z knih,
            které právě čtete nebo si připravit třeba přednášku nebo tématické
            setkání pro ostatní.
          </p>

          <p className="lead mb-4">
            Snažme se do fungování skupinky dát alespoň tolik, kolik si z ní
            vezmeme. Jen tak se může klub dále rozvíjet a poskytovat nám
            hodnotu. Nebojte se být proaktivní a dělejte, co považujete za
            správné. Společně udržujeme v klubu pozitivní atmosféru a hledáme
            především témata, která nás spojují, než ta která nás rozdělují
            (např. politika).
          </p>
        </div>
      </Container>

      <Divider />

      <Container className="p-4">
        <Heading level={2}>Naše hodnoty</Heading>

        <div className="list-group list-group-checkable d-grid gap-2 border-0 w-900">
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
