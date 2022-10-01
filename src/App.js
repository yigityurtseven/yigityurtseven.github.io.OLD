import "./App.css";
import { About, Header, Navbar, Projects } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <About />
    </div>
  );
}

export default App;
