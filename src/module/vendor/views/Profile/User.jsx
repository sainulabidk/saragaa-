// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { userLogin } from 'container/LoginContainer/slice';
// import { Formik, Form, Field } from 'formik';
// import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
// import './Profile.css';
// import TextField from 'ui-component/common/TextField';
// import User1 from 'assets/images/users/user-round.svg';
// import EditNoteIcon from '@mui/icons-material/EditNote';

// function User() {
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.login.user);

//   useEffect(() => {
//     dispatch(userLogin());
//     console.log('=======userData=======', userData);
//   }, [dispatch, userData]);

//   // const renderUserType = () => {
//   //     switch (userData?.userType) {
//   //         case 'INDV':
//   //             return 'Individual';
//   //         case 'ORG':
//   //             return 'Organization';
//   //         case 'AGNT':
//   //             return 'Agent';
//   //         default:
//   //             return '-';
//   //     }
//   // };

//   const initialValues = {
//     fName: userData?.fName || '',
//     lName: userData?.lName || '',
//     mobileNo: userData?.mobileNo || '',
//     email: userData?.email || ''
//     // role: userData?.role || '',
//     // userType: renderUserType()
//   };

//   return (
//     <>

//       <Grid style={{ backgroundColor: '#fff', borderRadius: '14px' }}>
//         <Card>
//           <CardContent>
//             <Grid container spacing={2} className="media600">

//               <Grid item xs={12} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <Avatar src={User1} style={{ height: '110px', width: '110px' }} />
//               </Grid>
//               <Grid item xs={12} sm={6} md={9} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
//                 <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
//                   {() => (
//                     <Form>
//                       <Grid container spacing={2} className="textcard">
//                         <Grid item xs={12} sm={6} md={6}>
//                           <Typography>First Name</Typography>
//                           <Field type="text" name="fName" as={TextField} fullWidth disabled />
//                         </Grid>

//                         <Grid item xs={12} sm={6} md={6}>
//                           <Typography>Last Name</Typography>
//                           <Field type="text" name="lName" as={TextField} disabled />
//                         </Grid>

//                         <Grid item xs={12} sm={6} md={6}>
//                           <Typography>Contact No</Typography>
//                           <Field type="text" name="mobileNo" as={TextField} disabled />
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={6}>
//                           <Typography>Email Id</Typography>
//                           <Field type="text" name="email" as={TextField} disabled />
//                         </Grid>
//                         {/* <Grid item xs={12} sm={6} md={6}>
//                                                     <Typography>Role</Typography>
//                                                     <Field
//                                                         type="text"
//                                                         name="role"
//                                                         as={TextField}
//                                                         disabled
//                                                     />
//                                                 </Grid>
//                                                 <Grid item xs={12} sm={6} md={6}>
//                                                     <Typography>User Type</Typography>
//                                                     <Field
//                                                         type="text"
//                                                         name="userType"
//                                                         as={TextField}
//                                                         disabled
//                                                     />
//                                                 </Grid> */}
//                       </Grid>
//                     </Form>
//                   )}
//                 </Formik>
//               </Grid>

//             </Grid>
//           </CardContent>
//         </Card>
//       </Grid>
//     </>
//   );
// }

// export default User;

// -------------------------------------------------------------------------

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { userLogin } from 'container/LoginContainer/slice';
// import { Formik, Form, Field } from 'formik';
// import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
// import './Profile.css';
// import TextField from 'ui-component/common/TextField';
// import User1 from 'assets/images/users/user-round.svg';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import { useState } from 'react';

// function User() {
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.login.user);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     dispatch(userLogin());
//     console.log('=======userData=======', userData);
//   }, [dispatch]);

//   const initialValues = {
//     fName: userData?.fName || '',
//     lName: userData?.lName || '',
//     mobileNo: userData?.mobileNo || '',
//     email: userData?.email || ''
//   };
//   const handleEditModeToggle = () => {
//     setEditMode(!editMode);
//   };
//   return (
//     <>
//       <Grid style={{ backgroundColor: '#fff', borderRadius: '14px' }}>
//         <Card>
//           <CardContent style={{ position: 'relative' }}>
//             <button
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 right: 0,
//                 backgroundColor: 'black',
//                 border: 'none',
//                 borderRadius: '30%',
//                 padding: '8px',
//                 cursor: 'pointer'
//               }}
//               onClick={handleEditModeToggle} // Corrected
//             >
//               <EditNoteIcon style={{ color: 'white' }} />
//             </button>

//             <Grid container spacing={2} className="media600">
//               <Grid item xs={12} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <Avatar src={User1} style={{ height: '110px', width: '110px' }} />
//               </Grid>
//               <Grid item xs={12} sm={6} md={9} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
//                 <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
//                   {() => (
//                     <Form>
//                       <Grid container spacing={2} className="textcard">
//                         <Grid item xs={12} sm={6} md={6}>
//                           <Typography>First Name</Typography>
//                           <Field type="text" id="fName" name="fName" as={TextField} fullWidth disabled={!editMode} />
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={6}>
//                           <Typography>Last Name</Typography>
//                           <Field type="text" id="lName" name="lName" as={TextField} disabled={!editMode} />
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={6}>
//                           <Typography>Contact No</Typography>
//                           <Field type="text" name="mobileNo" as={TextField} disabled />
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={6}>
//                           <Typography>Email Id</Typography>
//                           <Field type="text" name="email" as={TextField} disabled />
//                         </Grid>
//                       </Grid>
//                     </Form>
//                   )}
//                 </Formik>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
//       </Grid>
//     </>
//   );
// }

// export default User;




import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Grid, Card, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import './Profile.css';
import TextField from 'ui-component/common/TextField';
import User1 from 'assets/images/users/user-round.svg';
import { useState } from 'react';
import { IconPencil } from '@tabler/icons';

// import { getUserMe } from 'module/vendor/container/userContainer/slice';
// import { getUserById } from '';

import { userLogin } from 'container/LoginContainer/slice';


// 
function User() {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
        dispatch(userLogin());
        console.log('=======userData=======', userMeDataDe);
      }, [dispatch]);

        const userMeDataDe = useSelector((state) => state.login.user);


  
  const initialValues = {
    fName: userMeDataDe?.fName || '',
    lName: userMeDataDe?.lName || '',
    mobileNo: userMeDataDe?.mobileNo || '',
    email: userMeDataDe?.email || ''
  };
  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };
  return (
    <>
      <Grid style={{ backgroundColor: '#fff', borderRadius: '14px' }}>
        <Card>
          <CardContent style={{ position: 'relative' }}>
            <IconButton
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: 'black',
                cursor: 'pointer',
                color:'#fff'
              }}
              onClick={handleEditModeToggle}
            >
              <IconPencil style={{ color: 'white' }} />
            </IconButton>

            <Grid container spacing={2} className="media600">
              <Grid item xs={12} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar src={User1} style={{ height: '110px', width: '110px' }} />
              </Grid>
              <Grid item xs={12} sm={6} md={9} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
                  {() => (
                    <Form>
                      <Grid container spacing={2} className="textcard">
                        <Grid item xs={12} sm={6} md={6}>
                          <Typography>First Name</Typography>
                          <Field type="text" id="fName" name="fName" as={TextField} fullWidth disabled={!editMode} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Typography>Last Name</Typography>
                          <Field type="text" id="lName" name="lName" as={TextField} disabled={!editMode} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Typography>Contact No</Typography>
                          <Field type="text" name="mobileNo" as={TextField} disabled />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Typography>Email Id</Typography>
                          <Field type="text" name="email" as={TextField} disabled />
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default User;
