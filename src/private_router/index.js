import { createBrowserRouter } from "react-router-dom";
import UserPrivate from "./UserPrivate";
import { CLIENT_ROUTE } from "./ClientRouter";
import NotFound from "../Screens/NotFound";
import {CLIENT_URL} from '../config/constant'
import AdminPrivate from '../private_router/AdminPrivate'
import { ADMIN_ROUTE } from "./AdminRouter";

export const router = createBrowserRouter([
    {
        element: <UserPrivate/>,
        errorElement: <></>,
        children: [CLIENT_ROUTE],
      },
      {
        children:[
          {
            path: CLIENT_URL.LOGIN.path,
            element: CLIENT_URL.LOGIN.element
          },
          {
            element: <AdminPrivate/>,
            path: '/admin',
            children: [ADMIN_ROUTE],
          }
        ],
      },
      {
        path:'*',
        element: <NotFound/>,
      },
])
