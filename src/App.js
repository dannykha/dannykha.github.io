import './App.scss'
import { Link, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
        <ul>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link  to="/about">About</Link>
          </li>
          <li>
            <Link  to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App