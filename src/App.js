import './App.css';
import StudentDashboard from './Components/StudentDashboard/StudentDashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import ApplyLoan from './Components/ApplyLoan/ApplyLoan';

function App() {
  return (
    <div className="App">

      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path="/stuDashboard">
            <StudentDashboard />
          </Route>

          <Route exact path="/applyLoan">
            <ApplyLoan />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
