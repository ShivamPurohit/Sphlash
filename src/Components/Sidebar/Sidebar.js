import React from 'react'
import { useHistory } from 'react-router-dom'

import "./Sidebar.css"

function Sidebar() {
    const history = useHistory()

    return (
        <div className="sidebar">
            <img onClick={() => history.push("/applyLoan")} className="sidebar__image" src="https://cdn.pixabay.com/photo/2016/09/16/09/21/money-1673582_960_720.png" alt="" title="Apply for a loan" />

            <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png" alt="" title="Upload Info and check eligibility score" onClick={() => history.push("/uploadInfo")} />

            {/* <a href="https://drive.google.com/file/d/129SQt_CSpOwMiMCm79loNNqEaEjFBi26/view?usp=sharing" target="_blank" rel="noreferrer">
                <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2017/08/07/19/45/ecommerce-2607114_960_720.jpg" alt="" title="Payments" />
            </a>  */}

            <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2015/11/18/15/02/approved-1049259_960_720.png" alt="" title="View previous Loans taken" onClick={() => history.push("/previousLoans")} />

            <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_960_720.png" alt="" title="Know how it works" onClick={() => history.push("/")} />

            <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2020/09/17/18/11/speed-5579992_960_720.png" alt="" title="Back to Dashboard" onClick={() => history.push("/stuDashboard")} />
        </div>
    )
}

export default Sidebar