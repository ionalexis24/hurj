// import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./homePage/homePage"
import PortfolioPage from "./portfolioPage/portfolioPage"
import AboutPage from "./aboutPage/aboutPage"

function App() {
  
  return (
    <Router>
       <div className="app_body">
         <PortfolioPage spania="am fost in Spain, but s is silent"/>
         <HomePage portugalia="am fost in portugalia"/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/portfolio" exact component={PortfolioPage} />
          <Route path="/about" exact component={AboutPage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
