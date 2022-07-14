import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CharacterSheet from './CharacterSheet';
import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let characters = JSON.parse(localStorage.getItem('guildsmenCharacters'));

root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />} />
      {characters.map((el, i) => {
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
);
