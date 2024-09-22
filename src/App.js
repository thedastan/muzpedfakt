import './styles/App.css';
import Header from "./components/main/Header";
import "./styles/styles.scss";
import "./styles/icons.css";
import Home from "./components/main/home/Home";
import Footer from "./components/main/footer"
import {Routes, Route} from "react-router-dom";
import Chronology from "./Pages/chronology/Chronology";
import Teachers from "./Pages/teachers/teachers";
import Error from "./Pages/error/Error";
import Tool from "./Pages/tool/tool";
import Program from "./Pages/program/program";
import CategoryDetail from "./Pages/categoryDetails/CategoryDetail";
import Admin from "./Pages/admin/admin";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/chronology" element={<Chronology/>}/>
                <Route path="/teachers" element={<Teachers/>}/>
                <Route path="/*" element={<Error/>}/>
                <Route path="/tool" element={<Tool/>}/>
                <Route path="/program" element={<Program/>}/>
                <Route path="/category/:id" element={<CategoryDetail/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
