import { useLocation } from "react-router"
import { Link } from "react-router-dom"


const Breadcrumbs = () => {
    
    const location = useLocation()
    let currentLink = ""
    const crumbs = location.pathname.  split( ' /')
    .filter(crumb => crumb !== "")
    .map(crumb =>{
        currentLink =+ `/${crumb}`
        return(
            <div key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )
    })
    return(
        <div>
            {crumbs}
        </div>
    )
}
export default Breadcrumbs