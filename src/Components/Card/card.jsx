import React, { useEffect } from 'react';
import "./cardComponent.css";

const CustomCard = (props) => {
  return (

    <div className="card">
      {props.image && <img src={props.image} alt="Card Image" className="custom-card-image" />}
      <div className="custom-card-content">
        {props.name && <h3 className="card-title">{props.name}</h3>}
        {props.description && <p className="card-description">{props.description}</p>}
      </div>
    </div>

  );
};

export default CustomCard;