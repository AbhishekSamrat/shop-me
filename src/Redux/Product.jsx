import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return response.json();
        } catch (error) {
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
