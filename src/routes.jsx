import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Storage from "./components/Storage";
import Orders from "./components/Orders";
import Administration from "./components/Administration";
import { AuthProvider } from './api/AuthContext.jsx';

function AppRoutes() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* Rotas protegidas */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route path="storage" element={<Storage />} />
                            <Route path="orders" element={<Orders />} />
                            <Route path="administration" element={<Administration />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default AppRoutes;
