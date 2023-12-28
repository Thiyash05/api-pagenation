import React from "react";

import Col from 'react-bootstrap/Col';
import "./CryptoCard.css";



function CryptoCard({image,id,name,airdate,rating,type}){

    return(
        <div>
            
                    <Col>
                       <div className="card">
                            <div className="card-img">
                                <img src={image} alt="" className="image"/>
                                
                            </div>
                            <div className="inner-text">
                            <h4>Title : {name}</h4>
                              <p>id :{id}</p>
                              <p> rating :{rating}</p>
                              <p>type :{type}</p>
                            </div>
                            <div className="btn">
                                <button className="button">show </button>
                            </div>
                        </div>
                    </Col>
        </div>
    )
}
export default CryptoCard;