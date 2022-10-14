import { State } from "../state";
import { IdType } from "../types/helpers";
import { ICardItem } from "../types/ICard";
import { ProductI } from "../types/IProduct";

export const mutations = {
  fetchProducts(state: State, allProducts: []) {
    state.allProducts = allProducts;
  },

  fetchCartData(state: State, cart: []) {
    state.cart = cart;
  },

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
    state.cart = state.cart.filter((p: IdType) => p.id != id);
  },

  increaseProduct(state: State, id: number) {
    const oneProduct = state.allProducts.find((p: ICardItem) => p.id === id);
    state.cart.map((i) => {
      if(i.id === oneProduct!.id) {
        i.quantity! += 1;
      }
    })
  },
  
  decreaseProduct(state: State, id: number) {
    const oneProduct = state.allProducts.find((p: ProductI) => p.id === id);
    state.cart.map((i: ICardItem) => {
      if(i.id === oneProduct!.id && i.quantity! > 1) {
        i.quantity! -= 1;
      }
    })
  }

} 