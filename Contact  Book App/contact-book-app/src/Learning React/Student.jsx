import propTypes from 'prop-types'


const Student = (props) => {
    return(
        <div className="students">
            <p>Name: {props.name} {props.lastName}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    )
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

Student.defaultProps = {
    name:'Guest',
    age: 0,
    isStudent:false,
}
export default Student