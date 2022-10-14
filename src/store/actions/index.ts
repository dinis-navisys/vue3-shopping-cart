import { Commit } from "vuex";
import { state } from "../state";
import { ProductI } from "../types/IProduct";

export const actions = {
    fetchProducts({ commit }: { commit: Commit }) {
        commit("fetchProducts", state.allProducts);
    },

    fetchCartData({ commit }: { commit: Commit }) {
        commit("fetchCartData", state.cart);
    },

    addProductToCart({ commit }: {commit: Commit}, product: ProductI) {
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
}