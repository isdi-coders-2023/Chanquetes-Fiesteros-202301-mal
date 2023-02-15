import AppProvider from "./store/contexts/app.provider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <main className="container">
      <AppProvider>
        <Header />
        <Home />
        <Footer />
      </AppProvider>
    </main>
  );
}

export default App;
