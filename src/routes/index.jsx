import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>
    },
    {
        path: "news",
        element: <h1>layout</h1>
    },
    {
        path: "auth",
        element: <h1>layout</h1>
    },
])