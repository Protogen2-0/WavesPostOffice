import {ContextProvider} from "./core/context/Context.jsx";
import {RouterProvider} from "react-router";
import router from "./core/routing/Routing.jsx";

const App = () => {
    return (
        <ContextProvider>
            <RouterProvider router={router}>
            </RouterProvider>
        </ContextProvider>
    )
}
export default App
