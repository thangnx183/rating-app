import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';


class App extends React.Component {
    constructor(){
      super();
      this.state = {
        id : '',
      }
    }
    render() {
      return (
        <div>
          hello world;
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
