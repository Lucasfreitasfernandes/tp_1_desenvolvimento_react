
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Home from "../views/Home";
import SingIn from "../views/SingIn";
import SingUp from "../views/SingUp";
import DashBoard from "../views/DashBoard";
import Form from "../views/Form";
import Settings from "../views/Settings";

const router= createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home/>}/>
            <Route path="singin"  element={<SingIn/>}/>
            <Route path="singup"  element={<SingUp/>}/>
            <Route path="dashboard"  element={<DashBoard/>}/>
            <Route path="form"  element={<Form/>}/>
            <Route path="settings"  element={<Settings/>}/>

        </>
    )
);

const Index = () => {
    return <RouterProvider router={router}/>
}

export default Index