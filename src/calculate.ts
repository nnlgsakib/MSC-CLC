import { PRICE_RESOLVERS } from "./tokens/supported-tokens";
import { supported_tokens } from "./tokens/supported-tokens";

function coinFetcher(TOKEN_NAME: string){
    if (TOKEN_NAME == supported_tokens[0]){
        return PRICE_RESOLVERS.fetchUSDTPrice;
    }
    else if (TOKEN_NAME == supported_tokens[1]){
        return PRICE_RESOLVERS.fetchMUSDPrice;
    }
    else if (TOKEN_NAME == supported_tokens[2]){
        return PRICE_RESOLVERS.fetchPMINDPrice;
    }
    else {
        return "NOT_A_SUPPORTED_TOKEN"
    }
}
export async function calc(value: number , TOKEN_NAME: string){
    try {
        const priceFetcher = coinFetcher(TOKEN_NAME);
        if (priceFetcher === "NOT_A_SUPPORTED_TOKEN") {
            console.log("Token not supported");
            return 0;
        }
        const price = await priceFetcher();
        const total: any = value * price;
        // console.log("Current Price:", price);
        // console.log("My Total Calculation: $", total);
        return total;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

// // Example usage:
// (async () => {
//     await calc(100, "PMIND"); 
// })();
