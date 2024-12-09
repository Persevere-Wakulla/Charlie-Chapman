import { useLoaderData, Link } from "react-router-dom";

const careers = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};
export default careers;

// ? loader function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:3000/careers");

  if (!res.ok) {
    throw Error("Could not f etch the careers");
  }
  return res.json();
};
