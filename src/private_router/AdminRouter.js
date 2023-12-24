import { ADMIN_URL } from "../config/constant";

export const ADMIN_ROUTE = {
    children: [
        {
            path: ADMIN_URL.DASHBOARD.path,
            element: ADMIN_URL.DASHBOARD.element
        },
        {
            path: ADMIN_URL.MOVIE_LIST.path,
            element: ADMIN_URL.MOVIE_LIST.element
        },
        {
            path: ADMIN_URL.ADD_MOVIE.path,
            element: ADMIN_URL.ADD_MOVIE.element
        },
        {
            path: ADMIN_URL.CATEGORIES.path,
            element: ADMIN_URL.CATEGORIES.element
        },
        {
            path: ADMIN_URL.USER.path,
            element: ADMIN_URL.USER.element
        },
    ]
}