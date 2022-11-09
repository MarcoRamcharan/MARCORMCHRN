import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import MainLayout from './components/MainLayout'





function App() {

  

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainLayout/>}>
           <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}></Route>
        <Route path='skills' element={<Skills/>}></Route>
        <Route path='projects' element={<Projects/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
