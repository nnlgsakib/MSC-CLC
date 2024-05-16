import { fetchData } from "../token-baseprice";
import axios from "axios";


export const supported_tokens = ["USDT", "MUSD", "PMIND"];
// Define a function that encapsulates all asynchronous operations
async function fetchUSDTPrice() {
    try {
        const API = await fetchData(supported_tokens[0]);
        const response = await axios.get(API);
        const price = response.data.price;
        return price;
    } catch (error) {
        console.log(error);
        return 0;
    }
}
async function fetchMUSDPrice() {
    try {
        const API = await fetchData(supported_tokens[1]);
        const response = await axios.get(API);
        const price = response.data.price;
        return price;
    } catch (error) {
        console.log(error);
        return 0;
    }
}
async function fetchPMINDPrice() {
    try {
        const API = await fetchData(supported_tokens[2]);
        const response = await axios.get(API);
        const price = response.data.price;
        return price;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

// Export a promise that resolves to the  price
export const PRICE_RESOLVERS = {fetchMUSDPrice , fetchPMINDPrice, fetchUSDTPrice};
