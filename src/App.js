import React, { Component } from 'react';
import './App.css';
import CreateStarterpack from './components/Buttons/CreateStarterpack';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';
import ModalCreateStarterpack from './components/ModalCreateStarterPack';

class App extends Component {
	/*
	constructor(props, context) {
		super(props, context);

		this.handleShowModal = this.handleShow.bind(this);
		this.handleCloseModal = this.handleClose.bind(this);

		this.state = {
			showModal: false
		};
	}
	*/

	state = {
		showModal: false
	};

	handleCreateStarterpack = () => {};

	handleShowModal = () => {
		console.log('Create Startpack button clicked');

		this.setState({ showModal: true }, () => {
			console.log(this.state.showModal);
		});
	};

	handleCloseModal = () => {
		console.log('Close modal clicked');

		this.setState({ showModal: false }, () => {
			console.log(this.state.showModal);
		});
	};

	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Form>
						<FormGroup>
							<FormControl type="text" placeholder="Search" />
						</FormGroup>{' '}
					</Navbar.Form>
				</Navbar>
				<CreateStarterpack onCreateStarterpack={this.handleShowModal} />
				{this.state.showModal && <ModalCreateStarterpack onCloseModal={this.handleCloseModal} />}
			</div>
		);
	}
}

export default App;
