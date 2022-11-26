import logo from './logo.svg';
import './App.css';
import HomePage from './Pages';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
document.querySelector("input").value = "John Doe";
document.querySelector("button").click();
setTimeout(() => console.log(document.getElementById("root").innerHTML));

