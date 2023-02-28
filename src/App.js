import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Form from './components/Form';


function App() {
  
  return (
    <div className="App">
      {/* <Greet name="Arjun"></Greet>
      <Greet name="Amal"></Greet>
      <Greet name="Rijina"></Greet>
      <Welcome name="Sagar"/> */}
      {/* <FunctionClick/>
      <ClassClick/>
      <Message />
      <Counter /> */}
      <Form/>

    </div>
  );
}

export default App;
