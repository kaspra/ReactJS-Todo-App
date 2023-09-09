import './App.css';
import { EditTodoForm } from './components/EditTodoForm';
import { TodoLocalStorage } from './components/TodoLocalStorage';

function App() {
  return (
    <div className="App">
      <TodoLocalStorage />
    </div>
  );
}

export default App;
