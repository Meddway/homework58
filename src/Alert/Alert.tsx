import React, {useState} from 'react';

type OnDismissFunction = () => void;

interface Props extends React.PropsWithChildren {
  type: string,
  onDismiss?: OnDismissFunction;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {
  const [alertVisible, setAlertVisible] = useState(true);

  const clickCloseButton = () => {
    setAlertVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  return alertVisible ? (
    <div>
      <div className={type} role="alert">
        {children}
        This is a success type alert
        {onDismiss && (
          <button className="ms-4" onClick={clickCloseButton}>X</button>
        )}
      </div>
    </div>
  ): null;
};

export default Alert;