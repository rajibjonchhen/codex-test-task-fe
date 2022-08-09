import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Registration from './components/login/registration/Registration';

function App() {
  return (
  

    <div className="App bg-dark text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1 className="bg-dark text-white">Codex Software <Link to="/registration">register</Link></h1>} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
