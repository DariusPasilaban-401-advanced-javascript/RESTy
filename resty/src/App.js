import React from 'react';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';

class App extends React.Component {

  render(){
    return (
      <div data-testid="app-display" className="App">
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
  
}

export default App;
