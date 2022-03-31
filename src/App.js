import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apply from './components/appFormfiles/Apply'
import Flutterwave from './components/Flutterwave'
import Success from './components/Success'

function App() {
  return (
    <Router>
      <Apply/>
<Routes>

<Route path="/flutterwave" element={ <Flutterwave/> } />
<Route path="/success" element={ <Success/> } />

<Route path="/Apply" element={ <Apply/> } />

</Routes>

    </Router>
  );
}

export default App;
