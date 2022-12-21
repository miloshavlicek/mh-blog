import styles from "./index.module.scss";
import { ReactElement } from "react";
import { Alert, Button, Card, Container, Row } from "react-bootstrap";
import Heading from "../../components/part/Heading";

export default function EventsPage(): ReactElement {
  return (
    <Container>
      <Heading level={1} className="mt-4">
        Kalendář akcí
      </Heading>

      <Row className="pt-4 pb-5 text-center">
        <div className={"col-md-4"}>
          <Card className={styles.card + " border-primary"}>
            <Card.Header className="text-bg-primary">
              <h4 className="my-0 fw-normal text-white">🫖 Čaj s přáteli</h4>
            </Card.Header>
            <Card.Body>
              <p>
                Každý měsíc se setkáváme v příjemném a klidném prostředí
                čajovny, abychom se navzájem inspirovali a motivovali k
                osobnostnímu růstu.
              </p>
              <p>
                Setkání jsou otevřena pro veřejnost. Prosíme pouze o registraci
                na dané setkání skrze odkaz u události v kalendáři.
              </p>
            </Card.Body>
          </Card>
        </div>

        <div className={"col-md-4"}>
          <Card className={styles.card + " border-danger"}>
            <Card.Header className="text-bg-danger">
              <h4 className="my-0 fw-normal text-white">⭐ Masterclass</h4>
            </Card.Header>
            <Card.Body>
              <p>
                Jednou za čas pořádáme pro veřejnost online vysílání na určená
                témata z oblasti osobnostního rozvoje.
              </p>
              <p>
                Pro informace o aktuálně pořádaných vysíláních sleduj náš
                kalendář.
              </p>
            </Card.Body>
          </Card>
        </div>

        <div className={"col-md-4"}>
          <Card className={styles.card + " border-warning"}>
            <Card.Header className="text-bg-warning">
              <h4 className="my-0 fw-normal text-dark">
                💼 Mastermind Business
              </h4>
            </Card.Header>
            <Card.Body>
              Uzavřená online setkání, ve skupině do 10 lidí, zaměřená na
              sdílení podnikatelského know-how, skupinovou motivaci k lepším
              výsledkům, brainstorming a doporučování vhodných kontaktů.
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
        </div>
      </Row>

      <iframe
        src="https://calendar.google.com/calendar/embed?src=prkvd1v4te3kaghjri4bdch9ek%40group.calendar.google.com&ctz=Europe%2FPrague"
        className={styles.iframe}
        height="600"
      ></iframe>

      <div className="pt-4 pb-5 text-center">
        <Alert variant="primary">
          Budeme rádi, pokud se zúčastníš některé z akcí, které pořádáme,
          spolupořádáme či jiným způsobem podporujeme.
        </Alert>
      </div>
    </Container>
  );
}
