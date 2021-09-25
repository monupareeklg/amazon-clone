import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/cart/Checkout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
