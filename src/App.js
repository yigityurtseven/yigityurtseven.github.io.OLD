import "./App.css";
import { Card, Header, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="card-container-app">
        <div className="projects-text">
          <h2>projects</h2>
        </div>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
