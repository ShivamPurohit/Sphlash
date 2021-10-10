import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth, provider } from '../../firebase'

import "./Home.css"

function Home() {
    const history = useHistory()

    const googleAuth = () => {
        auth.signInWithPopup(provider)
            .then((res) => {
                history.push('/stuDashboard')
            })
            .catch(alert);
    }

    return (
        <div className="home">
            <div class="card" onClick={googleAuth} style={{ background: "white " }}>
                <img src="https://cdn.pixabay.com/photo/2021/08/24/21/09/idea-6571827_960_720.png" alt="Avatar" style={{ width: "100%" }} />
                <div class="container">
                    <h4><b>Sign In as a Student</b></h4>
                </div>
            </div>

            <a href="https://github.com/pranjals149/Sphlash/blob/master/README.md" target="_blank" rel="noreferrer">
                <div class="card" style={{ background: "white " }}>
                    <img src="https://cdn.pixabay.com/photo/2012/04/13/00/01/dollars-31085_960_720.png" alt="Avatar" style={{ width: "100%" }} />
                    <div class="container">
                        <h4 style={{
                            outline: "none",
                            textDecoration: "none",
                            color: "black"
                        }}><b>Register as a Lender</b></h4>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Home
