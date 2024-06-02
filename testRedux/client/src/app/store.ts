import { configureStore } from "@reduxjs/toolkit";
import loggerSlice from "./logger/loggerSlice";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        logger: loggerSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

export default store;