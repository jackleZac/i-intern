import './App.css';
import './index.css';
import  { Header }from './header';
import  Dashboard  from './Dashboard';
import  Applications from './Applications';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Header />  
        <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/applications' element={<Applications />} />
        </Routes>
      </Router>
  )
}

export default App