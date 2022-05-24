import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage';
import Student from './Components/Student';
import Contact from './Components/Contact';

function App() {
  return (
      <>
      <div>
      
      <BrowserRouter>
      <div id='back'>
      <Link to='/' ><input type='button' id='f' value='Home' className='btn btn-warning'/></Link>
     <Link to='/Student'  ><input type='button'  id='S' value='Student' className='btn btn-warning'/></Link>
     <Link to='/Contact'  ><input type='button'  id='T' value='Contact Us' className='btn btn-warning'/></Link></div>
     <Homepage/>
       <Routes>
         <Route exactpath='/Homepage' element={<Homepage/>}/>
          <Route path='/Student' element={<Student/>}/>
          <Route path='/Contact' element={<Contact/>}/>
       </Routes>
      </BrowserRouter></div>
      </>
  
  );
}

export default App;
