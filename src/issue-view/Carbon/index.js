import React from "react";
import { Routes, Route } from "react-router-dom";
// import { CarbonDesignNavigation as Normal__CarbonDesignNavigation } from "./Routing";

export const CarbonDesignNavigation = () => {
    // return <Normal__CarbonDesignNavigation />
    return (
        <Routes>
            <Route path={'/carbon'} element={<div>This is a stub for berret performace. <br /> Uncomment CarbonDesignNavigation in code to get this page active </div>} />
        </Routes>
    )
}