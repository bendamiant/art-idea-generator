import { useState } from 'react';
import type { PageKey } from './types/types';
import './App.css'
import './components/Navbar';
import Navbar from './components/Navbar';
import GeneratePage from './components/GeneratePage';
import SavedPage from './components/SavedPage';
import RecentsPage from './components/RecentsPage';



function App() {
  const [ selected, setSelected] = useState<PageKey>("generate");

  const onClickNavbar = (clicked: PageKey) => {
    setSelected(clicked);
  };

  const renderPage = () => {
    switch(selected) {
      case 'generate': {
        return <GeneratePage/>
      }
      case 'saved': {
        return <SavedPage/>
      }
      case 'recents': {
        return <RecentsPage/>
      }
    }
  };

  return (
    <div>
      <Navbar currPage={selected} onChange={onClickNavbar}/>
      {renderPage()}
    </div>
  )
}

export default App
