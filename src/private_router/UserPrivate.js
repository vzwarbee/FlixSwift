import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../Redux/slices/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function UserPrivate() {
  const { userInfo, accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      dispatch(getUserInfo());
    }
  }, [accessToken, dispatch]);
  return accessToken || userInfo ? <Outlet /> : <Navigate to="/" />;
}
