import Axios, { AxiosRequestConfig } from "axios";

const CreateAxiosInstance = () => {
    return Axios.create({ baseURL: "https://pokeapi.co/api/v2" });
}

const axiosInstance = CreateAxiosInstance();

export default {
    createAxiosInstance: () => axiosInstance,
};
