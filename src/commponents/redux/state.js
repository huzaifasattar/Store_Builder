import { createSlice } from "@reduxjs/toolkit";

const Products = createSlice({
  name: "Products",
  initialState: {
    data: [
      {
        category: "Cloths",
        title: "Adidas Shirt",
        price: 75,
        id: 1,
        varients: [
          {
            type: "Shirt",
            option: [
              {
                name: "Small",
                price: 30,
              },
              {
                name: "Medium",
                price: 50,
              },
              {
                name: "Large",
                price: 80,
              },
            ],
          },
        ],
      },
      {
        category: "Accessories",
        title: "EARBUDS",
        price: 300,
        id: 2,
        varients: [
          {
            type: "Earburds",
            option: [
              {
                name: "Black",
                price: 100,
              },
              {
                name: "White",
                price: 150,
              },
            ],
          },
        ],
      },
      {
        category: "Cloths",
        title: "Adidas Hoodie",
        price: 500,
        id: 3,
        varients: [
          {
            type: "Hoodie",
            option: [
              {
                name: "smal",
                price: 50,
              },
              {
                name: "Medium",
                price: 100,
              },
              {
                name: "Large",
                price: 150,
              },
            ],
          },
        ],
      },
      {
        category: "Accessories",
        title: "Metal Strow Bottle",
        price: 105,
        id: 4,
        varients: [
          {
            type: "Bottle",
            option: [
              {
                name: "Hot",
                price: 10,
              },
              {
                name: "Cold",
                price: 30,
              },
            ],
          },
        ],
      },
      {
        category: "Accessories",
        title: "Sunglasses Men",

        price: 3000,
        id: 5,
        varients: [
          {
            type: "Glasses",
            option: [
              {
                name: "Mirror",
                price: 1000,
              },
              {
                name: "Plastic",
                price: 400,
              },
            ],
          },
        ],
      },
      {
        category: "Accessories",
        title: "Adidas Hat Children",
        price: 300,
        id: 6,
        varients: [
          {
            type: "Hat",
            option: [
              {
                name: "Male",
                price: 30,
              },
              {
                name: "Female",
                price: 50,
              },
            ],
          },
        ],
      },
      {
        category: "BackPack",
        title: "Adidas BackPack New",
        price: 3000,
        id: 7,
        varients: [
          {
            type: "Men Bags",
            option: [
              {
                name: "Small",
                price: 500,
              },
              {
                name: "Medium",
                price: 800,
              },
              {
                name: "Large",
                price: 1000,
              },
            ],
          },
        ],
      },
      {
        category: "Shoes",
        title: "Running Shoes Old",
        price: 2000,
        id: 8,
        varients: [
          {
            type: "Male Shoes",
            option: [
              {
                name: "5 Number",
                price: 400,
              },
              {
                name: "7 Number",
                price: 600,
              },
              {
                name: "9 Number",
                price: 1000,
              },
            ],
          },
        ],
      },
      {
        category: "Shoes",
        title: "Running Shoes New",
        price: 5000,
        id: 9,
        varients: [
          {
            type: "Female Shoes",
            option: [
              {
                name: "5 Number",
                price: 800,
              },
              {
                name: "7 Number",
                price: 1200,
              },
              {
                name: "9 Number",
                price: 1600,
              },
            ],
          },
        ],
      },
      {
        category: "Shoes",
        title: "Running Shoes Mid ",
        price: 200,
        id: 10,
        varients: [
          {
            type: "Shoes M/F",
            option: [
              {
                name: "5 Number",
                price: 500,
              },
              {
                name: "7 Number",
                price: 700,
              },
              {
                name: "9 Number",
                price: 900,
              },
            ],
          },
        ],
      },
      {
        category: "BackPack",
        title: "BackPack vision",
        price: 15000,
        id: 11,
        varients: [
          {
            type: "Children Bags",
            option: [
              {
                name: "Small",
                price: 100,
              },
              {
                name: "Medium",
                price: 120,
              },
              {
                name: "Large",
                price: 150,
              },
            ],
          },
        ],
      },
      {
        category: "BackPack",
        title: "BackPack Cold",
        price: 2000,
        id: 12,

        varients: [
          {
            type: "Female Bags",
            option: [
              {
                name: "Small",
                price: 500,
              },
              {
                name: "Medium",
                price: 800,
              },
              {
                name: "Large",
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
