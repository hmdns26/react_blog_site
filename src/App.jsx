import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutus/AboutUs";
import Home from "./pages/home/Home";



function App(){

    return(
        <div className="App">

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutUs/>} />
            </Routes>



        </div>
    );
};

export default App;