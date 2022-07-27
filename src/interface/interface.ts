
export interface IntBeer {
    id: number;
    image_url: string;
    name: string;
    tagline: string;
    description: string;
    abv: number;
    food_pairing: string[];
}

export interface CardProps {
    name: string;
    image_url: string;
    description: string;
    id: string | number;
}

export interface CardPropsArray {
    beer: CardProps[];
}

export interface IntPagiation {
    totalBeers: number;
    limit: number;
    page: number;
    setPage: any;
    fetchBeer: () => void;
}

export interface IntSearch {
    searchQuery: string;
    setSearchQuery: (e:string) => void;
}