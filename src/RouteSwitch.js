import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import News from "./pages/News";

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main /> }></Route>
                <Route path="/Naujienos" element={ <News /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}