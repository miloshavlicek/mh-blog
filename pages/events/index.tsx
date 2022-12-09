import Container from "../../components/container";

const styles = {
  iframe: {
    width: "100%",
  },
};

export default function EventsPage() {
  return (
    <Container>
      <div className="p-4">
        Budu rád, pokud se zúčastníte nějaké z akcí, které pořádám, spolupořádám
        či jiným způsobem podporuji.
      </div>

      <iframe
        src="https://calendar.google.com/calendar/embed?src=prkvd1v4te3kaghjri4bdch9ek%40group.calendar.google.com&ctz=Europe%2FPrague"
        style={styles.iframe}
        height="600"
      ></iframe>
    </Container>
  );
}
