import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/axios';
export const getUserInfo = createAsyncThunk(
  'getUserInfo',
  async () => {
    try {
      const response = await axiosInstance.get('user', {
        timeout: 5000 // 5s
      });
      return response.data
    } catch (error) {
      console.log('error: ', error);
    }
  }
)
const initialState = {
  userInfo: {},
  accessToken: ""
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.accessToken = action.payload.token;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      // Add user to the state array
      state.accessToken = action.payload;
    })
  }
});

const { actions, reducer } = authSlice
export const { setAccessToken, setIsLoading, setUserInfo, setIsError, setIsSuccess } = actions;
export default reducer;


