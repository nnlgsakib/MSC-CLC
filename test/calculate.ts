const axios = require('axios');

const data = {
  value: 100,
  tokenName: "MUSD"
};

axios.post('https://msc-clc.vercel.app/api/calculate', data)
  .then((response:any) => {
    console.log('TOTAL PRICE OF YOUR COIN IS :', response.data.total + "$");
  })
  .catch((error:any) => {
    console.error('Error:', error.response.data.error);
  });
