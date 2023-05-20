import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Form from './components/Form';
import ListPage from './components/ToDoList/ListPage';


function App() {
  return (
    <div className="App">
      <h1 className="title">To Do List:</h1>
      <ListPage />
    {/* <ListPage /> */}
     
    </div>
  );
}

export default App;
