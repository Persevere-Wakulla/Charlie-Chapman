import { useState } from 'react';

export default function WorkHistory() {
    
    const [work, setWork] = useState({
        companyName: 'Tropicana',
        position: 'Chief Ceo',
        mainResponsibilites:'etc, etc',
        dateBegin:'11/4/1975',
        dateEnd:'11/5/1975'
    });
    function handleCompanyName(e) {
        setWork({ ...work, companyName: e.target.value });
    }
    function handlePosition(e) {
        setWork({ ...work, position: e.target.value });
    }
    function handleMainResponsibilites(e) {
        setWork({ ...work, mainResponsibilites: e.target.value });
    }
    function handleDateBegin(e) {
        setWork({ ...work, dateBegin: e.target.value });
    }
    function handleDateEnd(e) {
        setWork({ ...work, dateEnd: e.target.value });
    }


    return(
    <main>
        <div>
     <label htmlFor="cname">Company Name:</label>
            <input
                type="text"
                id="Cname"
                onChange={handleCompanyName}
                value={work.companyName}
                /> 
                <br />
     <label htmlFor="position">Position:</label>
            <input
                type="text"
                id="position"
                onChange={handlePosition}
                value={work.position}
                /> 
                <br />
     <label htmlFor="respon"> Responsibilities:</label>
            <input
                type="text"
                id="respon"
                onChange={handleMainResponsibilites}
                value={work.mainResponsibilites}
                /> 
                <br />
     <label htmlFor="dBegin">Date Begin:</label>
            <input
                type="text"
                id="dBegin"
                onChange={handleDateBegin}
                value={work.dateBegin}
                /> 
                <br />
     <label htmlFor="dEnd">Date End:</label>
            <input
                type="text"
                id="dEnd"
                onChange={handleDateEnd}
                value={work.dateEnd}
                /> 
                </div>
                <div className="infoDiv">
                    <p>{work.companyName}</p>
                    <p>{work.position}</p>
                    <p>{work.mainResponsibilites}</p>
                    <p>{work.dateBegin}</p>
                    <p>{work.dateEnd}</p>
                    
                </div>
    </main>
    )

}
