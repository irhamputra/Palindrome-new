import React, {Component} from 'react';
import {Container, Button, Form, FormGroup, Input, Row, Col} from 'reactstrap';
import Explanation from "./Explanation";

class App extends Component {
		state = {
				res: ''
		};
		
		// helper method
		palindrome = str => {
				// 1. make all string to lowercase and remove all non alphanumeric
				str = str.toLowerCase().replace(/[\W_]/g, "");
				
				// 2. let's get Palindrome
				// first condition: check if empty string is also Palindrome
				if (str.length === 0) return true;
				
				// second condition: check if first char of string strictly equal to last char of string, if they didn't match it's not a palindrome
				if (str[0] !== str[str.length - 1]) return false;
				
				// run again to check next char
				else {
						return this.palindrome(str.slice(1, str.length - 1));
				}
		};
		
		onSubmit = e => {
				e.preventDefault();
				
				const str = e.target.elements.palindrome.value;
				const res = this.palindrome(str);
				
				if (res === false) return this.setState({res: `${str} is not a palindrome`});
				if (str.length === 0) return this.setState({res: 'Empty string is also a palindrome'});
				
				return this.setState({res: `${str} is a palindrome`})
		};
		
		render() {
				return (
						<Container className="mt-5">
								<Row>
										<Col>
												<h1>Palindrome</h1>
												<p>a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses
														run.</p>
												<p>Some famous palindrome words: "Never odd or even", "Madam, I'm Adam"</p>
												<Form onSubmit={this.onSubmit}>
														<FormGroup>
																<Input type="text" name="palindrome" placeholder="Type any word here to check"/>
														</FormGroup>
														<Button color="danger">Check</Button>
												</Form>
												{this.state.res && <h2>{this.state.res}</h2>}
										</Col>
										<Col>
												<Explanation/>
										</Col>
								</Row>
								<p className="small" style={{'textAlign': 'center'}}>Made with ❤️ by Muhamad Irham Prasetyo</p>
						</Container>
				);
		}
}

export default App;
