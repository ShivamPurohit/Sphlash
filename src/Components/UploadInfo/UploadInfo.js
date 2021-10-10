import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import GaugeChart from 'react-gauge-chart'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import firebase from "firebase"

import "./UploadInfo.css"
import { toast } from 'react-toastify'
import Webcam from 'react-webcam'
import { db } from '../../firebase';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

function UploadInfo() {
    const history = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [fName, setFName] = useState("")
    const [fOcc, setFOcc] = useState("")
    const [mName, setMName] = useState("")
    const [mOcc, setMOcc] = useState("")
    const [selfie, setSelfie] = useState("")
    const [type, setType] = useState("")
    const [tenth, setTenth] = useState("")
    const [twe, setTwe] = useState("")
    const [grad, setGrad] = useState("")
    const [nonCir1, setNonCir1] = useState("")
    const [nonCir2, setNonCir2] = useState("")
    const [achievement, setAchievement] = useState("")

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            toast.success("Selfie Captured Successfully")
            setSelfie(imageSrc);
        },
        [webcamRef]
    );

    const [idType, setIdType] = React.useState('');

    const handleChange = (event) => {
        setIdType(event.target.value);
    };

    const [score, setScore] = useState(0)
    const [display, setDisplay] = useState(false)

    const upload = (e) => {
        e.preventDefault()

        if (!name.length || !email.length || !contact.length) {
            toast.error("Please fill all the required fields");
            return;
        }

        db.collection("Loaner_Info").add({
            Name: name,
            Email: email,
            Contact: contact,
            Father_name: fName,
            Father_Occ: fOcc,
            Mother_name: mName,
            Mother_occ: mOcc,
            Selfie: selfie,
            Government_id: type,
            Tenth_Percent: tenth,
            Twelth_Percent: twe,
            Grad_Percent: grad,
            Non_cir1: nonCir1,
            Non_cir2: nonCir2,
            Achievement: achievement,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setScore(0.90);
        setDisplay(true)

        toast.success("Your eligibility score is mentioned below !!")
    }

    const saveAndBack = (e) => {
        e.preventDefault()

        toast.success("Information saved successfully !!")
        history.push("/stuDashboard")
    }

    return (
        <div className="uploadInfo">
            <div className="uploadInfo__upper"></div>

            <div className="uploadInfo__lower">
                <div className="uploadInfo__form">
                    <h3>UPLOAD YOUR INFORMATION</h3>

                    <div className="uploadInfo__fullName">
                        <p>Full Name*</p>
                        <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="uploadInfo__capture">
                        <p>Capture your selfie*</p>

                        <Webcam
                            audio={false}
                            height={300}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={430}
                            videoConstraints={videoConstraints}
                        />
                        <Button variant="contained" color="primary" onClick={capture} style={{
                            display: "flex",
                            margin: "auto"
                        }}>Capture photo</Button>
                    </div>

                    <div className="uploadInfo__emailAddress">
                        <p>Email Address*</p>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="uploadInfo__password">
                        <p>Contact*</p>
                        <input type="email" placeholder="Enter your contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Father's Name*</p>
                        <input type="text" placeholder="Enter your father's name" value={fName} onChange={(e) => setFName(e.target.value)} />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Father's Occupation*</p>
                        <input type="text" placeholder="Enter your father's occupation" value={fOcc} onChange={(e) => setFOcc(e.target.value)} />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Mother's Name*</p>
                        <input type="text" placeholder="Enter your father's occupation" value={mName} onChange={(e) => setMName(e.target.value)} />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Mother's Occupation*</p>
                        <input type="text" placeholder="Enter your father's occupation" value={mOcc} onChange={(e) => setMOcc(e.target.value)} />
                    </div>

                    <div className="uploadInfo__govType" style={{ marginTop: "15px" }}>
                        <p>Select Government ID type</p>

                        <FormControl fullWidth style={{ marginTop: "10px" }}>
                            <InputLabel id="demo-simple-select-label">ID Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={idType}
                                label="Government ID type"
                                onChange={handleChange}
                            >
                                <MenuItem value={"aadhar"} onClick={() => setType("Aadhar")}>Aadhar</MenuItem>
                                <MenuItem value={"pan"} onClick={() => setType("Pan")}>PAN Card</MenuItem>
                                <MenuItem value={"licence"} onClick={() => setType("Licence")}>Driving Licence</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload Government ID*</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload Institute ID*</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Class 10th Percentage(if CGPA, convert CGPA into percentage)*</p>
                        <input type="text" placeholder="Enter your percentage" value={tenth} onChange={(e) => setTenth(e.target.value)} />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload 10th Marksheet*</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Class 12th Percentage(if CGPA, convert CGPA into percentage)*</p>
                        <input type="text" placeholder="Enter your percentage" value={twe} onChange={(e) => setTwe(e.target.value)} />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload 12th Marksheet*</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Graduation Percentage(if CGPA, convert CGPA into percentage)</p>
                        <input type="text" placeholder="Enter your percentage" value={grad} onChange={(e) => setGrad(e.target.value)} />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload Graduation Marksheet(Merge sem wise marksheets into a single PDF)</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Non-Curricular activity 1(If any)</p>
                        <input type="text" placeholder="Enter your activity" value={nonCir1} onChange={(e) => setNonCir1(e.target.value)} />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload proof of non-curricular activity</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Non-Curricular activity 2(If any)</p>
                        <input type="text" placeholder="Enter your activity" value={nonCir2} onChange={(e) => setNonCir2(e.target.value)} />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload proof of non-curricular activity</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Other Achievements(Mention your best achievement till now)</p>
                        <input type="text" placeholder="Enter your achievement" value={achievement} onChange={(e) => setAchievement(e.target.value)} />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload proof of achievement</p>
                        <input type="file" />
                    </div>

                    {display === true && (
                        <>
                            <p className="uploadInfo__eligible">Your eligibility score is: </p>
                            <div className="uploadInfo__score">
                                <GaugeChart id="gauge-chart2"
                                    nrOfLevels={20}
                                    percent={score}
                                />
                            </div>
                        </>
                    )}

                    {display === true ? (
                        <Button variant="contained" color="primary" fullWidth onClick={saveAndBack} style={{ marginBottom: "15px" }}>Save and Go Back</Button>
                    ) : (
                        <div className="uploadInfo__submit">
                            <Button variant="contained" color="primary" fullWidth onClick={upload}>Upload Information</Button>
                        </div>
                    )}

                    <div className="uploadInfo__back">
                        <Button variant="contained" color="primary" fullWidth onClick={() => history.push("/stuDashboard")}>Go back to Dashboard</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UploadInfo