import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatPost from './pages/CreatePost';
import Login from './pages/Login';
function App() {
  return <Router>
    < nav style={styles.nav}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/create">Create Post</Link>
      <Link style={styles.link} to="/login">Login</Link>
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
    background: 'gray',
    color: 'white',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
};
export default App;
