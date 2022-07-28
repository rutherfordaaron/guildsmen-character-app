import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CharacterSheet from './components/CharacterSheet';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NewCharacter from './NewCharacter';

const root = ReactDOM.createRoot(document.getElementById('root'));

let characters = JSON.parse(localStorage.getItem('guildsmenCharacters'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/new-character" element={<NewCharacter />} />
        {characters?.map((el, i) => {
          let route = el.name.split('');
          for (let i = 0; i < route.length; i++) {
            if (route[i] === ' ') {
              route[i] = '%20';
            }
          }
          return (
            <Route path={`/${route.join('')}`} key={`route${i}`} element={<CharacterSheet character={el} index={i} />} />
          )
        })}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
