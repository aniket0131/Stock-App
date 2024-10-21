import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import StockDetails from './pages/StockDetails';
import { StockProvider } from './Context/StockContext';
import { AuthProvider } from './Context/AuthContext';
import Watchlist from './pages/Watchlist';
import PrivateRoute from '../src/routes/PrivateRoute';
import OpenRoute from '../src/routes/OpenRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <StockProvider>
          <Router>
            <Navbar />
            <Routes>
              {/* Protecting routes using PrivateRoute */}
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/stock/:symbol"
                element={
                  <PrivateRoute>
                    <StockDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="/watchlist"
                element={
                  <PrivateRoute>
                    <Watchlist />
                  </PrivateRoute>
                }
              />
              {/* Public Route */}
              <Route path="/login" element={
                <OpenRoute>
                  <LoginPage />
                 </OpenRoute>
              } />
              <Route
                path="*"
                element={
                  <OpenRoute>
                    <Navigate to="/" />
                  </OpenRoute>
                } />
            </Routes>
          </Router>
        </StockProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
