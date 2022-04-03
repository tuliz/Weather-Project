import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState:{
        mode: 'light',
        errorMsg: null,
        geolocationActivated: false,
    },
    reducers:{
        changeMode: (state, action)=>{
                state.mode = action.payload;
        },
        setError: (state, action)=>{
            state.errorMsg = action.payload;
            console.log('got a erorr');
        },
        changeGeolocationActivated: (state, action)=>{
            state.geolocationActivated = action.payload;
        },
    }
});

export const {changeMode, setError, changeGeolocationActivated} = appSlice.actions;
export default appSlice.reducer;