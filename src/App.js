import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddProduct/>}/>
        <Route path="/search" element={<SearchProduct/>}/>
        <Route path="/delete" element={<DeleteProduct/>}/>
        <Route path="/viewall" element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
