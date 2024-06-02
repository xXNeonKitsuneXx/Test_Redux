import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
    logs: string[];
    status: boolean;
}

const initialState: State = {
    logs: [],

    status: false,
    
}



const loggerSlice = createSlice({
    name: "logger",
    initialState,
    reducers: {
        log(state, action: PayloadAction<string>){
            console.log("[LOGGER]", action.payload)
            state.logs.push(action.payload)
        },
        toggle(state){
            state.status = !state.status
        }
    }
});

export const { log, toggle } = loggerSlice.actions;

export default loggerSlice.reducer;

