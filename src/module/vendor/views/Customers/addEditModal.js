
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useTheme } from '@mui/material/styles';
// import commonStyles from 'assets/style/Style';
// import { Formik, Form, ErrorMessage } from 'formik';
// import { Box, Grid, FormLabel, Button } from '@mui/material';
// import Textfield from 'ui-component/common/TextField';
// import * as Yup from 'yup';
// import { addUser, updateUser, getUserById } from 'module/vendor/container/userContainer/slice';

// const AddEditModal = ({ formtype, data, handleClose }) => {
//     const theme = useTheme();
//     const style = commonStyles(theme);
//   const dispatch = useDispatch();
//   const userById = useSelector((state) => state.user.user.userByIdData);

//   useEffect(() => {
//             if (data && data.id) {
//                 dispatch(getUserById(data.id));
//             }
//         }, [dispatch, data]);

//   // Initial values and other setup specific to each form type
//   let initialValues = {};
//   let validationSchema = {};

//   if (formtype === 'basicDetails') {
//     initialValues = {
//         custType: formtype === 'editform' ? userById?.custType || '' : '',
//         fName: formtype === 'editform' ? userById?.fName || '' : '',
//         lName: formtype === 'editform' ? userById?.lName || '' : '',
//         email: formtype === 'editform' ? userById?.email || '' : '',
//         contactMobile1: formtype === 'editform' ? userById?.contactMobile1 || '' : '',
//         contactMobile2: formtype === 'editform' ? userById?.contactMobile2 || '' : '',
        
    
//     };
//     validationSchema = Yup.object({
//       custType: Yup.string().required('Customer Type is Required'),
//       fName: Yup.string().required('First Name is Required'),
//       lName: Yup.string().required('Last Name is Required'),
//       email: Yup.string().required('Email is Required'),
//       contactMobile1: Yup.string().required('Mobile is Required'),
//       contactMobile2: Yup.string().required('WhatsApp is Required'),
     
//     });
//   } else if (formtype === 'additionalInfo') {
//     initialValues = {
//         address: '',
     
//     };
//     validationSchema = Yup.object({
//         address: Yup.string().required('Address is Required'),
      
//     });
//   }else if (formtype === 'generalDetails') {
//     initialValues = {
   
//     };
//     validationSchema = Yup.object({
//         remarks: Yup.string().required('Remarks is Required'),
//         enqSource: Yup.string().required('Enquiry Source is Required'),
//         enqMode: Yup.string().required('Enquiry Mode is Required'),
     
//     });
//   }

//   const onSubmit = (values, { resetForm }) => {
//     if (formtype === 'addform') {
//       dispatch(addUser(values));
//     } else {
//         values.id = data.id;
//                     dispatch(updateUser(values));
//     }
//     handleClose(formtype);
//     resetForm();
//   };

//   return (
//     <Box>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
//         <Form>
//           <Grid container spacing={2}>
    
//             {formtype === 'basicDetails' && (
//               <>
//                <Grid item xs={12} sm={6}>
//                   <FormLabel>Customer Type</FormLabel>
//                   <Textfield name="custType" placeholder="Customer Type" />
//                   <ErrorMessage name="custType" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <FormLabel>Email</FormLabel>
//                   <Textfield name="email" placeholder="Email" />
//                   <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <FormLabel>First Name</FormLabel>
//                   <Textfield name="fName" placeholder="First Name" />
//                   <ErrorMessage name="fName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <FormLabel>Last Name</FormLabel>
//                   <Textfield name="lName" placeholder="Last Name" />
//                   <ErrorMessage name="lName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <FormLabel>Mobile</FormLabel>
//                   <Textfield name="contactMobile1" placeholder="Mobile" />
//                   <ErrorMessage name="contactMobile1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <FormLabel>WhatsApp</FormLabel>
//                   <Textfield name="contactMobile2" placeholder="WhatsApp" />
//                   <ErrorMessage name="contactMobile2" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
              
//                 <Button type="submit" sx={style.changeBtn}>Save</Button>
//               </>
//             )}


//             {formtype === 'additionalInfo' && (
//               <>
//                 <Grid item xs={12} sm={6}>
//                   <FormLabel>Address</FormLabel>
//                   <Textfield name="address" placeholder="address" />
//                   <ErrorMessage name="address" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Button type="submit" sx={style.changeBtn}>Save</Button>
//               </>
//             )}


//             {formtype === 'generalDetails' && (
//               <>
//                  <Grid item xs={12} sm={6}>
//                   <FormLabel>Remarks</FormLabel>
//                   <Textfield name="remarks" placeholder="Remarks" />
//                   <ErrorMessage name="remarks" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                  <Grid item xs={12} sm={6}>
//                   <FormLabel>Enquiry Source</FormLabel>
//                   <Textfield name="enqSource" placeholder="Enquiry Source" />
//                   <ErrorMessage name="enqSource" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                  <Grid item xs={12} sm={6}>
//                   <FormLabel>Enquiry Mode</FormLabel>
//                   <Textfield name="enqMode" placeholder="Enquiry Mode" />
//                   <ErrorMessage name="enqMode" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Button type="submit" sx={style.changeBtn}>Save</Button>
//               </>
//             )}
      
//           </Grid>
//           {/* <Button type="submit">Save</Button> */}
//         </Form>
//       </Formik>
//     </Box>
//   );
// };

// export default AddEditModal;

//...............................................................................................



// import React ,{useEffect} from 'react';
// import { Formik, Form, ErrorMessage } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import * as Yup from 'yup';
// import FormLabel from '@mui/material/FormLabel';
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
//                             <FormLabel>First Name</FormLabel>
//                             <Textfield name="fName" placeholder="First Name" />
//                             <ErrorMessage name="fName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <FormLabel>Last Name</FormLabel>
//                             <Textfield name="lName" placeholder="Last Name " />
//                             <ErrorMessage name="lName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <FormLabel>Email</FormLabel>
//                             <Textfield name="email" placeholder="Email" />
//                             <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <FormLabel>Mobile</FormLabel>
//                             <Textfield name="mobileNo" placeholder="Mobile" />
//                             <ErrorMessage name="mobileNo" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <FormLabel>Password</FormLabel>
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





import React ,{useEffect} from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
// import PropTypes from 'prop-types';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
 import { useTheme } from '@mui/material/styles';
import Textfield from 'ui-component/common/TextField';
import { Button } from '@mui/material';
import commonStyles from 'assets/style/Style';
import { addCustomer, updateCustomer, getCustomerById} from 'module/vendor/container/customerContainer/slice';


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

  console.log('==================datacheck==================', data);

  const initialValues = {
    fName: formtype === 'editform' ? customerById?.fName || '' : '',
    lName: formtype === 'editform' ? customerById?.lName || '' : '',
    email: formtype === 'editform' ? customerById?.email || '' : '',
    contactMobile1: formtype === 'editform' ? customerById?.contactMobile1 || '' : '',
   

  };

  const validationSchema = Yup.object({
    fName: Yup.string().required('First Name is Required'),
    lName: Yup.string().required('Last Name is Required'),
    email: Yup.string().required('Email is Required'),
    contactMobile1: Yup.string().required('Mobile is Required'),
  
  });

  const onSubmit = (values, { resetForm }) => {

    console.log(values, '=======updatedValues========');
    if (formtype && formtype === 'addform') {
      dispatch(addCustomer(values));
 
    } else {
    
      values.id = data.id;
    

      dispatch(updateCustomer(values));
    }

    handleClose(formtype);
    resetForm();
  };

  return (
    <Box onClose={handleClose}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
        <Form>
          <Grid container spacing={2}></Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormLabel>First Name</FormLabel>
              <Textfield name="fName" id="fName" placeholder="First Name" component={Textfield} />
              <ErrorMessage name="fName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormLabel>Last Name</FormLabel>
              <Textfield name="lName" id="lName" placeholder="Last Name " component={Textfield} />
              <ErrorMessage name="lName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            <Grid item xs={12} sm={6} >
            <FormLabel>Email</FormLabel>
              <Textfield name="email" id="email" placeholder="Email" component={Textfield} />
              <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormLabel>Mobile</FormLabel>
              <Textfield name="contactMobile1" id="contactMobile1" placeholder="Mobile" component={Textfield} />
              <ErrorMessage name="contactMobile1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
        
        
          </Grid>
          <Button type="submit"  sx={style.changeBtn}>Save</Button>
        </Form>
      </Formik>
    </Box>
  );
};

// AddEditModal.propTypes = {
//   formtype: PropTypes.string.isRequired,
//   data: PropTypes.any.isRequired,
//   handleClose: PropTypes.func.isRequired
// };

export default AddEditModal;

