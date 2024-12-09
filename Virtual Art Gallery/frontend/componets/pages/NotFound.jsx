import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="error-pg">
        <div className="fade"></div>
    <div className="star-wars">
      <div className="crawl">
        <div className="title">
          <p className="error-p">Error</p>
          <h1 className="error">&#9888; Page not found&#9888;</h1>
        </div>
      
        <p className="error-p">
          So sorry, page is outta this universe on a search for the most
          advanced AI in order to code it
        </p>
        <p className="error">&#128679;404&#128679;</p>
        <p className="notFound-p">
          {/* link to return to home page */}
         Go to the <Link to="/">Homepage</Link> 
        </p>
      </div>
    </div>
    </section>
  );
};
export default NotFound;
