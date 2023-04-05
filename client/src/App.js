// import './App.css';
// import Layout from './components/Layout/Layout';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage />} />
     </Routes>
    </>
  );
}

export default App;
