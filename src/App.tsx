import Demonstration from './Demonstration/Demonstration';
import Alert from './Alert/Alert';

function App() {
  const closeAlert = () => {
  };

  return (
    <>
      <div className="text-center">
        <Demonstration/>
      </div>
      <div>
        <Alert type="alert alert-primary"></Alert>
        <Alert type="alert alert-secondary"></Alert>
        <Alert type="alert alert-success"></Alert>
        <Alert type="alert alert-danger"></Alert>
        <Alert type="alert alert-success" onDismiss={closeAlert}>
        </Alert>
      </div>
    </>
  );
}

export default App;
