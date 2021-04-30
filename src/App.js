import './App.css';
import { Component } from 'react';
import { GamesList } from './components/game-list/game-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      games: [
        {
          "GameTitle": "Before and After",
          "GameDescription": "Before and After Yr 2 (prefix and suffix)",
          "Topic": "Word Works and Spelling",
          "Group": "Academic",
          "Level": "Key Stage 1",
          "Subject": "English",
          "GameImage": "https://partners.9ijakids.com/index.php/thumbnail?game=Before and After"
        },
        {
          "GameTitle": "Communication",
          "GameDescription": "Communication Yr 2 (different ways we can communicate)",
          "Topic": "Social Studies",
          "Group": "Academic",
          "Level": "Key Stage 1",
          "Subject": "Social Studies",
          "GameImage": "https://partners.9ijakids.com/index.php/thumbnail?game=Communication"
        },
        {
          "GameTitle": "Kiddiepreneur 101",
          "GameDescription": "Kiddiepreneur 101 (Intro to Earning and Spending)",
          "Topic": "Financial Literacy",
          "Group": "Financial Literacy",
          "Level": "Financial Literacy",
          "Subject": "Financial Literacy",
          "GameImage": "https://partners.9ijakids.com/index.php/thumbnail?game=Kiddiepreneur 101"
        },
        {
          "GameTitle": "Money Matters",
          "GameDescription": "Money Matters (Intro to Key Financial Terms)",
          "Topic": "Financial Literacy",
          "Group": "Financial Literacy",
          "Level": "Financial Literacy",
          "Subject": "Financial Literacy",
          "GameImage": "https://partners.9ijakids.com/index.php/thumbnail?game=Money Matters"
        },
        {
          "GameTitle": "Maths Pop",
          "GameDescription": "Maths Pop (writing numbers in word, sequencing & ordinal numbers)",
          "Topic": "Number Sense",
          "Group": "Academic",
          "Level": "Key Stage 1",
          "Subject": "Mathematics",
          "GameImage": "https://partners.9ijakids.com/index.php/thumbnail?game=Maths Pop"
        },
        {
          "GameTitle": "Exploring Life",
          "GameDescription": "Exploring Life KS",
          "Topic": "Living Things & Non-Living Things",
          "Group": "Academic",
          "Level": "Key Stage 1",
          "Subject": "Science",
          "GameImage": "https://partners.9ijakids.com/index.php/thumbnail?game=Exploring Life"
        },
        {
          "GameTitle": "Mathsmania City - Decimals",
          "GameDescription": "Mathsmania City - Decimal",
          "Topic": "Decimals, Fractions & Percentage",
          "Group": "Academic",
          "Level": "Key Stage 2",
          "Subject": "Mathematics",
          "GameImage": "https://partners.9ijakids.com/index.php/thumbnail?game=Mathsmania City - Decimals"
        }
    ],
      searchField: '',
      //filter: ''
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { games, searchField } = this.state;
    const filteredGamesTpc = games.filter(game =>
      game.Topic.toLowerCase().includes(searchField.toLowerCase())
    );
    /*const filteredGamesGrp = games.filter(game =>
      game.Group.toLowerCase().includes(filter.toLowerCase())
    );
    const filteredGamesLvl = games.filter(game =>
      game.Level.toLowerCase().includes(filter.toLowerCase())
    );*/
    return (
      <div className="App">
        <h1> 9ijakids Game List </h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <GamesList games={filteredGamesTpc} />
    </div>
    );
  }
} 


export default App;
