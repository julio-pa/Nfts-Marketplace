import FilterBar from "./FilterBar";
import ProductsList from "./ProductsList";
import Sections from "./Sections";
import SideFilter from "./SideFilter";

const NftList = () => {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <Sections />
      <FilterBar />
      <div className="flex gap-2">
        <SideFilter />
        <ProductsList />
      </div>
    </div>
  );
}

export default NftList;
