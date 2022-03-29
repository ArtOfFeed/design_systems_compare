import React from "react";
import { Routes, Route, NavLink, Navigate, Outlet } from "react-router-dom";
import { CarbonDesignAutomationView } from "./automationView";
import { CarbonDesignIssueView } from "./issueView";

export const CarbonDesignNavigation = () => {
    return (
        <Routes>
            <Route path={'/carbon'} element={<CarbonDesign />}>
                <Route path={''} exact element={<Navigate to="/carbon/issueView" />} />
                <Route path={'issueView'} exact element={<CarbonDesignIssueView />} />
                <Route path={'automationView'} exact element={<CarbonDesignAutomationView />} />
            </Route>
        </Routes>
    )
}

export const CarbonDesign = () => {
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