import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    singleProduct: {},
    reviews: [],
};
export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProduct: (state, { payload }) => {
            state.singleProduct = payload;
        },
        setReviews: (state, { payload }) => {
            state.reviews = payload;
        },
        setProducts: (state, { payload }) => {
            state.allProducts = payload;
        },
    },
});

export const {
    setProduct,
    setProducts,
    setReviews,
} = productSlice.actions;
export default productSlice.reducer;