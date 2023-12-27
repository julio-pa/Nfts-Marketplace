
import NavBar from '../../components/navigation/NavBar';
import NftList from '../../components/Home/NftList';
import CollectionBanner from '../../components/Home/CollectionBanner';

const Home = () => {
  return (
    <div className='p-6'>
      <NavBar />
      <CollectionBanner />
      <NftList />
    </div>
  );
}

export default Home;
