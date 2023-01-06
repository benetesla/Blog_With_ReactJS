import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatPost from './pages/CreatePost';
import Login from './pages/Login';
function App() {
  return <Router>
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">HOME</Link>
      <Link style={styles.link} to="/create">NEW POST</Link>
      <Link style={styles.link} to="/login">LOGIN</Link>
    </nav>
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreatPost />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
}
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10vh',
    width: '100%',
    background: 'linear-gradient(50deg, #FE6B8B 25%, #FF8E53 10%)',
    color: 'white',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
    fontfamily: 'Roboto',
    TextTransform: 'uppercase',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    TextTransform: 'uppercase',
    fontWeight: 'bold',

  },
  
  
};
export default App;
