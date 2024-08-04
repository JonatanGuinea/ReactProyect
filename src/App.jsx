import  Navbar from "./components/NavBar/Navbar";
import { categories } from "./mock/mockData";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {

  return (
    <>
    <Navbar categories={categories} />
    <ItemListContainer inicio = {0} stock={8} />
    </>
  
  )
}

export default App
