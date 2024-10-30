// // shopSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import product from "../db.json";

// const API_URL = "http://localhost:4000/users";

// // Fetch users
// export const fetchUsers = createAsyncThunk("shop/fetchUsers", async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// // Fetch cart data
// export const fetchCartData = createAsyncThunk(
//   "shop/fetchCartData",
//   async (userId) => {
//     const response = await axios.get(`${API_URL}/${userId}`);
//     const productIds = product.products.map((item) => item.id);
//     return response.data.cart.filter((item) => productIds.includes(item.id));
//   }
// );

// // Add item to cart
// export const addToCart = createAsyncThunk(
//   "shop/addToCart",
//   async ({ userId, product }) => {
//     const response = await axios.get(`${API_URL}/${userId}`);
//     const cartData = response.data.cart;

//     if (!cartData.some((item) => item.id === product.id)) {
//       const updatedCart = [...cartData, product];
//       await axios.patch(`${API_URL}/${userId}`, { cart: updatedCart });
//       return updatedCart;
//     } else {
//       throw new Error("Item is already in the cart");
//     }
//   }
// );

// // Delete item from cart
// export const deleteItem = createAsyncThunk(
//   "shop/deleteItem",
//   async ({ userId, index, cartItems }) => {
//     const updatedCart = cartItems.filter((_, ind) => ind !== index);
//     await axios.patch(`${API_URL}/${userId}`, { cart: updatedCart });
//     return updatedCart;
//   }
// );

// // Update item quantity
// export const updateQuantity = createAsyncThunk(
//   "shop/updateQuantity",
//   async ({ userId, newQuantity }) => {
//     await axios.patch(`${API_URL}/${userId}`, { cart: newQuantity });
//     return newQuantity;
//   }
// );

// const shopSlice = createSlice({
//   name: "shop",
//   initialState: {
//     cartItems: [],
//     userCount: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.userCount = action.payload;
//       })
//       .addCase(fetchCartData.fulfilled, (state, action) => {
//         state.cartItems = action.payload;
//       })
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.cartItems = action.payload;
//       })
//       .addCase(deleteItem.fulfilled, (state, action) => {
//         state.cartItems = action.payload;
//       })
//       .addCase(updateQuantity.fulfilled, (state, action) => {
//         state.cartItems = action.payload;
//       })
//       .addMatcher(
//         (action) => action.type.endsWith("/rejected"),
//         (state, action) => {
//           state.error = action.error.message;
//         }
//       );
//   },
// });

// export const selectCartItems = (state) => state.shop.cartItems;
// export const selectUserCount = (state) => state.shop.userCount;

// export default shopSlice.reducer;

// shopSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import productData from "../db.json"; // Assuming this is your local product data

const API_URL = "http://localhost:4000/users";
const PRODUCT_API_URL = "http://localhost:4000/products"; // Adjust based on your API structure

// Fetch users
export const fetchUsers = createAsyncThunk("shop/fetchUsers", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Fetch products
export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async () => {
    return productData.products; // Or fetch from API: const response = await axios.get(PRODUCT_API_URL);
  }
);

// Fetch cart data
export const fetchCartData = createAsyncThunk(
  "shop/fetchCartData",
  async (userId) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data.cart;
  }
);

// Add item to cart
export const addToCart = createAsyncThunk(
  "shop/addToCart",
  async ({ userId, product }) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    const cartData = response.data.cart;

    if (!cartData.some((item) => item.id === product.id)) {
      const updatedCart = [...cartData, product];
      await axios.patch(`${API_URL}/${userId}`, { cart: updatedCart });
      return updatedCart;
    } else {
      throw new Error("Item is already in the cart");
    }
  }
);

// Delete item from cart
export const deleteItem = createAsyncThunk(
  "shop/deleteItem",
  async ({ userId, index, cartItems }) => {
    const updatedCart = cartItems.filter((_, ind) => ind !== index);
    await axios.patch(`${API_URL}/${userId}`, { cart: updatedCart });
    return updatedCart;
  }
);

// Update item quantity
export const updateQuantity = createAsyncThunk(
  "shop/updateQuantity",
  async ({ userId, newQuantity }) => {
    await axios.patch(`${API_URL}/${userId}`, { cart: newQuantity });
    return newQuantity;
  }
);

// Add product
export const addProduct = createAsyncThunk(
  "shop/addProduct",
  async (newProduct) => {
    await axios.post(PRODUCT_API_URL, newProduct);
    return newProduct; // Optionally return the new product for further use
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  "shop/updateProduct",
  async ({ id, updatedProduct }) => {
    await axios.patch(`${PRODUCT_API_URL}/${id}`, updatedProduct);
    return updatedProduct; // Return the updated product
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  "shop/deleteProduct",
  async (id) => {
    await axios.delete(`${PRODUCT_API_URL}/${id}`);
    return id; // Return the id of the deleted product
  }
);

// Block user
export const blockUser = createAsyncThunk("shop/blockUser", async (id) => {
  await axios.patch(`${API_URL}/${id}`, { blockStatus: true });
  return id; // Return the id of the blocked user
});

// Unblock user
export const unblockUser = createAsyncThunk("shop/unblockUser", async (id) => {
  await axios.patch(`${API_URL}/${id}`, { blockStatus: false });
  return id; // Return the id of the unblocked user
});

// Process payment
export const processPayment = createAsyncThunk(
  "shop/processPayment",
  async (order) => {
    await axios.post("http://localhost:4000/order", order);
    return order; // Return the order for further use
  }
);

// Delete cart
export const deleteCart = createAsyncThunk(
  "shop/deleteCart",
  async (userId) => {
    await axios.patch(`${API_URL}/${userId}`, { cart: [] });
    return []; // Return an empty array to update the cart state
  }
);

const shopeSlice = createSlice({
  name: "shop",
  initialState: {
    cartItems: [],
    userCount: [],
    products: [],
    currency: "$",
    deliveryFee: 10,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.userCount = action.payload;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(blockUser.fulfilled, (state, action) => {
        // Handle user blocking logic if necessary
      })
      .addCase(unblockUser.fulfilled, (state, action) => {
        // Handle user unblocking logic if necessary
      })
      .addCase(processPayment.fulfilled, (state, action) => {
        // Handle payment logic if necessary
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.error.message;
        }
      );
  },
});

export const selectCartItems = (state) => state.shop.cartItems;
export const selectUserCount = (state) => state.shop.userCount;
export const selectProducts = (state) => state.shop.products;
export const selectCurrency = (state) => state.shop.currency;
export const selectDeliveryFee = (state) => state.shop.deliveryFee;

export default shopeSlice.reducer;
