import './App.css';
import Home from './components/Home';
import { Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services'


function App() {
  return (
   
     <>
        <Routes>   
                    <Route path='/' element={  <Home /> }/> 
                    <Route path='/about' element ={<About/>}/>
                    <Route path='/services' element ={<Services/>}/>
                    <Route path='/contact' element ={<Contact/>}/>

        </Routes>
     </>
   
  
  );
}

export default App;
