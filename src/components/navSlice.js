import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navOptions: [ "Calendar", "Competitions", "Shop", "Trainings" ]
}

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {}
})

export const selectNavOptions = state => state.nav.navOptions;

export default navSlice.reducer;