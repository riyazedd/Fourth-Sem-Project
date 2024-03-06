import {Routes,Route} from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import AboutComponent from "./pages/AboutComponent";
import AddStudentComponent from "./pages/AddStudentComponent";
import UpdateComponent from "./pages/UpdateComponent";

function RouterComponent(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/add-student" element={<AddStudentComponent />} />
                <Route path="/update-student/:id" element={<UpdateComponent />} />
            </Routes>
        </div>
    )
}

export default RouterComponent;