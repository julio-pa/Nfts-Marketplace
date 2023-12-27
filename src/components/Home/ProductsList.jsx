import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [data, setData] = useState([]);

  function callApi() {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-api-key': '51fc869621ae4f74b5c83fe346418b0b' }
    };

    fetch('https://api.opensea.io/api/v2/collection/mystical-wizards/nfts', options)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));
  }


  useEffect(() => {
    callApi()
    console.log(data)
  }, [])
  return (
    <div className='grid grid-cols-3 gap-3'>
      {
        data?.nfts?.map((data, index) => (
          <ProductCard key={index} data={data} />
        ))
      }
    </div>
  );
}

export default ProductsList;
