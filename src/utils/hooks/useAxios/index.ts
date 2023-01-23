import axios, { AxiosInstance } from "axios";

export const useAxios = (url:string,timeout:number = 0,headers: {} = {}) => {
  const api: AxiosInstance = axios.create({url,timeout,headers});
  return api;
}
