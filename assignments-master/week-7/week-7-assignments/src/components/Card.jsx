import React from "react";

const Card = ({ data }) => {
  const { name, image, location, notifications, followers, likes, photos  } =
    data;
  return (
    <div className="card-container">
      <div className="card">
        <div className="upper-image">

        </div>
        <div className="image">
            <img src={image} alt="card-img" width={80} />

        </div>
 
       <div className="card-middle">
       <h2 className="name">{name}<span>{notifications}</span></h2>
        <p>{location}</p>
       </div>
       <hr></hr>
        <div className="card-bottom">
            <div className="followers">
                <h4>{followers}</h4>
                <p>Followers</p>
            </div>
            <div className="likes">
                <h4>{likes}</h4>
                <p>Likes</p>
            </div>
            <div className="photos">
                <h4>{photos}</h4>
                <p>Photos</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
