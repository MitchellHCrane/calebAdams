import "./css/reset.css";
import "./css/App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import GetStarted from "./Components/GetStarted";
import LoanCalculator from "./Components/LoanCalculator";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Testimonials />
      <GetStarted />
      <LoanCalculator />
      <Footer />
    </div>
  );
}

export default App;
