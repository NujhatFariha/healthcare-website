import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <div>
     <Router>
        <Navbar />
        <Switch>
        <Route exact path="/" >
        <Home />
        </Route>
        <Route exact path="/home" >
        <Home />
        </Route>
        <Route path="*">
        <NotFound />
        </Route>
        </Switch>
        <Footer/>
      </Router>
   </div>
  );
}

export default App;
