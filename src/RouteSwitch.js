import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import News from "./pages/News";
import Class from "./pages/Class";
import Admin from "./pages/Admin";
import About from "./pages/About";
import NewsTemplate from "./pages/NewsTemplate";

export default function RouteSwitch() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main /> }></Route>
                <Route path="/Naujienos" element={ <News /> }></Route>
                <Route path="/Klase" element={ <Class /> }></Route>
                <Route path="/Apie" element={ <About /> }></Route>
                <Route path="/Admin" element={ <Admin /> }></Route>
                <Route path="/template/:id" element={<NewsTemplate />} />
            </Routes>
        </BrowserRouter>
    )
}