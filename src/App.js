import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'
import { AuthProvider } from './Components/Auth';
import Login from './Components/NavComponent/Login';
import Profile from './Components/NavComponent/Profile';
import Home from './Components/Home';
import {ProfileReqAuth} from './Components/NavComponent/ProfileReqAuth'

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='profile' element=
            {
              <ProfileReqAuth>
                <Profile />
              </ProfileReqAuth>
            }
          />
        </Routes>
      
        </div>
    </AuthProvider>

  );
}

export default App;
