import axios from "axios";
import {IntBeer} from "../interface/interface";


export async function getArray(limit: number = 12, page: number = 1) {
    const response = await axios.get<IntBeer[]>("https://api.punkapi.com/v2/beers", {
        params: {
            _page: page,
            _per_page: limit
        }
    });
    return response.data;
}