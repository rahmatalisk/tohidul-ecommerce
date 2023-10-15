import "./App.css";
import Footer from "./Components/Global/Footer/Footer";
import Header from "./Components/Global/Navbar/Navbar";
import Service from "./Components/Service/Service";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Service />
      </main>
      <Footer/>
    </>
  );
}

export default App;
