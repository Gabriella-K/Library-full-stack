import './App.css'
import LibraryBooks from './components/LibraryBooks'
import LibraryButton from './components/LibraryButton'
import LibraryHeader from './components/LibraryHeader'
import LibraryFooter from './components/LibraryFooter'
import LibraryLogin from './components/LibraryLogin'
import Office from './components/Office'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Doctor from './components/Doctor'
import Appointment from './components/Appointment'

function App() {

  return (
    
      <Routes>
        <Route path="/" element={<LibraryLogin />} />
        <Route path="/office" element={<Office />} />
        <Route path="/books" element={<LibraryBooks />} />
        <Route path="*" element={<LibraryLogin/>} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    
  );
}

export default App
