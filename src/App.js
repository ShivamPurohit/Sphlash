import './App.css';
import StudentDashboard from './Components/StudentDashboard/StudentDashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import ApplyLoan from './Components/ApplyLoan/ApplyLoan';

import 'react-toastify/dist/ReactToastify.css'
import UploadInfo from './Components/UploadInfo/UploadInfo';
import PreviousLoans from './Components/PreviousLoans/PreviousLoans';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">

      <Sidebar />

      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path="/stuDashboard">
            <StudentDashboard />
          </Route>

          <Route exact path="/applyLoan">
            <ApplyLoan />
          </Route>

          <Route exact path="/uploadInfo">
            <UploadInfo />
          </Route>

          <Route exact path="/previousLoans">
            <PreviousLoans />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
