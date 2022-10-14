import { ProductI } from "../types/IProduct";
import data from "../../data/shop-items.json"
import { ICardItem } from "../types/ICard";


export const state = {
    allProducts: data,
    cart: [] as ICardItem[],
} as State;

export type State = {
    cart: Array<ICardItem>,
    allProducts: Array<ProductI>,
} 