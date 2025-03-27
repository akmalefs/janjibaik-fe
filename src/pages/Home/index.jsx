import Navbar from "../../components/Navbar";
import Hero from "./hero";
import Misi from "./misi";

const Homepage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Misi />
    </div>
  );
};

export default Homepage;
