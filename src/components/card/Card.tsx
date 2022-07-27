import React, {FC} from 'react';
import {CardProps} from "../../interface/interface";
//@ts-ignore
import classes from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card: FC<CardProps> = ({name, description, image_url, id}) => {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = id.toString();
        navigate(path);
    }

    return (
        <div className={classes.cardStyle} onClick={routeChange}>
            <div className={classes.beerName}>
                {name}
            </div>
            <img className={classes.beerImg}
                 src={image_url}
                 alt="beerImage"
            />
            <div className={classes.beerDesc}>
                {description.length < 140 ? description : description.slice(0, 140) + '...'}
            </div>
        </div>
    );
};

export default Card;