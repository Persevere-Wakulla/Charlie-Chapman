import { Link, useRouteError } from "react-router-dom"


const CareerError = () => {
const error = useRouteError

    return(
        <div>
            <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Back to the homepage</Link>
            </div>
    )
}
export default CareerError