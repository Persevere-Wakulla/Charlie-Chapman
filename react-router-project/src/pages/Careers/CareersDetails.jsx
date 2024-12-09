import { useLoaderData, useParams } from "react-router";


const CareersDetails = () => {
    const {id} = useParams()
    const career = useLoaderData()
  return <div>
    <h2>Career Details for {career.title} </h2>
    <p>Starting salary: {career.salary}</p>
    <p>Location: {career.location}</p>
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nihil quas, saepe delectus nobis magnam voluptatem porro. Quos asperiores corrupti deserunt.</p>
    </div>
  </div>;
};
export default CareersDetails;

export const careerDetailsLoader = async ({params}) => {
    const {id} = params

    const res = await fetch('http://localhost:3000/careers/' + id)

    if(!res.ok){
        throw Error('Could not find that career')
    }

    return res.json()
}
