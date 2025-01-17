import './App.css';
import Todo from "./components/todo"; // Ensure the correct file path and case sensitivity
import { Provider } from "react-redux";
import { store } from "./app/store"; // Ensure the store is properly configured

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;

