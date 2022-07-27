import axios from "axios";
import {IntBeer} from "../interface/interface";

export async function getBeer() {
    const response = await axios.get<IntBeer>("https://api.punkapi.com/v2/beers");
    console.log(response.data)
    return response.data;

}