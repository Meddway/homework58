import {useState} from 'react';
import Modal from '../Modal/Modal';

const Demonstration = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)}>
        <div className="modal-body text-start">
          This is modal content
        </div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default Demonstration;