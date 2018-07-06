import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'
class App extends Component {
		
		state = {
				lengthInput: 0,
				massiveChar: [],
		};
		
		checkLengthInput = event => {
				let getLength = event.target.value;
				this.setState({
						lengthInput: getLength.length,
						massiveChar: getLength.split('')
				});
		};
		
		deleteChar( charIndex) {
				const chars = this.state.massiveChar;
				chars.splice(charIndex, 1);
				this.setState({massiveChar: chars});
		};
		
  render() {
    return (
      <div className="App">
								<input onChange={(event) => this.checkLengthInput(event)} type="text" value={this.state.massiveChar.join('')}/>
								<ValidationComponent length = {this.state.lengthInput} />
								{this.state.massiveChar.map((charMap, index)=> {
								return(
										<CharComponent
												charInput = {charMap}
												click = {() => {this.deleteChar(index)}}
												key = {index}
										/>
								)
								})}
      </div>
    )
  }
}

export default App;
