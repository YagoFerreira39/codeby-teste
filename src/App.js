import React from 'react';
import './App.css';
import Match from './Match';

function App() {
  /*const search = document.getElementById('search');
  const matchList = document.getElementById('match-list');

  const [items] = Api();

  const searchItems = searchText => {

    let matches = items.filter(item => {
      const regex = new RegExp(`${searchText}`, 'gi');
      
      return item.recipe.label.match(regex);
    });

    if (searchText.length === 0) {
      matches = [];
      matchList.innerHTML = '';
    }

    outputHTML(matches);

    console.log(matches);
  };

  //Shows results in HTML
  const outputHTML = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
            <div className="card card-body mb-2">
              <a className="links" href=${match.recipe.url} target="_blank">  
                <h4>${match.recipe.label}<span class="text-primary">${match.recipe.source}</span></h4>
              </a>  
            </div>
        `).join('');

        matchList.innerHTML = html;
    }
  }*/

  
  return (
    <React.Fragment>
      <Match />
    </React.Fragment>
  );
}

export default App;
