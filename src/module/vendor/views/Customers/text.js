
import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Textfield from 'ui-component/common/TextField';
import FormLabel from '@mui/material/FormLabel';
import '../../../../assets/style/style.css';
import { Button, Tab, Tabs } from '@mui/material';
import commonStyles from 'assets/style/Style';
import { addCustomer, updateCustomer, getCustomerById } from 'module/vendor/container/customerContainer/slice';

//country for masterData
// import { getCountry } from 'module/admin/container/countryContainer/slice';

//district MasterData
// import { getDistrict } from 'module/vendor/container/districtContainer/slice';

const AddEditModal = ({ formtype, data, handleClose }) => {
  const theme = useTheme();
  const style = commonStyles(theme);
  const dispatch = useDispatch();
  const customerById = useSelector((state) => state.data.customers.customerByIdData);

//masterData country 
const countryMasters = useSelector((state)=> state.country.country.countryData)
console.log("=============countryMasters=========",countryMasters);

//masterData for District
const districtMasters = useSelector((state)=> state.data.district.districtData)
console.log("=============districtMasters=========",districtMasters);


  useEffect(() =>{
    dispatch(getCountry());
    dispatch(getDistrict())
  },[dispatch])

  useEffect(() => {
    if (data && data.id) {
      dispatch(getCustomerById(data.id));
    }
  }, [dispatch, data]);

  const initialValues = {
    custType: formtype === 'editform' ? customerById?.custType || '' : '',
    fName: formtype === 'editform' ? customerById?.fName || '' : '',
    lName: formtype === 'editform' ? customerById?.lName || '' : '',
    email: formtype === 'editform' ? customerById?.email || '' : '',
    contactMobile1: formtype === 'editform' ? customerById?.contactMobile1 || '' : '',
    contactMobile2: formtype === 'editform' ? customerById?.contactMobile2 || '' : '',
    addr1: formtype === 'editform' ? customerById?.address?.addr1 || '' : '',
  };
  

  const validationSchema = Yup.object({
    custType: Yup.string().required('Customer Type is Required'),
    fName: Yup.string().required('First Name is Required'),
    lName: Yup.string().required('Last Name is Required'),
    email: Yup.string().required('Email is Required'),
    contactMobile1: Yup.string().required('Mobile is Required'),
    // addr1: Yup.string().required('addr1 is Required'),
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

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box onClose={handleClose}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
        <Form>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="form tabs">
            <Tab label="Personal Details" />
            <Tab label="Additional Details" />
            <Tab label="General Details" />
          </Tabs>
          <Grid container spacing={2}>
            {tabValue === 0 && (
              <>
                <Grid item xs={12} sm={6}>
                <FormLabel>Customer Type</FormLabel>
                  <Textfield name="custType" id="custType" placeholder="Customer Type" component={Textfield} />
                  <ErrorMessage name="custType" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormLabel>Email</FormLabel>
                  <Textfield name="email" id="email" placeholder="Email" component={Textfield} />
                  <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormLabel>First Name</FormLabel>
                  <Textfield name="fName" id="fName" placeholder="First Name" component={Textfield} />
                  <ErrorMessage name="fName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormLabel>Last Name</FormLabel>
                  <Textfield name="lName" id="lName" placeholder="Last Name" component={Textfield} />
                  <ErrorMessage name="lName" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
                </Grid>
                
              </>
            )}
            {tabValue === 1 && (
              <>
                <Grid item xs={12} sm={6}>
                <FormLabel>Email</FormLabel>
                  <Textfield name="email" id="email" placeholder="Email" component={Textfield} />
                  <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormLabel>Mobile</FormLabel>
                  <Textfield name="contactMobile1" id="contactMobile1" placeholder="Mobile" component={Textfield} />
                  <ErrorMessage name="contactMobile1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormLabel>WhatsApp</FormLabel>
                  <Textfield name="contactMobile2" id="contactMobile2" placeholder="WhatsApp" component={Textfield} />
                  <ErrorMessage name="contactMobile2" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormLabel>Address</FormLabel>
                <Textfield name="address.addr1" id="address.addr1" placeholder="Address" component={Textfield} />
                <ErrorMessage name="address.addr1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
              </>
            )}
            {/* Add your fields for additional information in tabValue === 2 */}
            {tabValue === 2 && (
              <>
                <Grid item xs={12} sm={6}>
                <FormLabel>Remarks</FormLabel>
                  <Textfield name="remarks" id="remarks" placeholder="Remarks" component={Textfield} />
                  <ErrorMessage name="remarks" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
                </Grid>
                
              </>
            )}
          </Grid>
          <Button type="submit" sx={style.changeBtn}>Save</Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default AddEditModal;
