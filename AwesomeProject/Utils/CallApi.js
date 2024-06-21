
export const getProductsApi = ({num}) => {
  return new Promise((resolve, reject) => {
    fetchApi(`https://fakestoreapi.com/products?limit=${num}`, 'GET')
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const fetchApi = (url,{method}) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res=>res.json())
    .then(json=>resolve(json))
    .catch(error=>reject(error))
  });
};
