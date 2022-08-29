import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './componenti/header/Header';
import HomePages from './home/HomePages';
import Footer from './componenti/footer/Footer';
import SinglePage from './componenti/watch/SinglePage';

function App() {
  return (
    <>
      <Router>
        <Header/>
        
          <Routes>
            <Route path='/' element={<HomePages/>}/>
            <Route path='/singlePage/:id' element={<SinglePage/>}/>
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
