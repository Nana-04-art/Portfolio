import Progetti from "./pagine/Progetti.jsx";
import HomePage from "./pagine/HomePage.jsx";
import Design from "./pagine/Design.jsx";
import {Root} from "./pagine/Root.jsx";

export const routes = [
    {
        element: <Root/>,
        path: '/',
        errorElement: <h1>404 not found (custom)</h1>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'progetti',
                element: <Progetti/>,
                children: [
                    /*{
                        path: 'item',
                        element: <Item />
                    }*/
                ]
            },
            {
                path: 'design',
                element: <Design/>,
            }
        ]
    }
];