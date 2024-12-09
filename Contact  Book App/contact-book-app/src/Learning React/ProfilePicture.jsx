const ProfilePicture = () => {

    const imageUrl = 'src/assets/pexels-erik-mclean-4061385.jpg'

    const handleClick = (e) => e.target.style.display = 'none'
    
    console.log(imageUrl);
    return(
        <>
        <img src={imageUrl} onClick={(e) => handleClick(e)} className="img" alt="" />
        </>
    )

}
export default ProfilePicture