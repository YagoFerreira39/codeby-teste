import React, {useState} from 'react';
import {Api} from './Api';
import './css/Match.css';

function Match(props) {
  const search = document.getElementById('search');
  const matchList = document.getElementById('match-list');

  const [items] = Api();

  const [matches, setMatches] = useState([]);
  const [searched, setSearched] = useState([]);

  const searchItems = searchText => {

    setSearched(searchText.split(' '));
    console.log(searched);
    
    let getMatches = items.filter(item => {
        const label = item.recipe.label.split(' ');        
        let final = '';

        label.map(el => {
          searched.forEach(s => {
            if(el.toLowerCase().match(s)) {
              final = label.join(' ');
            }
          });
        });

        if(searchText.length > 0) {
            matchList.classList.add('visible');
            matchList.classList.remove('hide');
        }
        else {
            matchList.classList.remove('visible');
            matchList.classList.add('hide');
            final = '';
        }

        return final;
    });
  
    setMatches(getMatches);
  };
  
  let content = (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="form-group">
              <input onInput={() => searchItems(search.value)} type="text" id="search" className="form-control form-control-lg" placeholder="Search..." />
            </div>
            <div id="match-list">
              { 
                matches.map(match => (
                  <a className="links" id="list-links" key={match.recipe.label} href={match.recipe.url} target="_blank">  
                    <span>{match.recipe.label}</span>
                  </a> 
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  return content;
}

export default Match;
