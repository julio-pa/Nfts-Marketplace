import { useEffect, useState } from "react";
import Statics from "./Statics";


const CollectionBanner = () => {

  const [data, setData] = useState([]);

  function callApi() {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-api-key': '51fc869621ae4f74b5c83fe346418b0b' }
    };

    fetch('https://api.opensea.io/api/v2/collections/mystical-wizards', options)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    callApi()
  }, []);

  return (
    <>
      <div className='collection-bg'>
        <img src={data.banner_image_url} className="banner" />
      </div>
      <div className="flex flex-col justify-end p-3 gap-4 -mt-44">
        <img src={data.image_url} className="h-24 w-24 rounded-xl" />
        <div className="text-2xl font-semibold flex justify-between">
          <h3>{data?.name}</h3>
          <div className="flex gap-6">
            <Statics number="37 ETH" title="Total volume" />
            <Statics number="0.004 ETH" title="Floor price" />
            <Statics number="--" title="Best offer" />
            <Statics number="0.7%" title="Listed" />
            <Statics number="538(44%)" title="Owners (Unique)" />
          </div>
        </div>
        <h3 className="text-lg w-1/2 pt-6">{data?.description}</h3>
        <div className="flex gap-3 text-xl font-semibold text-gray-400">
          <p>Items {data?.total_supply}</p>
          <p>Created {data?.created_date}</p>
          <p>Creator earnings 10%</p>
          <p>Chain Ethereum</p>
        </div>
      </div>
    </>

  );
}

export default CollectionBanner;
