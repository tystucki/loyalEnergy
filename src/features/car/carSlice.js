import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [ "Solar", "Learn", "Company", "Careers" ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer;