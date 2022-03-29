import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './CarbonDesign.scss';

const CarbonDesign = () => {
    return (
        <div>
            <nav className="sub-navigation">
                <ul>
                    <NavLink to="issueView">issueView</NavLink>
                    <NavLink to="automationView">automationView</NavLink>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default CarbonDesign;