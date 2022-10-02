import "./App.css";
import { About, Footer, Header, Navbar, Projects } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
