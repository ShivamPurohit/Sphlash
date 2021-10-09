import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

import "./StudentDashboard.css"

function StudentDashboard() {

    const history = useHistory()

    return (
        <>
            <div className="stuDash">
                <div className="card" onClick={() => history.push("/applyLoan")}>
                    <img src="https://cdn.pixabay.com/photo/2016/09/16/09/21/money-1673582_960_720.png" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <Button color="primary" variant="contained" fullWidth>Apply for a loan</Button>
                    </div>
                </div>

                <div className="card" onClick={() => history.push("/uploadInfo")}>
                    <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <Button color="primary" variant="contained" fullWidth>Upload Info and Check eligibility score</Button>
                    </div>
                </div>

                <div className="card" onClick={() => history.push("/previousLoans")}>
                    <img src="https://cdn.pixabay.com/photo/2015/11/18/15/02/approved-1049259_960_720.png" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <Button color="primary" variant="contained" fullWidth>View previous Loans taken</Button>
                    </div>
                </div>
            </div>

            <div className="stuDash__lower">
                <div className="card" onClick={() => history.push("/working")}>
                    <img src="https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_960_720.png" alt="Avatar" style={{ width: "400px", height: "300px" }} />
                    <div className="container">
                        <Button color="primary" variant="contained" fullWidth>Know how it works</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentDashboard
