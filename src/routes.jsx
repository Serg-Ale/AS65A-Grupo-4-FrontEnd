import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Storage from "./components/Storage";
import Orders from "./components/Orders";
import Administration from "./components/Administration";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="storage" element={<Storage />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="administration" element={<Administration />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
