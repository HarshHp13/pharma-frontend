import { useState } from "react"
import Tasks from "../components/Tasks"
import "./Dashboard.css"
import Company from "../components/Company"
import Tests from "../components/Tests"

export default function Dashboard(params) {
    const [tabcnt,setTabcnt]=useState(1)

    const tabs=()=>{
        return tabcnt==1?<Tasks />:tabcnt==2?<Company />:<Tests />
    }
    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <div className="dashboard__leftLogo">
                    <img src="./../public/vite.svg" alt="logo" />
                </div>
                
                <div className="dashboard__leftContainer">
                    <div className="dashboard__leftContainerMenu">
                        <div className="dashboard__leftContainerMenuItem menuTasks" onClick={()=>setTabcnt(1)} >Tasks</div>
                        <div className="dashboard__leftContainerMenuItem" onClick={()=>setTabcnt(2)} >Add Company</div>
                        <div className="dashboard__leftContainerMenuItem" onClick={()=>setTabcnt(3)} >Add Tests</div>
                    </div>
                </div>

                <div className='dashboard__leftContainer'>
                    <div className="dashboard__leftContainerUsername">{params.username}</div>
                    <div className="dashboard__leftContainerLogout">Logout</div>
                </div>
            </div>
            <div className="dashboard__right">
                <div className="dashboard__rightContainer">
                    <div className="dashboard__rightContainerHeader">{tabcnt==1?"Tasks":tabcnt==2?"Company":"Tests"}</div>
                    {
                        tabs()
                    }
                </div>
            </div>
        </div>
    )
}