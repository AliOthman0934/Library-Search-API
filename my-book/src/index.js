import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { AppProvider } from './Context';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookListe/BookList';
import BookDetails from './components/BookDetails/BookDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home></Home>}></Route>
        <Route path='about' element ={<About></About>}></Route>
        <Route path='book' element={<BookList></BookList>}></Route>
        <Route path='/book/:id' element={<BookDetails></BookDetails>}></Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);


