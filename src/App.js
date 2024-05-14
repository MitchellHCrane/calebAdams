import "./css/reset.css";
import "./css/App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import GetStarted from "./Components/GetStarted";
import LoanCalculator from "./Components/LoanCalculator";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <GetStarted />
      <LoanCalculator />
      <Footer />
    </div>
  );
}

export default App;
