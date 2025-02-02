import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

           // Importing createAsyncThunk from Redux Toolkit to create an asynchronous thunk
export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
           // Async function to fetch products
    async (_, { rejectWithValue }) => {
        try {
          // Sending a GET request to the fake store API to retrieve product data
            const response = await fetch('https://fakestoreapi.com/products');
          // Check if the response status is not OK (status code outside the range of 200-299)
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
          // Parsing and returning the JSON response body if the fetch is successful
            return response.json();
          // Throwing an error if the response is not successful
        } catch (error) {
          // If an error occurs, pass the error message to the Redux state using rejectWithValue
            return rejectWithValue(error.message);
        }
    }
);


const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || 'Unknown error occurred';
            });
    },
});

export default productSlice.reducer;
