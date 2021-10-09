import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from "react-router-dom"
import GaugeChart from 'react-gauge-chart'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import "./UploadInfo.css"
import { toast } from 'react-toastify'
import Webcam from 'react-webcam'

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

function UploadInfo() {
    const history = useHistory()

    const apply = (e) => {
        e.preventDefault()

        toast.success("Yay !! Successfully applied for a loan. Some lender will get back to you soon !!")
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

    const [idType, setIdType] = React.useState('');

    const handleChange = (event) => {
        setIdType(event.target.value);
    };

    return (
        <div className="uploadInfo">
            <div className="uploadInfo__upper"></div>

            <div className="uploadInfo__lower">
                <div className="uploadInfo__form">
                    <h3>UPLOAD YOUR INFORMATION</h3>

                    <div className="uploadInfo__fullName">
                        <p>Full Name*</p>
                        <input type="text" placeholder="Enter your full name" />
                    </div>

                    <div className="uploadInfo__capture">
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

                    <div className="uploadInfo__emailAddress">
                        <p>Email Address*</p>
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="uploadInfo__password">
                        <p>Contact*</p>
                        <input type="email" placeholder="Enter your contact" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Father's Name*</p>
                        <input type="text" placeholder="Enter your father's name" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Father's Occupation*</p>
                        <input type="text" placeholder="Enter your father's occupation" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Mother's Name*</p>
                        <input type="text" placeholder="Enter your father's occupation" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Mother's Occupation*</p>
                        <input type="text" placeholder="Enter your father's occupation" />
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
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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
                        <input type="text" placeholder="Enter your percentage" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload 10th Marksheet*</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Class 12th Percentage(if CGPA, convert CGPA into percentage)*</p>
                        <input type="text" placeholder="Enter your percentage" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload 12th Marksheet*</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Graduation Percentage(if CGPA, convert CGPA into percentage)</p>
                        <input type="text" placeholder="Enter your percentage" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload Graduation Marksheet(Merge sem wise marksheets into a single PDF)</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Non-Curricular activity 1(If any)</p>
                        <input type="text" placeholder="Enter your activity" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload proof of non-curricular activity</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Non-Curricular activity 2(If any)</p>
                        <input type="text" placeholder="Enter your activity" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload proof of non-curricular activity</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Other Achievements(Mention your best achievement till now)</p>
                        <input type="text" placeholder="Enter your achievement" />
                    </div>

                    <div className="uploadInfo__skills">
                        <p>Upload proof of achievement</p>
                        <input type="file" />
                    </div>

                    <div className="uploadInfo__submit">
                        <Button variant="contained" color="primary" fullWidth onClick={apply}>Upload Information</Button>
                    </div>

                    <div className="uploadInfo__back">
                        <Button variant="contained" color="primary" fullWidth onClick={() => history.push("/stuDashboard")}>Go back to Dashboard</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UploadInfo