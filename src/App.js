import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/Login" element={<Login/>} />
          </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
