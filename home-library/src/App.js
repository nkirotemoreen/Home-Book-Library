import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react"
import MainPage from "./pages/MainPage";
import BookForm from "./pages/BookForm";
import Library from "./pages/Library";
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<MainPage />}/>
      <Route path="/add" element={<BookForm />}/>
      <Route path="/read" element={<Library />}/>



    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
