
// import PrivateRoute from "./PrivateRoute/PrivateRoute.js";
import AuthProvider from './Context/AuthProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Help from "./components/Help/Help";




function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/home" >
              <Home />
            </Route>
            <Route exact path="/services" >
              <Services />
            </Route>
            <Route exact path="/about" >
              <About />
            </Route>
            <Route exact path="/help" >
              <Help />
            </Route>
            <Route exact path="/signup" >
              <SignUp />
            </Route>
            <Route exact path="/login" >
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
