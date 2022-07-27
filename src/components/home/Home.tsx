import React, {FC, useEffect, useMemo, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import axios from "axios";
import {IntBeer} from "../../interface/interface";
import CardRender from "../card/CardRender/CardRender";
import Pagination from "../pagination/Pagination";
import Search from "../../search/Search";
//@ts-ignore
import classes from './Home.module.css'


const Home: FC = () => {

    const [beer, setBeer] = useState<IntBeer[]>([]);
    const [limit, setLimit] = useState<number>(8);
    const [page, setPage] = useState<number>(1);
    const [totalBeers, setTotalBeers] = useState<number>(120);

    const [searchQuery, setSeachQuery] = useState<string>("");

    const [fetchBeer, isLoading, error] = useFetching(async () => {
        const response = await axios.get<IntBeer[]>("https://api.punkapi.com/v2/beers", {
            params: {
                page: page,
                per_page: limit
            }
        });
        setBeer(response.data); // Получаем массив с информацией о пиве.
    });

    const searchedBeer = useMemo(() => {
        return beer.filter(singleBeer => singleBeer.name.includes(searchQuery));
    }, [searchQuery, beer]);

    useEffect(() => {
        fetchBeer();
    }, [page]);

    return (
        <div className={classes.mainPage}>
            <Search searchQuery={searchQuery} setSearchQuery={setSeachQuery}/>
            {isLoading
                ? <div> Loading...</div>
                : beer[0] ? <div>
                    <CardRender beer={searchedBeer}/>
                    <Pagination totalBeers={totalBeers} limit={limit} page={page} setPage={setPage} fetchBeer={fetchBeer}/>
                </div> : <div> Loading... </div>
            }
        </div>
    );
};

export default Home;