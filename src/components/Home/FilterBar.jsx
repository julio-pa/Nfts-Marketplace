import { Bars3BottomLeftIcon, ListBulletIcon, MagnifyingGlassIcon, QueueListIcon, Squares2X2Icon, TableCellsIcon } from "@heroicons/react/24/outline";

const filters = [
  {
    "name": "Price low to high"
  },
  {
    "name": "Price high to low"
  },
  {
    "name": "Recently listed"
  },
  {
    "name": "Best offer"
  },
  {
    "name": "Most rare"
  },
]

const FilterBar = () => {
  return (
    <div className="flex items-center justify-between" >
      <Bars3BottomLeftIcon className="h-8 w-10" />
      <div className="flex items-center gap-1">
        <div className="bg-green-500 w-4 h-4 rounded-full"></div>
        <h3 className="font-bold">Live</h3>
      </div>
      <h3>1024 results</h3>
      <div className='flex gap-1 border border-white rounded-md px-2 w-2/4 mx-3'>
        <MagnifyingGlassIcon className='w-6 ' />

        <input type='text' placeholder='Search' className='bg-transparent p-2 border-transparent focus:border-transparent outline-none w-full' />
      </div>
      <select className="bg-transparent border border-white rounded-md p-3 focus:bg-gray-900 text-lg font-semibold" name="Price low to high">
        {filters.map(({ name }, index) => (
          <option key={index}
            className="" >{name}</option>
        ))}
      </select>
      <ListBulletIcon className="h-10 w-10" />
      <TableCellsIcon className="h-10 w-10" />
      <Squares2X2Icon className="h-10 w-10" />
      <QueueListIcon className="h-10 w-10" />
    </div>
  );
}

export default FilterBar;
