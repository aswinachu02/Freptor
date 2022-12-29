import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Home = () => {
  return (
    <div>
      <Link to={"/"}>
        <Navbar />
      </Link>
    </div>
  );
};

export default Home;
