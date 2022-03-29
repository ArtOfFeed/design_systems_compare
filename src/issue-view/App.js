import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {Home} from './Home';
import {Atlassian} from './Atlassian';
import {Adobe} from './Adobe';
import {Microsoft} from './Microsoft';
import {Material} from './Material';
import {Chakra} from './Chakra';
import {Braid} from './Braid';
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
            <NavLink to="braid">Braid</NavLink>
            <NavLink to="carbon">Carbon</NavLink>
          </ul>
        </nav>
        <Routes>
            <Route path={'/'} exact element={<Home />} />
            <Route path={'/atlassian'} exact element={<Atlassian />} />
            <Route path={'/adobe'} exact element={<Adobe />} />
            <Route path={'/microsoft'} exact element={<Microsoft />} />
            <Route path={'/material'} exact element={<Material />} />
            <Route path={'/chakra'} exact element={<Chakra />} />
            <Route path={'/braid'} exact element={<Braid />} />
        </Routes>
        <CarbonDesignNavigation />
    </BrowserRouter>
  );
}

export default App;
