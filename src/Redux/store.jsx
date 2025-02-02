// Importing the configureStore function from Redux Toolkit to create the Redux store
import { configureStore } from '@reduxjs/toolkit';
// Importing the productReducer to manage the product slice of the state
import productReducer from './Product'; 

// Creating and exporting the Redux store
export const store = configureStore({
// Defining the structure of the Redux store by specifying reducers for different slices of state
    reducer: {
// Assigning the product slice of the state to be managed by productReducer
        product: productReducer,
    },
});

