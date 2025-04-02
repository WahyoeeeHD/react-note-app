import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomepageWrapper from './Pages/HomePage';
import DetailPageWrapper from './Pages/DetailPage';
import AddNote from './Pages/AddPage';
import ArchivePageWrapper from './Pages/ArchivePage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1><Link to='/'>Aplikasi Catatan</Link></h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomepageWrapper />}/>
          <Route path='/notes/:id' element={<DetailPageWrapper />} />
          <Route path='/notes/new' element={<AddNote />}/>
          <Route path='/notes/archives' element={<ArchivePageWrapper />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
