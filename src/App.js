import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import News from './components/News';
import './style/style.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
