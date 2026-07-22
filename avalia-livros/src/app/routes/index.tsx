import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";
import { Login } from "../pages";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
                <Route path="/entrar" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}