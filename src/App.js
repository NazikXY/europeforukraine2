import './App.scss';
import Header from "./components/Header";
import Tagline from "./components/Tagline";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="wrapper">
        <Header />
        <Tagline />
        <Main />
        <Footer />
      </div>
  )
}

export default App;
