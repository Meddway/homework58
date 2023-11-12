import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({show, title, onClose, children}) => {
  const onInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className="modal-header">
        <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
          <div className="modal-dialog" onClick={onInnerClick}>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{title}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={onClose}></button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;