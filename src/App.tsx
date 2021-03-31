import { Dashboard } from './pages/Dashboard';

import { TasksProvider } from './contexts/TasksContext';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { api } from './services/api';


export function App() {

  useEffect(() => {
    document.addEventListener('mousedown', handleInteraction);
  },[]);

  const handleInteraction = () => {
    const path = window.location.pathname;
    
    api.patch(`interactions`,{
      path
    });
  };

  return (
    <TasksProvider>
      <Dashboard />
      <GlobalStyle />
      <ToastContainer />
    </TasksProvider>
  );
}
