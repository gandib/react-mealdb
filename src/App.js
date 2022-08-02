import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Restaurent from './components/Restaurent/Restaurent';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/restaurent' element={<Restaurent></Restaurent>}>
        </Route>
        <Route path='/restaurent/:mealDetailId' element={<MealDetail></MealDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
