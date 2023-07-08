import logo from './assets/logo.svg';
import './App.css';
import Header from './Components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Header logo ={logo} />
      <span>
      <Routes>
        <Route path='/' element ={<Profile userName = 'BHammock33' />} />
        <Route path='/projects' element = {<Projects userName = 'BHammock33' />} />
        <Route path='/projects/:name' element = {<ProjectDetail userName ='BHammock33' />}/>
      </Routes>
      </span>
      </Router>
    </div>
  );
}


export default App;
