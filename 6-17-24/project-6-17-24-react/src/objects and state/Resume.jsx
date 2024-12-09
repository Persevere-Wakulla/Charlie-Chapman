import PersonalInfo from "../props/PersonalInfo";
import Education from "./components/Education";
import Header from "./components/Header";
import Reset from "./components/Reset";
import "../boilerPlate/index.css"
import WorkHistory from "./components/WorkHistory";

export default function Resume() {


  


// Resume holds all the data

    return(
        <>
        <Header name='Chuck' />
        <div className="flex">
        <PersonalInfo/>
        <Education/>
        <WorkHistory/>
        </div>

        <Reset/>
        {/* <InfoDisplay/> */}
        </>
    )
}