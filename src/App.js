import './App.css';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './pages/home';
import About from './pages/about';
import Blogs from './pages/blog';
import Contact from './pages/contact';
import Login from './pages/login';
import NotFound from './pages/Notfound';
import RegisterStudent from './pages/RegisterStudent';
import UpdateStudent from './pages/UpdateStudent';
import DeleteStudent from './pages/DeleteStudent';
import ViewStudent from './pages/ViewStudent';

import { BrowserRouter , Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/student/delete/' element={<DeleteStudent />} />
        <Route path='/student/register' element={<RegisterStudent />} />
        <Route path='/student/update/' element={<UpdateStudent />} />
        <Route path='/student/view/' element={<ViewStudent />} />
        <Route path='/student/view/:id' element={<ViewStudent />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
