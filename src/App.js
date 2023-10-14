import "./App.css";
import Header from "./Components/Global/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <>
    <div className="shape1"></div>
      <div className="shape2"></div>
      <Header />
      <main>
        <Slider/>
      </main>
    </>
  );
}

export default App;
