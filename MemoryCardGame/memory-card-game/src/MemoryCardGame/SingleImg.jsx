const SingleImg = ({img, imgClick}) => {
  const {id, imageSrc, name, clicked} = img
  
  return (
    <div>
    <div className="img-container" onClick={imgClick}>
      <img className="img" src={imageSrc} alt={name}/>
      <p className="p-div">{name}</p>
    </div>
    </div>
  );
};

export default SingleImg