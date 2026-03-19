import Authorization from "../../ui/pages/Authorization.jsx";
import {createBrowserRouter} from "react-router";
import BlockhainState from "../../ui/pages/BlockhainState.jsx";
import Functions from "../../ui/pages/Function.jsx";

const routes = [
    {
        path: '/', element:<Authorization/>
    },
    {
        path: '/blockchainState', element:<BlockhainState/>
    },
    {
        path: '/function', element:<Functions/>
    }
]

const router = createBrowserRouter(routes);
export default router;