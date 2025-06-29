
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home'
import Footer from './public/footer';
import Header from './public/header';

function App() {

  return (
    <>
   
      <Header />
      
            <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </div>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
