// import React ,{useEffect} from 'react';
// import { Formik, Form, ErrorMessage } from 'formik';
// import { useDispatch, useSelector} from 'react-redux';
// import * as Yup from 'yup';
// import FormLabel from '@mui/material/FormLabel';
// // import PropTypes from 'prop-types';
// import Box from '@mui/system/Box';
// import Grid from '@mui/material/Grid';
//  import { useTheme } from '@mui/material/styles';
// import Textfield from 'ui-component/common/TextField';
// import { Button } from '@mui/material';
// import commonStyles from 'assets/style/Style';
// import { addUser, updateUser, getUserById} from 'module/vendor/container/userContainer/slice';


// const AddEditModal = ({ formtype, data, handleClose }) => {
//      const theme = useTheme();
//      const style = commonStyles(theme);
//      const dispatch = useDispatch();
//   const userById = useSelector((state) => state.data.user.userByIdData);


//   useEffect(() => {
//     if (data && data.id) {
//       dispatch(getUserById(data.id));
//     }
//   }, [dispatch, data]);

//   console.log('==================datacheck==================', data);

//   const initialValues = {
//     fName: formtype === 'editform' ? userById?.fName || '' : '',
//     lName: formtype === 'editform' ? userById?.lName || '' : '',
//     email: formtype === 'editform' ? userById?.email || '' : '',
//     mobileNo: formtype === 'editform' ? userById?.mobileNo || '' : '',
//     password: formtype === 'editform' ? userById?.password || '' : ''

//   };

//   const validationSchema = Yup.object({
//     fName: Yup.string().required('First Name is Required'),
//     lName: Yup.string().required('Last Name is Required'),
//     email: Yup.string().required('Email is Required'),
//     mobileNo: Yup.string().required('Mobile is Required'),
//     password: Yup.string().required('Password is Required')

//   });

//   const onSubmit = (values, { resetForm }) => {

//     console.log(values, '=======updatedValues========');
//     if (formtype && formtype === 'addform') {
//       dispatch(addUser(values));
 
//     } else {
    
//       values.id = data.id;
    

//       dispatch(updateUser(values));
//     }

//     handleClose(formtype);
//     resetForm();
//   };

//   return (
//     <Box onClose={handleClose}>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
//         <Form>
//           <Grid container spacing={2}></Grid>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//             <FormLabel>First Name</FormLabel>
//               <Textfield name="fName" id="fName" placeholder="First Name" component={Textfield} />
//               <ErrorMessage name="fName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <FormLabel>Last Name</FormLabel>
//               <Textfield name="lName" id="lName" placeholder="Last Name " component={Textfield} />
//               <ErrorMessage name="lName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>
//             <Grid item xs={12} sm={6} >
//             <FormLabel>Email</FormLabel>
//               <Textfield name="email" id="email" placeholder="Email" component={Textfield} />
//               <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <FormLabel>Mobile</FormLabel>
//               <Textfield name="mobileNo" id="mobileNo" placeholder="Mobile" component={Textfield} />
//               <ErrorMessage name="mobileNo" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>
//              <Grid item xs={12} sm={6}>
//              <FormLabel>Password</FormLabel>
//               <Textfield name="password" id="password" placeholder="Password" component={Textfield} />
//               <ErrorMessage name="password" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid> 
        
//           </Grid>
//           <Button type="submit"  sx={style.changeBtn}>Save</Button>
//         </Form>
//       </Formik>
//     </Box>
//   );
// };

// // AddEditModal.propTypes = {
// //   formtype: PropTypes.string.isRequired,
// //   data: PropTypes.any.isRequired,
// //   handleClose: PropTypes.func.isRequired
// // };

// export default AddEditModal;




// .......................................................................................................




// import React, { useEffect } from 'react';
// import { Formik, Form, ErrorMessage } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import * as Yup from 'yup';
// import Box from '@mui/system/Box';
// import Grid from '@mui/material/Grid';
// import Textfield from 'ui-component/common/TextField';
// import { useTheme } from '@mui/material/styles';
// import { Button } from '@mui/material';
// import commonStyles from 'assets/style/Style';
// import { addUser, updateUser, getUserById } from 'module/vendor/container/userContainer/slice';

// const AddEditModal = ({ formtype, data, handleClose }) => {
//     const theme = useTheme();
//     const style = commonStyles(theme);
//     const dispatch = useDispatch();
//     const userById = useSelector((state) => state.user.user.userByIdData);

//     useEffect(() => {
//         if (data && data.id) {
//             dispatch(getUserById(data.id));
//         }
//     }, [dispatch, data]);

//     const initialValues = {
//         fName: formtype === 'editform' ? userById?.fName || '' : '',
//         lName: formtype === 'editform' ? userById?.lName || '' : '',
//         email: formtype === 'editform' ? userById?.email || '' : '',
//         mobileNo: formtype === 'editform' ? userById?.mobileNo || '' : '',
//         password: formtype === 'editform' ? userById?.password || '' : ''
//     };

//     const validationSchema = Yup.object({
//         fName: Yup.string().required('First Name is Required'),
//         lName: Yup.string().required('Last Name is Required'),
//         email: Yup.string().required('Email is Required'),
//         mobileNo: Yup.string().required('Mobile is Required'),
//         password: Yup.string().required('Password is Required')
//     });

//     const onSubmit = (values, { resetForm }) => {

//       console.log(values, '=====valuess======');
      
//         if (formtype && formtype === 'addform') {
//             dispatch(addUser(values));
//         } else {
//             values.id = data.id;
//             dispatch(updateUser(values));
//         }
//         handleClose(formtype);
//         resetForm();
//     };

//     return (
//         <Box>
//             <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
//                 <Form>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <Textfield name="fName" placeholder="First Name" />
//                             <ErrorMessage name="fName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Textfield name="lName" placeholder="Last Name " />
//                             <ErrorMessage name="lName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Textfield name="email" placeholder="Email" />
//                             <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Textfield name="mobileNo" placeholder="Mobile" />
//                             <ErrorMessage name="mobileNo" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Textfield name="password" placeholder="Password" />
//                             <ErrorMessage name="password" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                         </Grid>
//                     </Grid>
//                     <Button type="submit" sx={style.changeBtn}>Save</Button>
//                 </Form>
//             </Formik>
//         </Box>
//     );
// };

// export default AddEditModal;




// //......................................................................................................







import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
// import PropTypes from 'prop-types';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Textfield from 'ui-component/common/TextField';
import { Button } from '@mui/material';
import commonStyles from 'assets/style/Style';
import { addCustomer, updateCustomer, getCustomerById } from 'module/vendor/container/customerContainer/slice';

const AddEditModal = ({ formtype, data, handleClose }) => {
  const theme = useTheme();
  const style = commonStyles(theme);
  const dispatch = useDispatch();
  const customerById = useSelector((state) => state.customer.customer.customerByIdData);

  useEffect(() => {
    if (data && data.id) {
      dispatch(getCustomerById(data.id));
    }
  }, [dispatch, data]);

  const initialValues = {
    fName: formtype === 'editform' ? customerById?.fName || '' : '',
    lName: formtype === 'editform' ? customerById?.lName || '' : '',
    email: formtype === 'editform' ? customerById?.email || '' : '',
    contactMobile1: formtype === 'editform' ? customerById?.contactMobile1 || '' : ''
  };

  const validationSchema = Yup.object({
    fName: Yup.string().required('Required'),
    lName: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    contactMobile1: Yup.string().required('Required')
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      if (formtype === 'addform') {
        await dispatch(addCustomer(values));
      } else if (formtype === 'editform') {
        values.id = data.id;
        await dispatch(updateCustomer(values));
      }
      handleClose();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  // const onSubmit = (values, { resetForm }) => {

  //   console.log(values.id, '=======cus add========');
  //   if (formtype && formtype === 'addform') {
  //     dispatch(addCustomer(values));

  //   } else {

  //     values.id = data.id;

  //     dispatch(updateCustomer(values));
  //   }

  //   handleClose(formtype);
  //   resetForm();
  // };
  // Function for adding a customer
  // const addCustomerSubmit = (values, resetForm) => {
  //   dispatch(addCustomer(values));
  //   handleClose('addform');
  //   resetForm();
  // };

  // Function for editing a customer
  // const editCustomerSubmit = (values, resetForm) => {
  //   const updatedValues = { ...values, id: data.id };
  //   dispatch(updateCustomer(updatedValues));
  //   handleClose('editform');
  //   resetForm();
  // };

  // // onSubmit function
  // const onSubmit = (values, { resetForm }) => {
  //   if (formtype && formtype === 'addform') {
  //     addCustomerSubmit(values, resetForm);
  //   } else {
  //     editCustomerSubmit(values, resetForm);
  //   }
  // };

  return (
    <Box onClose={handleClose}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
        <Form>
          <Grid container spacing={2}></Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
            <FormLabel>First Name</FormLabel>
              <Textfield name="fName" id="fName" placeholder="FirstName" component={Textfield} />
              <ErrorMessage name="fName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <FormLabel>Last Name</FormLabel>
              <Textfield name="lName" id="lName" placeholder="LastName" component={Textfield} />
              <ErrorMessage name="lName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <FormLabel>Email</FormLabel>
              <Textfield name="email" id="email" placeholder="Email" component={Textfield} />
              <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <FormLabel>Mobile</FormLabel>
              <Textfield name="contactMobile1" id="contactMobile1" placeholder="Mobile" component={Textfield} />
              <ErrorMessage name="contactMobile1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
          </Grid>
          <Button type="submit" sx={style.changeBtn}>
            Save
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};
AddEditModal.propTypes = {
  formtype: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default AddEditModal;