import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { Layout } from 'components/Layout/Layout';
import { useAuth } from 'hooks/useAuth';
import { RouterSwitch } from './router/RouterSwitch';

function App() {
  const { isAuthenticated } = useAuth();

  const LayoutComponent = isAuthenticated ? Layout.Private : Layout.Public;

  return (
    <Router>
      <LayoutComponent>
        <RouterSwitch />
      </LayoutComponent>
    </Router>
  );
}

export default App;
