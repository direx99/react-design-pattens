import './App.css';
import NumberedList from './NumberedList';
import LargePersonList from './people/LargePersonList';
import SmallPersonList from './people/SmallPersonList';
import LargeProductList from './products/LargeProductList';
import SmallProductList from './products/SmallProductList';
import RegularList from './RegularList';
import SplitScreen from './SplitScreen';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
}
const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message}</h1>;
}
function App() {
  return (
    <><SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Dinith" />
      <RightHandComponent message="Full Stack developer" />
    </SplitScreen>
      <RegularList items={people}
        resourceName="person"
        itemsComponent={SmallPersonList} />
      <NumberedList items={people}
        resourceName="person"
        itemsComponent={LargePersonList} />
        <RegularList items={products}
        resourceName="product"
        itemsComponent={SmallProductList} />
        <NumberedList items={products}
        resourceName="product"
        itemsComponent={LargeProductList} />
    </>

  );
}

export default App;


const people = [{
  name: 'Dinith',
  age: 21,
  hairColor: "black",
  hobbies: ['swimming', 'cricket']
},
{
  name: 'Amashi',
  age: 20,
  hairColor: "Brown",
  hobbies: ['swimming', 'cricket']
}
]

const products = [{
  name: 'Laptop',
  price: "100$",
  description: "14' Azus Laptop",
  rating: 3.9
},
{
  name: 'Macbook',
  price: "200$",
  description: "Macbook air 2021 M1",
  rating: 4.7
}
]