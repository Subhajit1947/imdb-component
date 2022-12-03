import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Movies from './component/Movies';
import Pagination from './component/Pagination'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Favorites from './component/Favorites';
import Abc from './component/Abc';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <Movies/>
            
          </>}
        />
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/abc' element={<Abc/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
