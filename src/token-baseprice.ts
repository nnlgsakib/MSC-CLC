import axios, { AxiosError } from 'axios';
import { TOKEN_INFO_API } from './constants';


// using this func we can fech the price info from the token registry 
export async function fetchData(COIN_NAME: string) {
   try {
    const response = await axios.get(TOKEN_INFO_API);
    const price = response.data.data[COIN_NAME]?.PRICE_API;
    if (price !== undefined && price !== null && price !== '') {
      return price;
    } else {
      console.error("API Error: Price api not found for " + COIN_NAME);
      return null; // or throw an error
    }
  } catch (err: unknown) 
  {
    if (axios.isAxiosError(err)) {
      console.error('Axios Error:', (err as AxiosError).message);
    } else {
      console.error('Unknown Error:', err);
    }
  }
}


// // test func 
// (async () => {

//   const musd = await fetchData("USDT");
//   if (musd !== null) {
//     console.log(musd);
//   }
// })();
