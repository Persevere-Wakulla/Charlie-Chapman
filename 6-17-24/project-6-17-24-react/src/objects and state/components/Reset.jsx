import Education from "./Education";
import PersonalInfo from "../../props/PersonalInfo";
import WorkHistory from "./WorkHistory";


export default function Reset() {
    function reset() {
   
        document.querySelectorAll('input').forEach(input => input.value = '')
        document.querySelectorAll('p').forEach(para => para.value = '')
      }

    return(
        <button className='btn1' onClick={reset}>Reset All</button>
    )
}