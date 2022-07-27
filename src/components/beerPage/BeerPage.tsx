import React, {FC, useEffect, useState} from 'react';
import {IntBeer} from "../../interface/interface";
import {useFetching} from "../../hooks/useFetching";
import axios from "axios";
import {useParams} from "react-router-dom";
//@ts-ignore
import classes from './BeerPage.module.css';

const BeerPage: FC = () => {

    const [singleBeer, setSingleBeer] = useState<IntBeer | null>(null);
    const params = useParams<string>();

    const [fetchBeer, isLoading, error] = useFetching(async () => {
        const response = await axios.get<IntBeer[]>("https://api.punkapi.com/v2/beers/" + params.id);
        setSingleBeer(response.data[0]);
    });

    useEffect(() => {
        fetchBeer();
    }, []);


    return (
        <div>
            {isLoading ? <div>Loading...</div>
                : <div className={classes.beerPage}><img className={classes.beerImage}
                            src={singleBeer?.image_url}
                            alt="beerImage"
                />
                    <div className={classes.beerTextSide}>
                        <div className={classes.beerName}>
                            {singleBeer?.name} - {singleBeer?.abv}%
                        </div>
                        <div className={classes.beerTagline}>
                            {singleBeer?.tagline}
                        </div>
                        <div className={classes.beerDesc}>
                            {singleBeer?.description}
                        </div>
                        <div className={classes.foodPairing}>
                            FOOD PAIRING:
                            {singleBeer?.food_pairing.map(elem => <li>{elem}</li>)}
                        </div>
                    </div>
                </div>}

        </div>
    );
};

export default BeerPage;