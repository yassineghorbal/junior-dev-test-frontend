import './App.css';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/addproduct' element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
