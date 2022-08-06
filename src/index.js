import React from 'react';
import ReactDOM from 'react-dom/client';
import CharacterList from './CharacterList';
import CharacterSheet from './components/CharacterSheet';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NewCharacter from './NewCharacter';
import NotFound from './NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

let characters = JSON.parse(localStorage.getItem('guildsmenCharacters'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<CharacterList />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
