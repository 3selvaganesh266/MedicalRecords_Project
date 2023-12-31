import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider as LoginAuthProvider } from './components/LoginAuth';  
import { AuthProvider as SignupAuthProvider } from './components/signupAuth'; 
import LoginSignup from './components/LoginSignup';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import Khan from './InPatient/Khans';
import InPatient from './components/InPat';
import OutPatient from './components/OutPat';
import HospitalAnalysis from './components/HospitalAnalysis';
import AboutUs from './Navbar/AboutUs';
import ContactUS from './Navbar/ContactUs';
import Help from './Navbar/Help';
import Resources from './Navbar/Resources';
import More from './Navbar/More';
import Aashish from './InPatient/Aashish';
import Abishek from './InPatient/Abishek';
import Arjun from './InPatient/Arjun';
import Babin from './InPatient/Babin';
import Babu from './InPatient/Babu';
import Makesh from './InPatient/Makesh';
import Meena from './InPatient/Meena';
import Nehkha from './InPatient/Nehkha';
import Reena from './InPatient/Reena';
import Poormila from './InPatient/Poormila';
import Aradhya from './InPatient/Arathaya';
import OutLogin from './components/OutLogin';
import Navbarout from './components/Navbarout';
import Forgotpassword from './components/Forgotpassword';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <LoginAuthProvider>
          <SignupAuthProvider>
            <Routes>
              <Route path="/signup" element={<LoginSignup />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/Home" element={<HomePage />} />
              <Route path="/About" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUS />} />
              <Route path="/help" element={<Help />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/more" element={<More />} />
              <Route path="/InPatient" element={<InPatient />} />
              <Route path="/OutPatient" element={<OutPatient />} />
              <Route path="/HospitalAnalysis" element={<HospitalAnalysis />} />
              <Route path="/Khan" element={<Khan />} />
              <Route path="/Aashish" element={<Aashish />} />
              <Route path="/Abishek" element={<Abishek />} />
              <Route path="/Aradhya" element={<Aradhya />} />
              <Route path="/Arjun" element={<Arjun />} />
              <Route path="/Babin" element={<Babin />} />
              <Route path="/Babu" element={<Babu />} />
              <Route path="/Makesh" element={<Makesh />} />
              <Route path="/Meena" element={<Meena />} />
              <Route path="/Nehkha" element={<Nehkha />} />
              <Route path="/Poormila" element={<Poormila />} />
              <Route path="/Reena" element={<Reena />} />
              <Route path="/outlogin" element={<OutLogin />} />
              <Route path="/navbarout" element={<Navbarout />} />
              <Route path="/forgotpassword" element={<Forgotpassword />} />
              
            </Routes>
          </SignupAuthProvider>
        </LoginAuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
