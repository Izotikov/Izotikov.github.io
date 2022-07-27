import React, {FC} from 'react';
import {CardPropsArray} from "../../../interface/interface";
import Card from "../Card";
//@ts-ignore
import classes from "./CardRender.module.css";

const CardRender: FC<CardPropsArray> = ({beer}) => {
    return (
        <div className={classes.mainPage}>
            {beer.map((singleBeer) =>
            <Card
                key={singleBeer.id}
                name={singleBeer.name}
                image_url={singleBeer.image_url}
                description={singleBeer.description}
                id={singleBeer.id}
            />
            )}
        </div>
    );
};

export default CardRender;