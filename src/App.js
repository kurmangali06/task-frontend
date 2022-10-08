import { Route, Routes } from 'react-router';
import './App.css';
import { Header } from './componets/Header';
import { Details } from './pages/Details';
import { Hero } from './pages/Hero';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/edit" element={<Details />} />
      <Route path="/edit/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
