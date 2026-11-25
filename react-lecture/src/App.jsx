import './App.css'
import './components/HelloUser.jsx'
import './components/Header.jsx'
import './components/ProductCard.jsx'
import './components/UserCard.jsx'
import HelloUser from './components/HelloUser.jsx'
import Header from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'
import UserCard from './components/UserCard.jsx'
import ProductList from './components/ProductList.jsx'

function App() {

  const ps = [
    {id:'0',title:"Название-01",price:'1001'},
    {id:'1',title:"Название-02",price:'1002'},
    {id:'2',title:"Название-03",price:'1003'}
  ];

  const uc = {fullName:"ФИО", login:"Логин",email:"Email@mail.ru",male:"МУЖ",pass:"Qwerty123"};

  return (
    <div className="App">
      <Header/>
      <HelloUser name="Имя"/>
      <UserCard UserData = {uc}/>
      <ProductCard title="Название_01" price='1000'/>
      <ProductCard title="Название_02" price={2000}/>

      <h1>Каталог всех товаров:</h1>
      <ProductList products={ps}/>
    </div>
  );
}

export default App
