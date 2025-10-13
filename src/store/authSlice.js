import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: null
    },
    reducers:{
        setUser: (state,action)=>{
            state.user = action.payload;
            window.localStorage.setItem('user',JSON.stringify(action.payload))
        },
        removeUser: (state)=>{
            state.user = null;
            window.localStorage.removeItem('user')
        },
        setUserFromLocalStorage: (state)=>{
            let user = window.localStorage.getItem('user');
            state.user = user ? JSON.parse(user) : null;
        }
    }
});

export const {setUser, removeUser,setUserFromLocalStorage} = authSlice.actions

export default authSlice.reducer;


