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

//..........................................................

// import React, { useEffect, useState } from 'react';
// import { Formik, Form, ErrorMessage } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import * as Yup from 'yup';
// import Box from '@mui/system/Box';
// import Grid from '@mui/material/Grid';
// import { useTheme } from '@mui/material/styles';
// import Textfield from 'ui-component/common/TextField';
// import FormLabel from '@mui/material/FormLabel';
// import '../../../../assets/style/style.css'
// import { Button, Tab, Tabs } from '@mui/material';
// import commonStyles from 'assets/style/Style';
// import { addCustomer, updateCustomer, getCustomerById } from 'module/vendor/container/customerContainer/slice';

// const AddEditModal = ({ formtype, data, handleClose }) => {
//   const theme = useTheme();
//   const style = commonStyles(theme);
//   const dispatch = useDispatch();
//   const customerById = useSelector((state) => state.data.customers.customerByIdData);

//   useEffect(() => {
//     if (data && data.id) {
//       dispatch(getCustomerById(data.id));
//     }
//   }, [dispatch, data]);

//   const initialValues = {
//     custType: formtype === 'editform' ? customerById?.custType || '' : '',
//     fName: formtype === 'editform' ? customerById?.fName || '' : '',
//     lName: formtype === 'editform' ? customerById?.lName || '' : '',
//     email: formtype === 'editform' ? customerById?.email || '' : '',
//     contactMobile1: formtype === 'editform' ? customerById?.contactMobile1 || '' : '',
//     contactMobile2: formtype === 'editform' ? customerById?.contactMobile2 || '' : '',
//     addr1: formtype === 'editform' ? customerById?.address?.addr1 || '' : '',
//   };

//   const validationSchema = Yup.object({
//     custType: Yup.string().required('Customer Type is Required'),
//     fName: Yup.string().required('First Name is Required'),
//     lName: Yup.string().required('Last Name is Required'),
//     email: Yup.string().required('Email is Required'),
//     contactMobile1: Yup.string().required('Mobile is Required'),
//     // addr1: Yup.string().required('addr1 is Required'),
//   });

//   const onSubmit = (values, { resetForm }) => {
//     console.log(values, '=======updatedValues========');
//     if (formtype && formtype === 'addform') {
//       dispatch(addCustomer(values));
//     } else {
//       values.id = data.id;
//       dispatch(updateCustomer(values));
//     }

//     handleClose(formtype);
//     resetForm();
//   };

//   const [tabValue, setTabValue] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (
//     <Box onClose={handleClose}>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
//         <Form>
//           <Tabs value={tabValue} onChange={handleTabChange} aria-label="form tabs">
//             <Tab label="Personal Details" />
//             <Tab label="Additional Details" />
//             <Tab label="General Details" />
//           </Tabs>
//           <Grid container spacing={2}>
//             {tabValue === 0 && (
//               <>
//                 <Grid item xs={12} sm={6}>
//                 <FormLabel>Customer Type</FormLabel>
//                   <Textfield name="custType" id="custType" placeholder="Customer Type" component={Textfield} />
//                   <ErrorMessage name="custType" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <FormLabel>Email</FormLabel>
//                   <Textfield name="email" id="email" placeholder="Email" component={Textfield} />
//                   <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <FormLabel>First Name</FormLabel>
//                   <Textfield name="fName" id="fName" placeholder="First Name" component={Textfield} />
//                   <ErrorMessage name="fName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <FormLabel>Last Name</FormLabel>
//                   <Textfield name="lName" id="lName" placeholder="Last Name" component={Textfield} />
//                   <ErrorMessage name="lName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>

//               </>
//             )}
//             {tabValue === 1 && (
//               <>
//                 <Grid item xs={12} sm={6}>
//                 <FormLabel>Email</FormLabel>
//                   <Textfield name="email" id="email" placeholder="Email" component={Textfield} />
//                   <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <FormLabel>Mobile</FormLabel>
//                   <Textfield name="contactMobile1" id="contactMobile1" placeholder="Mobile" component={Textfield} />
//                   <ErrorMessage name="contactMobile1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <FormLabel>WhatsApp</FormLabel>
//                   <Textfield name="contactMobile2" id="contactMobile2" placeholder="WhatsApp" component={Textfield} />
//                   <ErrorMessage name="contactMobile2" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <FormLabel>Address</FormLabel>
//                 <Textfield name="address.addr1" id="address.addr1" placeholder="Address" component={Textfield} />
//                 <ErrorMessage name="address.addr1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//               </Grid>
//               </>
//             )}
//             {/* Add your fields for additional information in tabValue === 2 */}
//             {tabValue === 2 && (
//               <>
//                 <Grid item xs={12} sm={6}>
//                 <FormLabel>Remarks</FormLabel>
//                   <Textfield name="remarks" id="remarks" placeholder="Remarks" component={Textfield} />
//                   <ErrorMessage name="remarks" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//                 </Grid>

//               </>
//             )}
//           </Grid>
//           <Button type="submit" sx={style.changeBtn}>Save</Button>
//         </Form>
//       </Formik>
//     </Box>
//   );
// };

// export default AddEditModal;

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
// import { addCustomer, updateCustomer, getCustomerById} from 'module/vendor/container/customerContainer/slice';

// const AddEditModal = ({ formtype, data, handleClose }) => {
//      const theme = useTheme();
//      const style = commonStyles(theme);
//      const dispatch = useDispatch();
//   const customerById = useSelector((state) => state.customers.customerByIdData);

//   useEffect(() => {
//     if (data && data.id) {
//       dispatch(getCustomerById(data.id));
//     }
//   }, [dispatch, data]);

//   console.log('==================datacheck==================', data);

//   const initialValues = {
//     fName: formtype === 'editform' ? customerById?.fName || '' : '',
//     lName: formtype === 'editform' ? customerById?.lName || '' : '',
//     email: formtype === 'editform' ? customerById?.email || '' : '',
//     contactMobile1: formtype === 'editform' ? customerById?.contactMobile1 || '' : '',

//   };

//   const validationSchema = Yup.object({
//     fName: Yup.string().required('First Name is Required'),
//     lName: Yup.string().required('Last Name is Required'),
//     email: Yup.string().required('Email is Required'),
//     contactMobile1: Yup.string().required('Mobile is Required'),

//   });

//   const onSubmit = (values, { resetForm }) => {

//     console.log(values, '=======updatedValues========');
//     if (formtype && formtype === 'addform') {
//       dispatch(addCustomer(values));

//     } else {

//       values.id = data.id;

//       dispatch(updateCustomer(values));
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
//               <Textfield name="contactMobile1" id="contactMobile1" placeholder="Mobile" component={Textfield} />
//               <ErrorMessage name="contactMobile1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>

//           </Grid>
//           <Button type="submit"  sx={style.changeBtn}>Save</Button>
//         </Form>
//       </Formik>
//     </Box>
//   );
// };

// export default AddEditModal;

import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Textfield from 'ui-component/common/TextField';
// import { Button, FormControl, InputLabel, MenuItem, Select, Tab, Tabs } from '@mui/material';
import { Button , Tab, Tabs } from '@mui/material';
import commonStyles from 'assets/style/Style';
import 'assets/style/style.css';
import { addCustomer, updateCustomer, getCustomerById } from 'module/vendor/container/customerContainer/slice';
// import { getCountry } from 'module/admin/container/countryContainer/slice';

const AddEditModal = ({ formtype, data, handleClose }) => {
  const theme = useTheme();
  const style = commonStyles(theme);
  const dispatch = useDispatch();
  const customerById = useSelector((state) => state.data.customers.customerByIdData);
  // const country = useSelector((state) => state.data.country.countryData);
  // const country = useSelector((state) => state.country.country.countryData);
  // const [selectedCountry, setSelectedCountry] = useState(''); // State to hold selected country

  // console.log('country master data ', country);
  // useEffect(() => {
  //   dispatch(getCountry());
  // }, [dispatch]);

  useEffect(() => {
    if (data && data.id) {
      dispatch(getCustomerById(data.id));
    }
  }, [dispatch, data]);

  console.log('==================datacheck==================', data);

  const initialValues = {
    custType: formtype === 'editform' ? customerById?.custType || '' : '',
    fName: formtype === 'editform' ? customerById?.fName || '' : '',
    lName: formtype === 'editform' ? customerById?.lName || '' : '',
    email: formtype === 'editform' ? customerById?.email || '' : '',
    contactMobile1: formtype === 'editform' ? customerById?.contactMobile1 || '' : '',
    contactMobile2: formtype === 'editform' ? customerById?.contactMobile2 || '' : '',
    // address: formtype === 'editform' ? customerById?.address || '' : '',
    // country: formtype === 'editform' ? country?.rows?.name || '' : '',
    remarks: formtype === 'editform' ? customerById?.remarks || '' : '',
    enqSource: formtype === 'editform' ? customerById?.enqSource || '' : ''
  };

  const validationSchema = Yup.object({
    custType: Yup.string().required('Customer Type is Required'),
    fName: Yup.string().required('First Name is Required'),
    lName: Yup.string().required('Last Name is Required'),
    email: Yup.string().required('Email is Required'),
    contactMobile1: Yup.string().required('Mobile is Required'),
    contactMobile2: Yup.string().required('WhatsApp is Required'),
    // country:Yup.string().required('WhatsApp is Required'),
    // address: Yup.string().required('Address is Required'),
    remarks: Yup.string().required('Remarks is Required')
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values, '=======updatedValues========');
    if (formtype && formtype === 'addform') {
      // Add selected country to the form data before dispatching
      values.address = {
        ...values.address,
        // country: selectedCountry
      };
      dispatch(addCustomer(values));
      // dispatch(getCountry());
    } else {
      values.id = data.id;
      dispatch(updateCustomer(values));
    }
    handleClose(formtype);
    resetForm();
  };

  const [currentTab, setCurrentTab] = useState(0);

  // const handleChangeCountry = (event) => {
  //   setSelectedCountry(event.target.value);
  // };
  return (
    <Box onClose={handleClose}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
        <Form>
          <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
            <Tab label="Basic Details" />
            <Tab label="Additional Details" />
            <Tab label="General Details" />
          </Tabs>
          <TabPanel value={currentTab} index={0}>
            {/* Basic Details Tab */}
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={4}>
                <FormLabel>Custmer Type</FormLabel>
                <Textfield name="custType" id="custType" placeholder="Custmer Type" component={Textfield} />
                <ErrorMessage name="custType" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid> */}
              <Grid item xs={12} sm={4}>
                <FormLabel>First Name</FormLabel>
                <Textfield name="fName" id="fName" placeholder="First Name" component={Textfield} />
                <ErrorMessage name="fName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Last Name</FormLabel>
                <Textfield name="lName" id="lName" placeholder="Last Name " component={Textfield} />
                <ErrorMessage name="lName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Email</FormLabel>
                <Textfield name="email" id="email" placeholder="Email" component={Textfield} />
                <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Mobile</FormLabel>
                <Textfield name="contactMobile1" id="contactMobile1" placeholder="Mobile" component={Textfield} />
                <ErrorMessage name="contactMobile1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
              {/* <Grid item xs={12} sm={4}>
                <FormLabel>WhatsApp</FormLabel>
                <Textfield name="contactMobile2" id="contactMobile2" placeholder="WhatsApp" component={Textfield} />
                <ErrorMessage name="contactMobile2" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid> */}
            </Grid>
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
          
            {/* <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="country">Country</InputLabel>
                <Select
                  labelId="country"
                  id="address.country"
                  value={selectedCountry}
                  onChange={handleChangeCountry}
                >
                  <MenuItem value="">Select Country</MenuItem>
                  {country.rows &&
                    Array.isArray(country.rows) &&
                    country.rows.map((item) => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid> */}
            {/* <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormLabel>Country</FormLabel>
                <Textfield name="address.country" id="address.country" placeholder="country" component={Textfield} />
                <ErrorMessage name="address.country" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
     
            </Grid> */}
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <FormLabel>State</FormLabel>
                <Textfield name="address.state" id="address.state" placeholder="State" component={Textfield} />
                <ErrorMessage name="address.state" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid> */}
            </Grid>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <FormLabel>District</FormLabel>
                <Textfield name="address.district" id="address.district" placeholder="district" component={Textfield} />
                <ErrorMessage name="address.district" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid> */}
            </Grid>
          </TabPanel>
          <TabPanel value={currentTab} index={2}>
            {/* Remarks Tab */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormLabel>Remarks</FormLabel>
                <Textfield name="remarks" id="remarks" placeholder="Remarks" component={Textfield} />
                <ErrorMessage name="remarks" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <FormLabel>enqSource</FormLabel>
                <Textfield name="enqSource" id="enqSource" placeholder="enqSource" component={Textfield} />
                <ErrorMessage name="enqSource" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid> */}
            </Grid>
          </TabPanel>
          <Button type="submit" sx={style.changeBtn}>
            Save
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return <div hidden={value !== index}>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</div>;
}

export default AddEditModal;
