import Navbar from "../../components/Navbar";
import Hero from "./hero";
import Misi from "./misi";
import Service from "./service";

const Homepage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Service />
      <Misi />
    </div>
  );
};

export default Homepage;
