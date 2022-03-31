import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const CarbonDesign = React.lazy(() => import("./CarbonDesign"));
const CarbonDesignIssueView = React.lazy(() => import("./issueView"));
const CarbonDesignAutomationView = React.lazy(() => import("./automationView"));

export const CarbonDesignNavigation = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/carbon'} element={<CarbonDesign />}  >
                    <Route path={'issueView'} element={<CarbonDesignIssueView />} />
                    <Route path={'automationView'} element={<CarbonDesignAutomationView />} />
                    <Route path="*" element={<Navigate to="/carbon/issueView" />} />
                </Route>
            </Routes>
        </Suspense>
    )
}
