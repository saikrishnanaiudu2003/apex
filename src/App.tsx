import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import About from './Component/About';

import ApiDocs from './Component/ApiDocs';
import PayOut from './Component/PayOut';
import PrivacyPolicy from './Component/PrivacyPolicy';
import TermConditions from './Component/TermsConditions';
import PayIn from './Component/PayIn';


const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about-us' element={<About/>} />
        <Route path='/payout' element={<PayOut/>}/>
        <Route path='/payIn' element={<PayIn/>}/>
        <Route path='/apidocs' element={<ApiDocs/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-conditions' element={<TermConditions/>}/>
        </Routes>
    </Router>
  );
};

export default App;
