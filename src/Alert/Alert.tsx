import React from 'react';

interface Props extends React.PropsWithChildren {
  type: string,
}

const Alert: React.FC<Props> = ({type}) => {

  return (
    <div>
      <div className={type} role="alert">
        This is a success type alert
      </div>
    </div>
  );
};

export default Alert;