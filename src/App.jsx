import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <main>
      <section className="top-section">
        <Navbar />
        <Hero />
      </section>

      <About />
    </main>
  );
}

export default App;