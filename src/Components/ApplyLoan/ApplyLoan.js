import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from "react-router-dom"
import GaugeChart from 'react-gauge-chart'

import "./ApplyLoan.css"

function ApplyLoan() {
    // const history = useHistory()

    return (
        <div className="applyLoan">
            <div className="applyLoan__upper"></div>

            <div className="applyLoan__lower">
                <div className="applyLoan__form">
                    <h3>APPLY FOR A LOAN</h3>

                    <p>Your eligibility score is: </p>
                    <div className="applyLoan__score">
                        <GaugeChart id="gauge-chart2"
                            nrOfLevels={20}
                            percent={0.86}
                        />
                    </div>

                    <div className="applyLoan__fullName">
                        <p>Full Name*</p>
                        <input type="text" placeholder="Enter your full name" />
                    </div>

                    <div className="applyLoan__emailAddress">
                        <p>Email Address*</p>
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="applyLoan__password">
                        <div className="applyLoan__createPass">
                            <p>Amount*</p>
                            <input type="text" placeholder="Enter your Amount" />
                        </div>
                    </div>

                    <div className="applyLoan__skills">
                        <p>Reason*</p>
                        <input type="text" placeholder="Enter your reason" />
                    </div>

                    <div className="applyLoan__skills">
                        <p>Duration in which you will repay the loan*</p>
                        <input type="text" placeholder="Enter your duration" />
                    </div>

                    <div className="applyLoan__submit">
                        <Button variant="contained" color="primary" fullWidth>Apply for a loan</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyLoan