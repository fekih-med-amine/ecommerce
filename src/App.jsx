import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home  from './pages/Home';
import SignInSide from './pages/SignInSide';
import SignUp from './pages/SignUp';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/connexion" element={<SignInSide/>} />
        <Route path="/inscription" element={<SignUp/>} />
        
        <Route path='/' element={<Home/>} >
          
      </Route>
       
      </Routes>
    </Router>
  );
}

export default App;
