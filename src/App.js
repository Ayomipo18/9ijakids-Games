import './App.css';
import { useEffect, useState } from 'react'
import Game from './components/game/game.component';
import Filter from './components/filter/filter.component';
import SearchBox from './components/search-box/search-box.component';
import data from './components/data/data';

const App = () => {
  const [gamesToDisplay, setGamesToDisplay] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterObject, setFilterObject] = useState({
    group : '',
    level : ''
  });

  //Function to filter records based on filter conditions or search text
  const filterRecords = game => {
    const { Topic, Group, Level } = game;

    return Group.includes(filterObject.group) 
    && Level.includes(filterObject.level) 
    && Topic.toLowerCase().startsWith(searchText.trim()) 
  }

  useEffect(() => {
    //when search text or filter condition changes, updates the array of games to display
    setGamesToDisplay(data.filter(filterRecords))
  }, [searchText, filterObject])



  return (
    <div className="App">
      <h1> 9ijakids Game List </h1>
      <SearchBox setSearchText={setSearchText} />
      <Filter setFilters={setFilterObject} filterObject={filterObject}/>
    
      <div className='card-container'>
        {gamesToDisplay.length === 0 ? <p>No games match your query.</p> : ''}
        {
          gamesToDisplay.map(((game, i) => <Game key={game.GameTitle} game={game} />))
        }
      </div>
    
    </div>
);  

}
export default App;