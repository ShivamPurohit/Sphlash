import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import GaugeChart from 'react-gauge-chart'

import "./ApplyLoan.css"
import { toast } from 'react-toastify'
import Webcam from 'react-webcam'
import { db } from "../../firebase"
import firebase from "firebase"

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

function ApplyLoan() {
    const history = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [amount, setAmount] = useState("")
    const [reason, setReason] = useState("")
    const [duration, setDuration] = useState("")
    const [repay, setRepay] = useState("")
    const [selfie, setSelfie] = useState("")
    const [doc, setDoc] = useState("")

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            toast.success("Selfie Captured Successfully")
            setSelfie(imageSrc);
        },
        [webcamRef]
    );

    const captureDoc = React.useCallback(
        () => {
            const imageSrcDoc = webcamRef.current.getScreenshot();
            toast.success("Document Captured Successfully")
            setDoc(imageSrcDoc)
        },
        [webcamRef]
    );

    const apply = (e) => {
        e.preventDefault()

        if (!name.length || !email.length || !contact.length || !amount.length || !reason.length || !duration.length || !repay.length || !selfie.length || !doc.length) {
            toast.error("Please fill all the required fields");
            return;
        }

        db.collection("All_Loans").add({
            Name: name,
            Email: email,
            Contact: contact,
            Amount: amount,
            Reason: reason,
            Duration: duration,
            Repayment: repay,
            Selfie: selfie,
            Doc: doc,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        })

        toast.success("Yay !! You have Successfully applied for a loan. Some lender will get back to you soon !!")
        history.push("/stuDashboard")
    }

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
                        <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="applyLoan__fullName">
                        <p>Contact*</p>
                        <input type="text" placeholder="Enter your full name" value={contact} onChange={(e) => setContact(e.target.value)} />
                    </div>

                    <div className="applyLoan__emailAddress">
                        <p>Email Address*</p>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="applyLoan__password">
                        <div className="applyLoan__createPass">
                            <p>Amount*</p>
                            <input type="text" placeholder="Enter your Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                    </div>

                    <div className="applyLoan__skills">
                        <p>Reason*</p>
                        <input type="text" placeholder="Enter your reason" value={reason} onChange={(e) => setReason(e.target.value)} />
                    </div>

                    <div className="applyLoan__skills">
                        <p>Duration in which you will repay the loan*</p>
                        <input type="text" placeholder="Enter your duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
                    </div>

                    <div className="applyLoan__types">
                        <p>Mode of Repayment*</p>

                        <div className="applyLoan__type">
                            <p className="applyLoan__type1" onClick={(e) => setRepay("EMI")}>EMI</p>
                            <p className="applyLoan__type2" onClick={(e) => setRepay("Cards")}>Cards</p>
                            <p className="applyLoan__type3" onClick={(e) => setRepay("NEFT")}>NEFT/RTGS</p>
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