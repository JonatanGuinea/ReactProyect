import  Navbar from "./components/Navbar";
import { categories } from "./mock/mockData";
import Counter from "./components/Counter";

function App() {

  return (
    <>
    <Navbar categories={categories} />
    <Counter/>
    </>
  
  )
}

export default App
