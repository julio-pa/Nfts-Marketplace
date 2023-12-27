
import Logo from '../../assets/Logo-Dev.png'
import SectionButtom from '../Home/SectionButtom';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon, WalletIcon } from '@heroicons/react/24/outline'

const sections = [
  {
    "title": "Drops"
  },
  {
    "title": "Stats"
  },
  {
    "title": "Create"
  },
]

const NavBar = () => {



  return (
    <div className='flex items-center gap-3 justify-between'>
      <div className='flex items-center gap-1 border-r border-gray-700 pr-2 cursor-pointer'>
        <img src={Logo} alt='logo'
          className='w-16 h-16' />
        <h1 className='text-2xl font-bold'>JP-Nfts</h1>
      </div>
      <div className='flex gap-6'>
        {sections.map(({ title }, index) => (
          <SectionButtom key={index} title={title} />
        ))}
      </div>
      <div className='flex gap-1 border border-white rounded-md bg-gray-900 px-2'>
        <MagnifyingGlassIcon className='w-6 ' />

        <input type='text' placeholder='Search' className='bg-gray-900 p-2 border-transparent focus:border-transparent outline-none ' />
        <div className='text-xl bg-gray-500 px-3 m-3 rounded-md '>/</div>
      </div>
      <div className='flex items-center  bg-gray-800 p-1 rounded-md w-40 justify-center gap-3'>
        <WalletIcon className='w-8' />
        <h3 className='font-bold'>Login</h3>
      </div>
      <UserCircleIcon className='h-10 w-10 bg-gray-800 rounded-md p-1' />
      <ShoppingCartIcon className='h-10 w-10 p-1 bg-gray-800  rounded-md ' />
    </div>
  );
}

export default NavBar;
