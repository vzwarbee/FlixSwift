import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserInfo } from "../Redux/slices/auth";
import { IS_ADMIN } from "../config/constant";
import { Navigate, Outlet } from "react-router-dom";

const AdminPrivate = () => {
    const {userInfo, accessToken} = useSelector(state=>state.auth)
    const dispatch = useDispatch();

    useEffect(()=>{
        if (accessToken || userInfo) {
            dispatch(getUserInfo());
          }
    },[accessToken, dispatch, userInfo])
    return accessToken || userInfo?.is_admin === IS_ADMIN.ADMIN ? <Outlet/>:<Navigate to="/login"/>
}

export default AdminPrivate