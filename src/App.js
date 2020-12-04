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
            <Route path="/" exact render ={(props)=><Redirect to="/greeting/buyer"/>}/>
            <Route 
                path="/greeting/:target" 
                render ={(props)=>(
                <Greeting 
                {...props}
                details ={list}
                />
                )}/>
            <Route 
              path="/guide/:target" 
              render ={(props)=>(
              <Guide 
              {...props}
              details ={list}
              />
              )}/>
            <Route 
              path="/quiz/:target" 
              render ={(props)=>(
              <Quiz
              {...props}
              details ={list}
              />
              )}/>
              <Route 
              path="/puzzle/:target"
              render ={(props)=>(
              <Puzzle
              {...props}
              details ={list}
              />
              )}/>
                 <Route 
              path="/feedbackform/:target"
              render ={(props)=>(
              <FeedbackForm
              {...props}
              details ={list}
              />
              )}/>
               <Route 
              path="/peopledetail/:target"
              render ={(props)=>(
              <People
              {...props}
              details ={list}
              />
              )}/>
              
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;
