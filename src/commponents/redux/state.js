import { createSlice } from "@reduxjs/toolkit";

const Products = createSlice({
  name: "Products",
  initialState: {
    data: [
      {
        category: "cloths",
        title: "Adidas Shirt",
        price: 75,
        id: "product1",
        varients: [
          {
            type: "Shirt",
            option: [
              {
                name: "smal",
                price: 30,
              },
              {
                name: "medium",
                price: 50,
              },
              {
                name: "large",
                price: 80,
              },
            ],
          },
        ],
      },
      {
        category: "accessories",
        title: "EARBUDS",
        price: 300,
        id: "product2",
        varients: [
          {
            type: "Earburds",
            option: [
              {
                name: "black",
                price: 100,
              },
              {
                name: "white",
                price: 150,
              },
            ],
          },
        ],
      },
      {
        category: "cloths",
        title: "Adidas Hoodie",
        price: 500,
        id: "product3",
        varients: [
          {
            type: "Hoodie",
            option: [
              {
                name: "smal",
                price: 50,
              },
              {
                name: "medium",
                price: 100,
              },
              {
                name: "large",
                price: 150,
              },
            ],
          },
        ],
      },
      {
        category: "accessories",
        title: "Metal Strow Bottle",
        price: 105,
        id: "product4",
        varients: [
          {
            type: "Bottle",
            option: [
              {
                name: "hot",
                price: 10,
              },
              {
                name: "cold",
                price: 30,
              },
            ],
          },
        ],
      },
      {
        category: "accessories",
        title: "Sunglasses men",

        price: 3000,
        id: "product5",
        varients: [
          {
            type: "glasses",
            option: [
              {
                name: "mirror",
                price: 1000,
              },
              {
                name: "plastic",
                price: 400,
              },
            ],
          },
        ],
      },
      {
        category: "accessories",
        title: "Adidas Hat children",
        price: 300,
        id: "product6",
        varients: [
          {
            type: "hat",
            option: [
              {
                name: "male",
                price: 30,
              },
              {
                name: "female",
                price: 50,
              },
            ],
          },
        ],
      },
      {
        category: "backPack",
        title: "Adidas BackPack new",
        price: 3000,
        id: "product7",
        varients: [
          {
            type: "Backpack",
            option: [
              {
                name: "smal",
                price: 500,
              },
              {
                name: "medium",
                price: 800,
              },
              {
                name: "large",
                price: 1000,
              },
            ],
          },
        ],
      },
      {
        category: "shoes",
        title: "Running Shoes Old",
        price: 2000,
        id: "product8",
        varients: [
          {
            type: "Shoes",
            option: [
              {
                name: "5 number",
                price: 400,
              },
              {
                name: "7 number",
                price: 600,
              },
              {
                name: "9 number",
                price: 1000,
              },
            ],
          },
        ],
      },
      {
        category: "shoes",
        title: "Running Shoes new",
        price: 5000,
        id: "product9",
        varients: [
          {
            type: "Shoes",
            option: [
              {
                name: "5 number",
                price: 800,
              },
              {
                name: "7 number",
                price: 1200,
              },
              {
                name: "9 number",
                price: 1600,
              },
            ],
          },
        ],
      },
      {
        category: "shoes",
        title: "Running Shoes Mid ",
        price: 200,
        id: "product10",
        varients: [
          {
            type: "Shoes",
            option: [
              {
                name: "5 number",
                price: 500,
              },
              {
                name: "7 number",
                price: 700,
              },
              {
                name: "9 number",
                price: 900,
              },
            ],
          },
        ],
      },
      {
        category: "backPack",
        title: "BackPack vision",
        price: 15000,
        id: "product1",
        varients: [
          {
            type: "Backpack",
            option: [
              {
                name: "smal",
                price: 100,
              },
              {
                name: "medium",
                price: 120,
              },
              {
                name: "large",
                price: 150,
              },
            ],
          },
        ],
      },
      {
        category: "backPack",
        title: "BackPack cold",
        price: 2000,
        id: "product12",

        varients: [
          {
            type: "Backpack",
            option: [
              {
                name: "smal",
                price: 500,
              },
              {
                name: "medium",
                price: 800,
              },
              {
                name: "large",
                price: 1000,
              },
            ],
          },
        ],
      },
    ],
    categories: "All Category",
  },
  reducers: {
    productAdd: (state, action) => {
      state.data.push(action.payload);
    },
    selectedCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
});
export const { productAdd, selectedCategory } = Products.actions;
export default Products;
