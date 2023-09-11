
import './App.css';
import TODOS from './component/TODOS';
import AddTodo from './component/AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TODOS></TODOS>
    </div>
  );
}

export default App;
