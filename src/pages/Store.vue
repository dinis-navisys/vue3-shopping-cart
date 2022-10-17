<template>
  <div class="grid grid-cols-3">
    <div v-for="product in getProducts" :key="product.id">
    <div class="flex mt-2 ml-2">
      <div class="p-6 bg-white rounded-xl border-solid border-2 border-black">
        <h1
          class="text-2xl flex justify-center align-top font-bold text-gray-700"
        >
          {{ product.name }}
        </h1>
        <img
          class="w-64 mt-4 object-cover rounded-t-md"
          :src="product.picture"
          alt="Image not working"
        />
        <div class="mt-4">
          <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <button
              class="block text-xl font-semibold text-gray-700 cursor-auto"
            >
              ${{ product.price }}
            </button>
            <div>
              <div v-if="checkIfItemIsInCard.get(product.id) === false">
                <button
                  @click="addToCard(product)"
                  class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-black rounded-lg shadow hover:shadow-md transition duration-300"
                >
                  Buy
                </button>
              </div>
              <div v-else>
                <button class="circleBtn" @click="increaseProductQ(product.id)">
                  +
                </button>
                {{findProductQuantity.get(product.id)}}
                <button class="circleBtn" @click="decreaseProductQ(product.id)">
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <ShoppingCartIcon />
</template>

<script setup lang="ts">
import {  computed } from "vue";
import { useStore } from "vuex";
import { ICardItem } from "../store/types/ICard";
import { ProductI } from "../store/types/IProduct";
import ShoppingCartIcon from "../components/cart/ShoppingCartIcon.vue";

const store = useStore();

const getProducts = computed(() => {
  return store.getters.getProducts;
});

const getCardLength = computed(() => {
  return store.getters.getCardLength;
})

const getCardData = computed(() => {
  return store.state.cart;
});

const findProductQuantity = {
  get(id: number) {
    const oneProduct= Array.from(getCardData.value).find((item: any) => item.id === id) as ICardItem;
    return oneProduct.quantity;
  }
}


const addToCard = (product: ProductI) => {
  return store.dispatch("addProductToCart", {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1
  });
};

const checkIfItemIsInCard = {
  get(id: number) {
    const allCard = Array.from(getCardData.value)
      .map((i: any) => i.id)
      .includes(id);
    return allCard;
  },
};

const increaseProductQ = (id: number) => {
  return store.dispatch("increaseProduct", id);
};

const removeFromCart = (id: number) => {
  return store.dispatch("removeProductFromCard", id);
};

const decreaseProductQ = (id: number) => {
  const oneProduct = Array.from(getCardData.value).find((item: any) => item.id === id) as ICardItem;
  if(oneProduct.quantity === 1) {
    removeFromCart(oneProduct.id);
  }
  return store.dispatch("decreaseProduct", id);
};

</script>

<style>
.circleBtn {
  width: 45px;
  font-size: 2em;
  font-weight: bold;
  border-radius: 220%;
  background-color: black;
  color: white;
  text-align: center;
  cursor: pointer;
  margin-bottom: 2rem;
}
</style>
