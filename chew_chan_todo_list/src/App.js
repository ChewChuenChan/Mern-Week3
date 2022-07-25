import { useState } from 'react';
import './App.css';
import Form from './components/Form';


function App() {

  const [todoArr, setToDoArr] = useState([]);
  


  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form todoArr={todoArr} setToDoArr={setToDoArr} />

    </div>
  );

}
export default App;
