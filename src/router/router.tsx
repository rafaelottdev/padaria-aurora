import { createBrowserRouter } from "react-router"

import App from "../App"

import Main from "../layout/Main/Main"

import Doces from "../sections/Category/categories/Doces"
import Salgados from "../sections/Category/categories/Salgados"
import Bebidas from "../sections/Category/categories/Bebidas"
import Variedades from "../sections/Category/categories/Variedades"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Main />,
                children: [
                    {
                        index: true,
                        element: <Doces />
                    },

                    {
                        path: "salgados",
                        element: <Salgados />
                    },

                    {
                        path: "bebidas",
                        element: <Bebidas />
                    },

                    {
                        path: "variedades",
                        element: <Variedades />
                    }
                ]
            }
        ]
    }
])

export default router
