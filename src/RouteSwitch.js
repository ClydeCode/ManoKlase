import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Index /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}