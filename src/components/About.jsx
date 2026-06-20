import discoverOne from "../assets/discover-1.jpg";
import discoverTwo from "../assets/discover-2.jpg";
import discoverThree from "../assets/discover-3.jpg";

function About() {
  const cards = [
    {
      image: discoverOne,
      label: "CONSTRUCTION",
      title: "Building strong foundations for a better future",
    },
    {
      image: discoverTwo,
      label: "PROJECTS",
      title: "Delivering reliable solutions with precision and quality",
    },
    {
      image: discoverThree,
      label: "SUSTAINABILITY",
      title: "Creating safer, smarter, and more efficient work environments",
    },
  ];

  return (
    <section className="discover-section" id="about">
      <div className="discover-header">
        <span>
          DISCOVER <strong>BNA</strong>
        </span>

        <h2>
          We are building reliable construction solutions that support growth,
          quality, and long-term success for every project.
        </h2>
      </div>

      <div className="discover-slider">
        {cards.map((card, index) => (
          <article className="discover-card" key={index}>
            <img src={card.image} alt={card.title} />

            <div className="discover-card-overlay"></div>

            <div className="discover-card-content">
              <span>{card.label}</span>
              <h3>{card.title}</h3>
            </div>

            <button className="discover-arrow" aria-label="View more">
              →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;