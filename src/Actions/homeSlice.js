import { createSlice } from "@reduxjs/toolkit";
import { geolocationRequest } from "../Api";
export const homeSlice = createSlice({
    name : 'home',
    initialState : {
        metric: true,
        fiveDaysWeather: [],
        autosearchList: [],
        city: {key: null, name: null},
    },
    reducers: {
        setFiveDaysWeather: (state, action)=>{
            state.fiveDaysWeather = action.payload;
        },
        setAutosearchList: (state, action)=>{
            state.autosearchList = action.payload;
        },
        changeTempMode: (state)=>{
            state.metric = !state.metric;
        },
        setCity: (state, action)=>{
            state.city.key = action.payload.key;
            state.city.name = action.payload.name;
        },
        
    }
})
export const {setFiveDaysWeather, setAutosearchList, changeTempMode, changeMode, setCity} = homeSlice.actions;
export default homeSlice.reducer;