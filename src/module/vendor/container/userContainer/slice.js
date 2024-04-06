import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
      userData: [],
      loading: false,
      error: null,
      userByIdData: {}
    },
    reducers: {
      addUser: (state) => {
        state.loading = true;
        state.error = null;
      },
      addUserSuccess: (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      },
      addUserFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
        getUser: (state) => {
            state.loading = true;
            state.error = null;
          },
        getUserSuccess: (state, action) => {
            state.loading = false;
            state.userData = action.payload;
          },
      
        getUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          getUserById: (state) => {
            state.loading = true;
            state.error = null;
          },
          getUserByIdSuccess: (state, action) => {
            state.loading = false;
            state.userByIdData = action.payload;
          },
          getUserByIdFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          updateUser: (state) => {
            state.loading = true;
            state.error = null;
          },
      
          updateUserSuccess: (state, action) => {
            console.log('================action.payload====================', action.payload);
            alert('hey i am here');
            state.loading = false;
            state.userData =
              action.payload === undefined
                ? current(state).userData
                : current(state).userData.map((Data) => (Data.id === action.payload.id ? action.payload : Data));
            console.log('================userData====================', state.userData);

          },
          updateUserFail: (state, action) => {
            alert('hey i am not here', action.payload);
      
            state.loading = false;
            state.error = action.payload;
          },
          deleteUser: (state) => {
            state.loading = true;
            state.error = null;
          },
          deleteUserSuccess: (state, action) => {
            state.loading = false;
            state.userData =
              action.payload === undefined
                ? current(state.userData)
                : current(state.userData).filter((option) => option.id !== action.payload);
            //  state.userData.filter((Data) => Data.id !== action.payload);
          },
          deleteUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }
          // deleteUser: (state) => {
          //   state.loading = true;
          //   state.error = null;
          // },
          // deleteUserSuccess: (state, action) => {
          //   state.loading = false;
          //   state.userData =
          //     action.payload === undefined
          //       ? current(state.userData)
          //       : current(state.userData).filter((option) => option.id !== action.payload);
   
          // },
          // deleteUserFail: (state, action) => {
          //   state.loading = false;
          //   state.error = action.payload;
          // }
      
    }
});

  export const{
      addUser,
      addUserSuccess,
      addUserFail,
      getUser,
      getUserSuccess,
      getUserFail,
      getUserById,
      getUserByIdSuccess,
      getUserByIdFail,
      updateUser,
      updateUserSuccess,
      updateUserFail,
      deleteUser,
      deleteUserSuccess,
      deleteUserFail
  } = userSlice.actions;

  export default userSlice.reducer;