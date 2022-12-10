import ProfileCard from "../components/profile/profileCard";

const styles = {
  bg: {
    backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')",
  },
};

function HomePage() {
  return (
    <div
      className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
      style={styles.bg}
    >
      <ProfileCard
        name="Miloš Havlíček"
        jobTitle="Technologický a startupový nadšenec s vášní pro osobní rozvoj a networking"
        profilePhoto="/img/profile/havlicek-left.jpg"
        description="Vývojář s chutí změnit svět prostřednictvím technologií, který si během své kariéry uvědomil, že tím nejdůležitějším, co rozhoduje o úspěchu a spokojenosti každého z nás jsou silné mezilidské vztahy a míra důvěry. Začal se tak více zaměřovat na budování vztahů, obchod a s tím související vyjednávání."
        linkToFacebook="https://www.facebook.com/miloshavlicek"
        linkToLinkedIn="https://www.linkedin.com/in/miloshavlicek/"
        linkToGitHub="https://github.com/miloshavlicek"
        location="Praha"
      />
    </div>
  );
}

export default HomePage;
