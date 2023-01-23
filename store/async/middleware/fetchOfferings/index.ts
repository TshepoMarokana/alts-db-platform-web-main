import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosApiService from "../../../../src/utils/axiosApi";

// export const fetchOfferings = createAsyncThunk('offerings/fetchOfferings', (url_params?: Array<{[key: string]: string | number}>,) => {     
export const fetchOfferings = createAsyncThunk('offerings/fetchOfferings', (url_params?: any,) => {           
    return AxiosApiService.getOfferings(url_params);
})
