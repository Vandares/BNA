import heroBg from "../assets/hero-bg.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <img src={heroBg} alt="BNA Construction Site" />
    </section>
  );
}

export default Hero;