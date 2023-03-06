import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}