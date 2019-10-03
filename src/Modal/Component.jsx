import React from 'react';
import Modal from './Modal';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };

    this.toggle = () => {
      const { modal } = this.state;
      this.setState({
        modal: !modal,
      });
    };
  }


  render() {
    const { modal } = this.state;

    return (
      <div>
        <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
        <Modal isOpen={modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="modal-close-button btn btn-default" onClick={this.toggle}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
