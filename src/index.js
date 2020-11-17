'use strict';

//syntax for import
import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';

class App extends React.Component{

    render(){

      return (
        <div>
          <h1>Hello World</h1>

          <p>pusang-gala</p>
        </div>
        
      );
    }
  }


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);