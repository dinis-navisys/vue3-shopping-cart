import { State } from "../state";
import { ICardItem } from "../types/ICard";

export const getters = {
    getProducts: (state: State) => state.allProducts,
    getAllCart: (state: State) => state.cart,
    getTotal: (state: State) => {
        let total = 0
        state.cart.map((p: ICardItem) => {
            total += p.price * p.quantity!
        })
        return total
    },
    getCardLength: (state: State) => {
        let total = 0;
        state.cart.map((p: ICardItem) => {
            total += p.quantity!
        })
        return total
    }
}