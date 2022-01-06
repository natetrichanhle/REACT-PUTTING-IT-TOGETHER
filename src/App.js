import './App.css';

import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent firstName={'Doe'} lastName={'Jane'} age={45} hairColor={'Black'}/>
      <MyNewComponent firstName={'Smith'} lastName={'John'} age={88} hairColor={'Brown'}/>
    </div>
  );
}

export default App;
