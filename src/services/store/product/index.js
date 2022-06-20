import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct= createAsyncThunk(
    'allProduct/getAllProduct',
    async () => {
        const response = await axios("https://localhost:44361/Products")
        const formattedResponce = await response.data;
        return formattedResponce;
    }

)

// export const getAllOfficies = createAsyncThunk(
//     'allOfficies/getAllOfficies',
//     async () => {
//         const response = await axios("https://localhost:44352/api/RentaCar")
//         const formattedResponce = await response.data;
//         return formattedResponce;
//     }

// )

export const productStore = createSlice({
    name: 'product',
    initialState: {
        allProduct: [],
        // allOfficies: [],
    },
    extraReducers: {
        [getAllProduct.fulfilled]: (state, action) => {
            state.allProduct = action.payload;
        },
        // [getAllOfficies.fulfilled]: (state, action) => {
        //     state.allOfficies = action.payload;
        // }
    }
})
export default productStore.reducer;