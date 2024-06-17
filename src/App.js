import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserEmailProvider } from './userEmailProvider';
import Base from './components/base';
import SignIn from './auth/sign-in/signin';
import SignUp from './auth/sign-up/signup';
import Dashboard from './dashboard/dashboard';
import Profile from './dashboard/profile';
import DataPreprocessing from './dashboard/datapreprocessing';
import ChatExplore from './dashboard/chatexplore';


function App() {
  return (
    <div style={{backgroundColor:'white'}}>
      <BrowserRouter>
        <UserEmailProvider>
          <Routes>
            <Route path='/' element={<Base/>} />
            <Route path='/signin'element={<SignIn />} />
            <Route path='/signup'element={<SignUp />} />
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/profile' element={<Profile /> } />
            <Route path='/datapreprocessing' element={<DataPreprocessing />} />
            <Route path='/chatexplore' element={<ChatExplore/>} />
          </Routes>
        </UserEmailProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


