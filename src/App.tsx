import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Card/Card";

function App() {
  return (
    <main className="container">
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
