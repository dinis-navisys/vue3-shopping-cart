import { ProductI } from "../types/IProduct";
import data from "../data/shop-items.json"
import { ICardItem } from "../types/ICard";
import { createStore, Commit, createLogger } from "vuex";

export type State = {
    cart: Array<ICardItem>,
    allProducts: Array<ProductI>,
} 

const store = createStore({
    state: {
        allProducts: data,
        cart: [] as ICardItem[],
    } as State,

    actions: {
        addProductToCart({ commit }: { commit: Commit }, product: ProductI) {
            commit('addProductToCart', product);
        },
    
        increaseProduct({ commit }: { commit: Commit }, id: number) {
            commit("increaseProduct", id);
        },
    
        decreaseProduct({ commit }: { commit: Commit }, id: number) {
            commit("decreaseProduct", id);
        },
    
        removeProductFromCard({ commit }: { commit: Commit }, id: number) {
            commit("removeProductFromCard", id);
        }
    },

    mutations: {
        addProductToCart(state: State, product: ProductI) {
            let cartItem = state.cart.find((i) => i.id === product.id);
            if (!cartItem) {
              state.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
              });
            }
          },
        
          removeProductFromCard(state: State, id: number) {
            state.cart = state.cart.filter((p) => p.id != id);
          },
        
          increaseProduct(state: State, id: number) {
            const oneProduct = state.allProducts.find((p: ICardItem) => p.id === id);
            state.cart.map((i) => {
              if (i.id === oneProduct!.id) {
                i.quantity! += 1;
              }
            })
          },
        
          decreaseProduct(state: State, id: number) {
            const oneProduct = state.allProducts.find((p: ProductI) => p.id === id);
            state.cart.map((i: ICardItem) => {
              if (i.id === oneProduct!.id && i.quantity! > 1) {
                i.quantity! -= 1;
              }
            })
          }
    },

    getters: {
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
    },

    plugins: [createLogger()]
})

export default store;