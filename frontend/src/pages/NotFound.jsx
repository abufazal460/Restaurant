import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <img src="/notFound.svg" alt="notFound" />
        <h1>LOOK LIKE YOU'RE LOST</h1>
        <p>We Can't seem to find you the page you are looking for</p>
        <Link to={"/"}>
          Back To Home{" "}
          <span>
            {" "}
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
