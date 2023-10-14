//1. Imort Area
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Home from './Pages/Home';


//2. Defination area
function App(prop) {
  console.log(prop);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} getclr={prop.myclr}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

//3. Export Area
//3.1 default export 
export default App;

//3.2 Named export 
