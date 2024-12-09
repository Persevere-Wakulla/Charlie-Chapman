import { useState } from 'react';

export default function Education() {
    const [education, setEducation] = useState({
        highSchoolName: 'Bayshore High School',
        highestGradeCompleted: '12th grade',
        graduated: false,
        city: 'Bradenton',
        state: 'Florida',
    });

    function handleHighSchoolName(e) {
        setEducation({ ...education, highSchoolName: e.target.value });
    }

    function handlehighestGradeCompleted(e) {
        setEducation({ ...education, highestGradeCompleted: e.target.value });
    }

    function handleGraduate(e) {
        if (e.target.id === 'yes') {
            setEducation({ ...education, graduated: true });
        } else {
            setEducation({ ...education, graduated: false });
        }
    }

    function handlecity(e) {
        setEducation({ ...education, city: e.target.value });
    }

    function handleState(e) {
        setEducation({ ...education, state: e.target.value });
    }
    return (
        <main className="education">
            <div>

            <label htmlFor="sname">School Name:</label>
            <input
                type="text"
                id="Sname"
                onChange={handleHighSchoolName}
                value={education.highSchoolName}
                /> 
            <br />
            <label htmlFor="hgrade">Highest Grade:</label>
            <input
                type="text"
                id="hgrade"
                onChange={handlehighestGradeCompleted}
                value={education.highestGradeCompleted}
                />
            
            <br />
            <div onClick={handleGraduate}>
                <label htmlFor="hgrade">Graduated:</label>
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="graduated" id="yes" />
                <label htmlFor="no">No</label>
                <input type="radio" name="graduated" id="no" />
            </div>
            <label htmlFor="city">City:</label>
            <input
                type="text"
                id="city"
                onChange={handlecity}
                value={education.city}
                />
            <br />
            <label htmlFor="state">State:</label>
            <input
                type="text"
                id="state"
                onChange={handleState}
                value={education.state}
                />
         
                </div>
            <div className="infoDiv">
            <p> {education. highSchoolName}</p>
        <p> {education.highestGradeCompleted}</p>
        <p> {education.graduated}</p>
        <p> {education.city}</p>
        <p> {education.state}</p>
            </div>
        </main>
    )

}
