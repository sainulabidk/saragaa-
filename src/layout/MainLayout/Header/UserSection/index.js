import React, { useEffect } from 'react';
import { Box, CardHeader } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from 'container/LoginContainer/slice';

const UserSection = () => {
  const userData = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userLogin());
    console.log('=======dasborduserData=======', userData);
  }, [dispatch, userData]);


  return (
    <Box sx={{ ml: 4 }}>
      {userData ? (
        <CardHeader
          key={userData.id}
          sx={{ m: 0, p: 0 }}
          title={`${userData.fName || '-'} ${userData.lName || '-'}`}
          subheader={userData.email || '-'}
          
        />
      ) : (
        <p>Loading...</p>
      )}
      
    </Box>
  );
};

export default UserSection;
