import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Count from './pages/Count';
import Restaurant from './pages/Restaurant';
import Reducer from './pages/Reducer';
import TopNav from './pages/TopNav';
import ComponentC from './context/ComponentC';
import ParentComponent from './useCallback/ParentComponent';
import UseMemoComponent from './components/UseMemoComponent';
import UseRefComponent from './components/UseRefComponent';
import React from 'react';

export const userContext = React.createContext();

function App() {
    
  return (
    <div className="container">
    <userContext.Provider value={"userContext"}>
      <ComponentC />
    </userContext.Provider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<TopNav />}>
          <Route index element={<Count />} />
          <Route path="reducer" element={<Reducer />} />            
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="usecallback" element={<ParentComponent />} />
          <Route path="useMemoComponent" element={<UseMemoComponent />} />
          <Route path="userefcomponent" element={<UseRefComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
      
    </div>
  );
}

export default App;
