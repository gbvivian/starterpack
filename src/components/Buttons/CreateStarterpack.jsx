import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class CreateStarterpack extends Component {
	state = {};
	render() {
		return (
			<div className="App">
				<Button bsStyle="primary" bsSize="large" onClick={this.props.onCreateStarterpack}>
					Create a starterpack
				</Button>
			</div>
		);
	}
}

export default CreateStarterpack;
