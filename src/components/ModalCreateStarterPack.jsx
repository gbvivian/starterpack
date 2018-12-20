import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalCreateStarterpack extends Component {
	state = {};
	render() {
		return (
			<div className="static-modal">
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>

					<Modal.Body>One fine body...</Modal.Body>

					<Modal.Footer>
						<Button onClick={this.props.onCloseModal}>Close</Button>
						<Button bsStyle="primary">Save changes</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</div>
		);
	}
}

export default ModalCreateStarterpack;
