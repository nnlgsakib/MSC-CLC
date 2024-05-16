const axios = require('axios');

const data = {
  value: 100,
  tokenName: "MUSD"
};

axios.post('http://localhost:3000/api/calculate', data)
  .then((response:any) => {
    console.log('TOTAL PRICE OF YOUR COIN IS :', response.data.total + "$");
  })
  .catch((error:any) => {
    console.error('Error:', error.response.data.error);
  });
