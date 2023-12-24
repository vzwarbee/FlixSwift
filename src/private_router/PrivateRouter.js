import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../Redux/slices/auth";
import { Outlet } from "react-router-dom";

export default function UserPrivate() {
  const { userInfo, accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken || !userInfo) {
      dispatch(getUserInfo());
    }
  }, [accessToken, dispatch, userInfo]);
  return<Outlet />;
}
