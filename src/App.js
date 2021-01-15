import React from 'react';
import './App.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Card, Button } from 'semantic-ui-react';
class App extends React.Component {
  state = { quote: { } };

  componentDidMount() {
    console.log('component did mount');
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios.get('https://type.fit/api/quotes')
    .then((response) => {
      const quote = this.randomQuoteFromArray(response);
      
      this.setState({ quote: quote });
      console.log(this.state.quote);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  randomQuoteFromArray(quotes_array) {
    return quotes_array.data[Math.floor(Math.random() * quotes_array.data.length)];
  }

  render() {
    const quote = this.state.quote;
    return(
      <div className="app">
        <Card className="ui container center aligned">
          <Card.Content className="customCard">
            <Card.Header>{ quote.text }</Card.Header>
            <Card.Description>
              { quote.author }
            </Card.Description>
          </Card.Content>
          <Card.Content extra>

            <Button onClick={this.fetchQuote}>New quote</Button>
          </Card.Content>
          
        </Card>
      </div>
    ) 
  }
}

export default App;