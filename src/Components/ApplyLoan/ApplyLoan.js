import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from "react-router-dom"
import GaugeChart from 'react-gauge-chart'

import "./ApplyLoan.css"
import { toast } from 'react-toastify'
import Webcam from 'react-webcam'

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

function ApplyLoan() {
    const history = useHistory()

    const apply = (e) => {
        e.preventDefault()

        toast.success("Yay !! You have Successfully applied for a loan. Some lender will get back to you soon !!")
        history.push("/stuDashboard")
    }

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            toast.success("Selfie Captured Successfully")
        },
        [webcamRef]
    );

    const captureDoc = React.useCallback(
        () => {
            const imageSrcDoc = webcamRef.current.getScreenshot();
            toast.success("Document Captured Successfully")
        },
        [webcamRef]
    );

    return (
        <div className="applyLoan">
            <div className="applyLoan__upper"></div>

            <div className="applyLoan__lower">
                <div className="applyLoan__form">
                    <h3>APPLY FOR A LOAN</h3>

                    <p className="applyLoan__eligible">Your eligibility score is: </p>
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

                    <div className="applyLoan__types">
                        <p>Mode of Repayment*</p>

                        <div className="applyLoan__type">
                            <p className="applyLoan__type1">EMI</p>
                            <p className="applyLoan__type2">Cards</p>
                            <p className="applyLoan__type3">NEFT/RTGS</p>
                        </div>
                    </div>

                    <div className="applyLoan__capture">
                        <p>Capture your selfie*</p>

                        <Webcam
                            audio={false}
                            height={300}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={450}
                            videoConstraints={videoConstraints}
                        />
                        <Button variant="contained" color="primary" onClick={capture} style={{
                            display: "flex",
                            margin: "auto"
                        }}>Capture photo</Button>
                    </div>

                    <div className="applyLoan__capture">
                        <p>Capture your identification(Aadhar card/PAN Card/Driving Licence)*</p>

                        <Webcam
                            audio={false}
                            height={300}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={450}
                            videoConstraints={videoConstraints}
                        />
                        <Button variant="contained" color="primary" onClick={captureDoc} style={{
                            display: "flex",
                            margin: "auto"
                        }}>Capture Document</Button>
                    </div>

                    <div className="applyLoan__submit">
                        <Button variant="contained" color="primary" fullWidth onClick={apply}>Apply for a loan</Button>
                    </div>

                    <div className="applyLoan__back">
                        <Button variant="contained" color="primary" fullWidth onClick={() => history.push("/stuDashboard")}>Go back to Dashboard</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ApplyLoan