import './App.css'
import './components/HelloUser.jsx'
import './components/Header.jsx'
import './components/ProductCard.jsx'
import './components/UserCard.jsx'
import './data/UserData.js'
import './data/ProductsData.js'
import HelloUser from './components/HelloUser.jsx'
import Header from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'
import UserCard from './components/UserCard.jsx'
import ProductList from './components/ProductList.jsx'
import UL from './data/UserData.js'
import PL from './data/ProductsData.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <HelloUser name="Имя"/>
      <UserCard users = {UL}/>
      <ProductCard title="Название_01" price='1000'/>
      <ProductCard title="Название_02" price={2000}/>
      <h1>Каталог всех товаров:</h1>
      <ProductList products={PL}/>
    </div>
  );
}

export default App
