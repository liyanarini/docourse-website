import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import './Cards.css'

const Cards = (props) => {
    return (
        <div className="course-card">
            <div className="card-img">
            <img src={props.image} alt=""/>
            </div>
            <div className="course-details">
                <h4>{props.name}</h4>
                <button className="category"><small>{props.category}</small></button>
                <h5>${props.price}</h5>
                <button className="btn btn-success">Enroll Now <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
        </div>
    );
};

export default Cards;