import { CLIENT_URL } from "../config/constant";

export const CLIENT_ROUTE = {
    children: [
      {
        path: CLIENT_URL.CONTACT_US.path,
        element:  CLIENT_URL.CONTACT_US.element
      },
      {
        path: CLIENT_URL.DETAIL_MOVIE.path,
        element:  CLIENT_URL.DETAIL_MOVIE.element
      },
      {
        path: CLIENT_URL.FAVORITE.path,
        element:  CLIENT_URL.FAVORITE.element
      },
      {
        path: CLIENT_URL.LOGIN.path,
        element:  CLIENT_URL.LOGIN.element
      },
      {
        path: CLIENT_URL.MOVIE_PAGE.path,
        element:  CLIENT_URL.MOVIE_PAGE.element
      },
      {
        path: CLIENT_URL.PASSWORD.path,
        element:  CLIENT_URL.PASSWORD.element
      },
      {
        path: CLIENT_URL.PROFILE.path,
        element:  CLIENT_URL.PROFILE.element
      },
      {
        path: CLIENT_URL.REGISTER.path,
        element:  CLIENT_URL.REGISTER.element
      },
      {
        path: CLIENT_URL.WATCH_PAGE.path,
        element:  CLIENT_URL.WATCH_PAGE.element
      },
    ]
}