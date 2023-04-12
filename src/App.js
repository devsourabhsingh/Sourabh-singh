import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Navbar from './Component/Layout/Navbar';
import Pages404 from './Component/Pages/Pages404';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddUsers from './Users/AddUsers';
import EditUsers from './Users/EditUsers';
import User from './Users/User';
function App() {
  return (
<BrowserRouter>
<Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/users/add' element={<AddUsers/>}/>
    <Route path='/users/edit/:id' element={<EditUsers/>}/>
    <Route path='/users/user/:id' element={<User/>}/>
    <Route path='*' element={<Pages404/>}/>
  </Routes>
</BrowserRouter>
  );
}
 
export default App;
