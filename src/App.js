import './App.css';
import FormData from './component/MutliStepPage/Form/FormData';
import SigupForm from './component/SigupPage/SigupForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<SigupForm />} />
          <Route path="/multi" element={<FormData/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
