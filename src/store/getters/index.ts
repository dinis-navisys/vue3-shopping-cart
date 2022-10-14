import { State } from "../state";
import { TotalPrice } from "../types/helpers";

export const getters = {
    getProducts: (state: State) => state.allProducts,
    getAllCart: (state: State) => state.cart,
    getAllItemsInCart: (state: State) => state.cart.length,
    getTotal: (state: State) => {
        let total = 0
        state.cart.map((p: TotalPrice) => {
            total += p.price;
        })
        return total
    }
}