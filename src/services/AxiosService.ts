import Axios from "axios";

const CreateAxiosInstance = () => {
    return Axios.create({ baseURL: "https://pokeapi.co/api/v2" });
}

const CreateAxiosGraphInstance = () => {
    return Axios.create({ baseURL: "https://beta.pokeapi.co/graphql/v1beta" });
}

const axiosInstance = CreateAxiosInstance();
const axiosGraphInstance = CreateAxiosGraphInstance();

export default {
    createAxiosInstance: () => axiosInstance,
    createAxiosGraphInstance: () => axiosGraphInstance
};
