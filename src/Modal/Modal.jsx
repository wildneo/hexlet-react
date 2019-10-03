import React from 'react';
import cn from 'classnames';

const Modal = ({ isOpen, children }) => (
  <div
    className={cn('modal', { fade: isOpen, show: isOpen })}
    style={{ display: isOpen ? 'block' : 'none' }}
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">{children}</div>
    </div>
  </div>
);

const Header = ({ toggle, children }) => (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
    <button
      className="close"
      data-dismiss="modal"
      aria-label="Close"
      type="button"
      onClick={toggle}
    >
      <span aria-hidden="true">×</span>
    </button>
  </div>
);

const Body = ({ children }) => (<p className="modal-body">{children}</p>);
const Footer = ({ children }) => (<p className="modal-footer">{children}</p>);

Modal.Body = Body;
Modal.Header = Header;
Modal.Footer = Footer;

export default Modal;
