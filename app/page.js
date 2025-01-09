import Hero from "./Components/home/Hero";
import Verticals from "./Components/home/Verticals";
import About from "./Components/home/About";
import Partners from "./Components/home/Partners";
import WhyPure from "./Components/home/WhyPure";
import PureCommitted from "./Components/home/PureCommitted";
import LatestNews from "./Components/home/LatestNews";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Verticals />
        <About />
        <PureCommitted />
        <WhyPure />
        <Partners />
        <LatestNews />
      </main>
    </>
  );
}
