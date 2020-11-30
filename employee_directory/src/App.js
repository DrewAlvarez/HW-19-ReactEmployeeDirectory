import './App.css';
import Header from "./components/Header";
import NameCard from "./components/Namecard";

function App() {
  return (
    <div>
      <Header />
      <NameCard />
      <div className="container">
        Hello World!
      </div>
    </div>
  );
}

export default App;
