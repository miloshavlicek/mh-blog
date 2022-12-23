import styles from "./Membership.module.scss";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons/faChartLine";
import Link from "next/link";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons/faExternalLink";
import Heading from "../part/Heading";

export default function MembershipSection() {
  return (
    <Container className="p-5">
      <Heading level={2}>Možnosti zapojení</Heading>

      <Row className="text-center">
        <Col>
          <Card className={styles.card}>
            <Card.Header>
              <h4 className="h5 my-0 fw-bold text-dark">Veřejnost</h4>
            </Card.Header>

            <Card.Body>
              <h5 className="card-title pricing-card-title text-muted">
                💗 Dobrovolný příspěvek
              </h5>

              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  Pro veřejnost pořádáme v Praze otevřená osobní setkání u čaje
                  zaměřená na osobní rozvoj.
                </li>
              </ul>
            </Card.Body>

            <Card.Footer className={"bg-white border-white"}>
              <Link href="/events">
                <Button className="w-100 btn btn-lg btn-primary">
                  Přehled akcí
                </Button>
              </Link>

              <div className="mt-2">
                <i>Jedinečná příležitost nasát inspirativní atmosféru.</i>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className={styles.card}>
            <Card.Header>
              <h4 className="h5 my-0 fw-bold text-dark">
                Registrovaný účastník
              </h4>
            </Card.Header>

            <Card.Body>
              <h5 className="card-title pricing-card-title text-muted">
                🤝 Na pozvání
              </h5>

              <ul className="list-unstyled mt-3 mb-4">
                <li>Přístup k poznámkám ze setkání</li>
                <li>Online diskuze</li>
                <li>Tipy na zajímavé knihy</li>
                <li>
                  <a
                    href="https://www.facebook.com/groups/3363664743917653"
                    target="_blank"
                  >
                    Facebook skupina{" "}
                    <sup>
                      <FontAwesomeIcon icon={faExternalLink} />
                    </sup>
                  </a>
                </li>
              </ul>
            </Card.Body>

            <Card.Footer className={"bg-white border-white"}>
              <Link className="w-100 btn btn-lg btn-primary" href="/profile">
                Přihlásit se
              </Link>

              <div className="mt-2">
                <i>Zůstaň s námi v kontaktu i po skončení akce…</i>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className={styles.card + " border-primary"}>
            <Card.Header className="text-bg-primary">
              <h4 className="h5 my-0 fw-bold text-white">
                <FontAwesomeIcon icon={faChartLine} className="me-2" />
                Člen klubu
              </h4>
            </Card.Header>

            <Card.Body>
              <h3 className="card-title pricing-card-title">
                100 Kč<small className="text-muted fw-light">/měs.</small>
              </h3>

              <ul className="list-unstyled mt-3 mb-4">
                <li>Přístup k členské sekci</li>
                <li>Vyšší míra důvěry</li>
                <li>Pracovní sešity</li>
                <li>Pravidelná vyhodnocení</li>
                <li>Záznamy z online setkání</li>
              </ul>
            </Card.Body>

            <Card.Footer className={"bg-white border-white"}>
              <a href="mailto:havlicek@cothema.com">
                <Button className="w-100 btn btn-lg btn-primary">
                  Mám zájem
                </Button>
              </a>

              <div className="mt-2">
                <i>Vhodné pro studenty a zaměstnance.</i>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className={styles.card + " border-warning"}>
            <Card.Header className="text-bg-warning">
              <h4 className="h5 my-0 fw-bold text-dark">
                💼 Mastermind Business
              </h4>
            </Card.Header>

            <Card.Body>
              <h3 className="card-title pricing-card-title">Kontaktuj nás</h3>

              <ul className="list-unstyled mt-3 mb-4">
                <li>Pravidelné mastermind hovory</li>
                <li>Tématické podnikatelské skupiny</li>
                <li>Přístup k členské sekci</li>
                <li>Pracovní sešity</li>
                <li>Pravidelná vyhodnocení</li>
                <li>Záznamy z online setkání</li>
              </ul>
            </Card.Body>

            <Card.Footer className={"bg-white border-white"}>
              <a href="mailto:havlicek@cothema.com" target="_blank">
                <Button className="w-100 btn btn-lg btn-warning">
                  Získat pozvánku
                </Button>
              </a>

              <div className="mt-2">
                <i>Vhodné pro živnostníky a podnikatele.</i>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <p className="lead mb-4 text-center mt-5">
        💗 Díky Vašim příspěvkům můžeme dále růst. Děkujeme!
      </p>
    </Container>
  );
}
