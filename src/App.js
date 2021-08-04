import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.sass';
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
      <HashRouter>
        <Navbar user={user}/>
        <Layout user={user} loading={loading}/>
      </HashRouter>
  );
}

export default App;
