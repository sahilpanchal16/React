import './App.css';
// import Crud from './crud/Crud';
// import Bootstraptemplet from './bootstrap/Bootstrap';
// import UncontrolForm from './project/Form/UncontrolForm'
// import ControlFrom from './project/Form/ControlFrom'
// import FormVel from './project/Form/FormVel';
// import Arry from './project/Array/Arry';
// import Event from './project/event/Event';
// import Content from './project/Counter pro/Content';
// import Footer from './project/Counter pro/Footer';
// import Header from './project/Counter pro/Header';
// import Sidebar from './project/Counter pro/SideBar';
import Home from './project/Routing/Home';
import ContactUs from './project/Routing/ContactUs';
import AboutUs from './project/Routing/AboutUs';
import Login from './project/Routing/Login'
import Sign from './project/Routing/Sign';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Sign' element={<Sign />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/AboutUs' element={<AboutUs />} />
    </Routes>
  </>
  );
}

export default App;
