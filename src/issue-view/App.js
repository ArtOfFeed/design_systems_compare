import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {Home} from './Home';
import {AtlassianIssueViev} from './Atlassian/issue-view';
import { AtlassianAutomation } from "./Atlassian/automation/automation";
import {Atlassian} from './Atlassian/index';
import {Adobe} from './Adobe';
import {AdobeIssueView} from './Adobe/pages/issue-view';
import {AutomationAdobe} from './Adobe/pages/automation';
import {Microsoft} from './Microsoft';
import {MicrosoftIssue} from './Microsoft/pages/issue-view';
import {MicrosoftAutomation} from './Microsoft/pages/automation';
import {Material} from "./Material";
import {MaterialIssue} from './Material/pages/Issue-view/components';
import {MaterialAtomation} from './Material/pages/Automation';
import {Chakra} from './Chakra';
import './App.css';
import { CarbonDesignNavigation } from "./Carbon";

const App = () => {
  return (
    <BrowserRouter>
        <h1 className="main-heading">Design System Comparison</h1>
        <nav className="navigation">
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="atlassian">Atlassian Design System</NavLink>
            <NavLink to="adobe">Adobe Spectrum</NavLink>
            <NavLink to="microsoft">Mircosoft Fluent</NavLink>
            <NavLink to="material">MUI</NavLink>
            <NavLink to="chakra">Chakra UI</NavLink>
          </ul>
        </nav>
        <Routes>
            <Route path={'/'} exact element={<Home />} />
            <Route path={'/atlassian'} exact element={<Atlassian />} />
            <Route path={'/atlassian/issue'} exact element={<AtlassianIssueViev />} />
            <Route path={'/atlassian/automation'} exact element={<AtlassianAutomation />} />
            <Route path={'/adobe'} element={<Adobe />} />
            <Route path={'/adobe/issue'} exact element={<AdobeIssueView />} />
            <Route path={'/adobe/automation'} exact element={<AutomationAdobe />} />
            <Route path={'/microsoft'} exact element={<Microsoft />} />
            <Route path={'/material'} exact element={<Material />} />
            <Route path={'/chakra'} exact element={<Chakra />} />
            <Route path={'/microsoft/issue'} exact element={<MicrosoftIssue />} />
            <Route path={'/microsoft/automation'} exact element={<MicrosoftAutomation />} />
            <Route path={'/material/issue'} exact element={<MaterialIssue />} />
            <Route path={'/material/automation'} exact element={<MaterialAtomation />} />
        </Routes>
        <CarbonDesignNavigation />
    </BrowserRouter>
  );
}

export default App;
