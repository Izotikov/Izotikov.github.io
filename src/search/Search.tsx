import React, {FC, useState} from 'react';
//@ts-ignore
import classes from './Search.module.css';
//@ts-ignore
import searchNormal from '../img/search-normal.svg';
import {IntSearch} from "../interface/interface";

const Search: FC<IntSearch> = ({searchQuery, setSearchQuery}) => {

    return (
        <div className={classes.search}>
            <input
                type="text"
                placeholder="Search for beer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={searchNormal} alt="search-normal" className={classes.search__icon}/>
        </div>
    );
};

export default Search;