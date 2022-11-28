import "./App.css";
import { About, Footer, Header, Navbar, Projects, Designs } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <About />
      {/* <Designs /> */}
      <Footer />
    </div>
  );
}

export default App;
