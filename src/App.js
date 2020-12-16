import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Greeting from "./components/Greeting";
import Guide from "./components/Guide";
import Quiz from "./components/Quiz";
import Puzzle from "./components/Puzzle";
import FeedbackForm from "./components/FeedbackForm"
import People from "./components/People";
import RevealCode from "./components/RevealCode"
import RomanticBargeTour from "./components/RomanticBargeTour"
import Itaewonclass from "./components/Itaewonclass"
import Swabtutorial from "./components/Swabtutorial"
function App() {
  const list={
    "buyer":{
        "greeting":"buyer"
    },
    "logistic":{
        "greeting":"vendor"
    },
    "trading":{
        "greeting":"coal supplier"
    },
    "surveyor":{
        "greeting":"surveyor"
    },
      }
  return (
    <div className="container h-full">
        <Router>
          <Switch>
            <Route path="/" exact render ={(props)=><Redirect to="/greeting"/>}/>
            <Route 
                path="/greeting" 
                render ={(props)=>(
                <Greeting 
                {...props}
                details ={list}
                />
                )}/>
            <Route 
              path="/guide" 
              render ={(props)=>(
              <Guide 
              {...props}
              details ={list}
              />
              )}/>
            <Route 
              path="/quiz" 
              render ={(props)=>(
              <Quiz
              {...props}
              details ={list}
              />
              )}/>
              <Route 
              path="/puzzle"
              render ={(props)=>(
              <Puzzle
              {...props}
              details ={list}
              />
              )}/>
                 <Route 
              path="/feedbackform"
              render ={(props)=>(
              <FeedbackForm
              {...props}
              details ={list}
              />
              )}/>
               <Route 
              path="/people"
              render ={(props)=>(
              <People
              {...props}
              details ={list}
              />
              )}/>
              <Route 
              path="/codereveal"
              render ={(props)=>(
              <RevealCode
              {...props}
              details ={list}
              />
              )}/>
              <Route 
              path="/romanticbargetour"
              render ={(props)=>(
              <RomanticBargeTour
              {...props}
              details ={list}
              />
              )}/>
               <Route 
              path="/itaewonclass"
              render ={(props)=>(
              <Itaewonclass
              {...props}
              details ={list}
              />
              )}/>
                 <Route 
              path="/swabtutorial"
              render ={(props)=>(
              <Swabtutorial
              {...props}
              details ={list}
              />
              )}/>
              
          </Switch>
        </Router>
        {/* <div id="footer" class="text-center font-italic">
          #DecodeMMSGI
          </div> */}
    </div>
  );
}

export default App;
