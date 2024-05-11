import './App.css';
import './index.css';
import { Header } from './header';
import { Dashboard } from './Dashboard';
import { Applications} from './Applications';
import { About } from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Header />  
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App