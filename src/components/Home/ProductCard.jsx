
const ProductCard = ({ data }) => {
  return (
    <div className="rounded-md mx-3 overflow-hidden">
      <img src={data?.image_url}
        className="h-96" />
      <div className="p-3 bg-gray-800 py-6">
        <div className="flex justify-between text-lg font-bold gap-1">
          <p className="text-base">{data?.name}</p>
          <p className="border border-gray-600 rounded-md p-1"># {data?.identifier}</p>
        </div>
        <h3 className="text-lg font-bold">0.004ETH</h3>
      </div>
    </div>
  );
}

export default ProductCard;
