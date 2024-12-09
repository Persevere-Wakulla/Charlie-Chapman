import propTypes from 'prop-types'

const UserGreeting = (props) => {

    
    const welcomeMessage = <h2 className="welcome">What They Do {props.username}</h2>
    const log =  <h2 className="log">Please Log in To Continue</h2>
  
  
  return(
    props.isLoggedIn ? welcomeMessage : log
  )
 
};

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest',
}
export default UserGreeting;
