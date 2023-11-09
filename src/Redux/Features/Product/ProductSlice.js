import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {
        id: "",
        name: "",
        price: "",
        category: "",
        desc: "",
        owner: "",
        brand: "",
        size: "",
        images: [],
        quantity: "",
    },
    singleProduct: {},
    allProducts: [],
    reviews: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setId: (state, {payload}) => {
            state.product.id = payload;
        },
        setName: (state, {payload}) => {  
            state.product.name = payload;
        },
        setPrice: (state, {payload}) => {
            state.product.price = payload;
        },
        setCategory: (state, {payload}) => {
            state.product.category = payload;
        },
        setDesc: (state, {payload}) => {
            state.product.desc = payload;
        },
        setOwner: (state, {payload}) => {
            state.product.owner = payload;
        },
        setImage: (state, {payload}) => {
            state.product.images = payload;
        },
        setQuantity: (state, {payload}) => {
            state.product.quantity = payload;
        },
        setBrand:(state, {payload}) => {
            state.product.brand = payload;
        },
        setReviews: (state, {payload}) => {
            state.reviews = payload;
        },
        setProducts: (state, {payload}) => {
            state.allProducts = payload;
        },
        setSingleProduct: (state, {payload}) => {
            state.singleProduct = payload;
        }
    },
});

export const {
    setId,
    setName,
    setPrice,
    setDesc,
    setCategory,
    setBrand,
    setOwner,
    setImage,
    setQuantity,
    setReviews,
    setProducts,
    setSingleProduct,
} = productSlice.actions;

export default productSlice.reducer;
