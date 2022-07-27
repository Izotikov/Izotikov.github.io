import React, {FC, useEffect, useState} from 'react';
//@ts-ignore
import classes from './Pagination.module.css';
import {IntPagiation} from "../../interface/interface";

const Pagination: FC<IntPagiation> = ({totalBeers, limit, page, setPage, fetchBeer}) => {
    const [paginationPages, setPaginationPages] = useState<number>(Math.ceil(totalBeers/limit));
    const [pagesArray, setPagesArray] = useState<number[]>([]);
    const changePage = (page: number) => {
        setPage(page);
    }

    const arrayForPagination = () => {
        for (let i = 1; i < paginationPages + 1; i++) {
            setPagesArray(pagesArray => [...pagesArray, i]);
        }
    }
    useEffect(() => arrayForPagination(), [paginationPages]);

    return (
        <div className={classes.paginationList}>
            {pagesArray.map(
                elem => <button className={elem === page ? classes.paginationButtonActive : ""} onClick={() => changePage(elem)} key={elem}>{elem}</button>)}
        </div>
    );
};

export default Pagination;