import Dashboard from '../Screens/Dashboard/Admin/Dashboard'
import AddMovie from '../Screens/Dashboard/Admin/AddMovie'
import Users from '../Screens/Dashboard/Admin/Users'
import MoviesList from '../Screens/Dashboard/Admin/MovieList'
import Categories from '../Screens/Dashboard/Admin/Categories'
import ContactUs from '../Screens/ContactUs'
import MoviesPage from '../Screens/Movies'
import SingleMovie from '../Screens/SingleMovie'
import WatchPage from '../Screens/WatchPage'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Profile from '../Screens/Dashboard/Profile'
import Password from '../Screens/Dashboard/Password'
import FavoritesMovies from '../Screens/Dashboard/FavoritesMovies'

export const API_USER = {
    LOGIN: "/users/login",
    REGISTER: "/users/",
}

export const IS_ADMIN = {
    ADMIN: 1
}

export const ADMIN_URL = {
    DASHBOARD: {
        path: "/dashboard",
        element: <Dashboard />
    },
    ADD_MOVIE: {
        path: '/addmovie',
        element: <AddMovie />
    },
    USER: {
        path: '/users',
        element: <Users />
    },
    MOVIE_LIST: {
        path: '/movieslist',
        element: <MoviesList />
    },
    CATEGORIES: {
        path: '/categories',
        element: <Categories />
    },
}

export const CLIENT_URL = {
    CONTACT_US: {
        path: "/contact-us",
        element: <ContactUs />
    },
    MOVIE_PAGE: {
        path: "/movies",
        element: <MoviesPage/>
    },
    DETAIL_MOVIE: {
        path: "/movie/:id",
        element: <SingleMovie />
    },
    WATCH_PAGE: {
        path: "/watch/:id",
        element: <WatchPage />
    },
    LOGIN: {
        path: "/login",
        element: <Login />
    },
    REGISTER: {
        path: "/register",
        element: <Register />
    },
    PROFILE: {
        path: "/profile",
        element: <Profile />
    },
    PASSWORD: {
        path: "/password",
        element: <Password />
    },
    FAVORITE: {
        path: "favorites",
        element: <FavoritesMovies/>
    },
}