import './App.css';

/* Importing the components from the components folder. */
import About from './components/About/About';
import Create from './components/Create/Create';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Note from './components/Notes/Note';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Main/>}  />
        <Route path='/about' element={<About/>} />
        <Route path='/create' element={<Create/>} />
        <Route exact path='/note/' element={<Note/>} />
        <Route exact path='/note/:noteURL' element={<Note/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
