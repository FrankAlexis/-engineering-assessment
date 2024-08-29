import { GetServerSideProps } from 'next';
import MapComponent from '../components/Map';
import { FoodTruck } from '../types/foodTruck';

interface Props {
  foodTrucks: FoodTruck[];
}

const Home: React.FC<Props> = ({ foodTrucks }) => {
  return (
    <div>
      <h1>Food Trucks</h1>
      <MapComponent foodTrucks={foodTrucks} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/food-trucks');
  const foodTrucks: FoodTruck[] = await res.json();

  return {
    props: {
      foodTrucks,
    },
  };
};

export default Home;
