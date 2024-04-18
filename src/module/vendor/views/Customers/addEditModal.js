import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Textfield from 'ui-component/common/TextField';
import { Button, Tab, Tabs } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { useFormik } from 'formik';
import commonStyles from 'assets/style/Style';
import 'assets/style/style.css';

import { addCustomer, updateCustomer, getCustomerById, getCustomer } from 'module/vendor/container/customerContainer/slice';

import { getCountry } from 'module/admin/container/countryContainer/slice';

import { getEnqSource } from 'module/admin/container/enqSourceContainer/slice';

import { getState } from 'module/admin/container/stateContainer/slice';

import { getEnqMode } from 'module/admin/container/enqModeContainer/slice';

const AddEditModal = ({ formtype, data, handleClose }) => {
  const theme = useTheme();
  const style = commonStyles(theme);
  const dispatch = useDispatch();
  const customerByIdData = useSelector((state) => state.data.customers.customerByIdData);

  const CountryDetails = useSelector((state) => state.country.country.countryData);
  console.log('==================ARSHADCOUNTRYY==================', CountryDetails);

  const enqSourceDetails = useSelector((state) => state.adminReducer.enqsource.enqsourceData)
  console.log('==================ARSHADENQSSOURCE==================', enqSourceDetails);

  const stateDetails = useSelector((state) => state.adminReducer.state.stateData)
  console.log('==================ARSHADSSTTAATTEE==================', stateDetails);

  const enqModDetails = useSelector((state) => state.adminReducer.enqmode.enqModeData);
  console.log('==================ARSHADSSTTAATTEE==================', enqModDetails);

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getEnqSource());
    dispatch(getState());
    dispatch(getEnqMode())
  }, [dispatch]);

  const [selectedCountry, setSelectedCountry] = useState('INDIA');
  const [selectedState, setSelectedState] = useState('Kerala');

  // useEffect(() => {
  // }, [dispatch, selectedCountry]);

  useEffect(() => {
    if (formtype === 'editform') {
      setSelectedCountry(customerByIdData?.address?.country || '');
    }
  }, [formtype, customerByIdData]);


  useEffect(() => {
    if (data && data.id) {
      dispatch(getCustomerById(data.id));
      // dispatch(getCountryById(data.id))
    }
  }, [dispatch, data]);

  console.log('==================datacheck==================', data);

  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value)
    console.log('CCCCCCCCCCCCCCCC================',event.target.value);
  };
  const handleChangeState = (event) => {
    setSelectedState(event.target.value)
    console.log('CCCCCCCCCCCCCCCC================',event.target.value);
  };


  const initialValues = {
    custType: formtype === 'editform' ? customerByIdData?.custType || '' : '',
    fName: formtype === 'editform' ? customerByIdData?.fName || '' : '',
    lName: formtype === 'editform' ? customerByIdData?.lName || '' : '',
    email: formtype === 'editform' ? customerByIdData?.email || '' : '',
    contactMobile1: formtype === 'editform' ? customerByIdData?.contactMobile1 || '' : '',
    contactMobile2: formtype === 'editform' ? customerByIdData?.contactMobile2 || '' : '',
    address: {
      // country: formtype === 'editform' ? customerByIdData?.address?.country || '' : '',    
      // region: formtype === 'editform' ? customerByIdData?.address?.region || '' : '',
      city: formtype === 'editform' ? customerByIdData?.address?.city || '' : '',
      addr1: formtype === 'editform' ? customerByIdData?.address?.addr1 || '' : '',
      addr2: formtype === 'editform' ? customerByIdData?.address?.addr2 || '' : '',
      postalCode: formtype === 'editform' ? customerByIdData?.address?.postalCode || '' : '',

    },
    remarks: formtype === 'editform' ? customerByIdData?.remarks || '' : '',
  };

  const validationSchema = Yup.object({
    custType: Yup.string(),
    fName: Yup.string().required('First Name is Required'),
    lName: Yup.string().required('Last Name is Required'),
    email: Yup.string(),
    contactMobile1: Yup.string().required('Mobile is Required'),
    contactMobile2: Yup.string(),
    address: Yup.object().shape({
      country: Yup.string(),
      // region: Yup.string(),
      city: Yup.string(),
      addr1: Yup.string(),
      addr2: Yup.string(),
      postalCode: Yup.string(),
    }),
    remarks: Yup.string(),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      console.log('Submitting form with values:', values);
      if (formtype && formtype === 'addform') {
        // values.address.country = selectedCountry;
        await dispatch(addCustomer(values));
        await dispatch(getCustomer());
      } else {
        values.id = data.id;
        await dispatch(updateCustomer(values));
        await dispatch(getCustomer());
      }
      // Get the country data after form submission
      await dispatch(getCountry());
      handleClose(formtype);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error if necessary
    }
  };

  const [currentTab, setCurrentTab] = useState(0);

  

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
              <Grid item xs={12} sm={4}>
                <FormLabel>Custmer Type</FormLabel>
                <Textfield name="custType" id="custType" placeholder="Custmer Type" component={Textfield} />
                <ErrorMessage name="custType" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
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
                <FormLabel>Mobile(Primary)</FormLabel>
                <Textfield name="contactMobile1" id="contactMobile1" placeholder="Mobile" component={Textfield} />
                <ErrorMessage name="contactMobile1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Mobile(Scondary)</FormLabel>
                <Textfield name="contactMobile2" id="contactMobile2" placeholder="WhatsApp" component={Textfield} />
                <ErrorMessage name="contactMobile2" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={currentTab} index={1}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="address.country">Country</InputLabel>
            <Select
              labelId="country"
              id="address.country"
              value={selectedCountry}  
              onChange={handleChangeCountry}
            >
              <MenuItem value="">Select Country</MenuItem>
              {CountryDetails.rows &&
                Array.isArray(CountryDetails.rows) &&
                CountryDetails.rows.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid> */}

              {/* cccooouuunnttyy */}
              <Grid item xs={12} sm={4}>
                <FormLabel>Country</FormLabel>
                <Select
                  name="address.country"
                  id="address.country"
                  placeholder="Select Country"
                  value={selectedCountry}
                  onChange={handleChangeCountry}
                  fullWidth
                >
                  {/* <MenuItem value="">Select Country</MenuItem> */}
                  {CountryDetails.rows &&
                    Array.isArray(CountryDetails.rows) &&
                    CountryDetails.rows.map((item) => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
                <ErrorMessage name="address.country" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>


              {/* //state  */}
              <Grid item xs={12} sm={4}>
                <FormLabel>State</FormLabel>
                <Select
                  name="address.state"
                  id="address.state"
                  placeholder="Select State"
                  value={selectedState}
                  onChange={handleChangeState}
                  fullWidth
                >
                  <MenuItem value="">Select State</MenuItem>
                  {CountryDetails.rows &&
                    Array.isArray(stateDetails.rows) &&
                    stateDetails.rows.map((item) => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
                <ErrorMessage name="address.state" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>

              {/* district */}
              <Grid item xs={12} sm={4}>
                <FormLabel>District</FormLabel>
                <Select
                  name="address.state"
                  id="address.state"
                  placeholder="Select District"
                  value={selectedState}
                  onChange={handleChangeState}
                  fullWidth
                >
                  <MenuItem value="">Select District</MenuItem>
                  {CountryDetails.rows &&
                    Array.isArray(stateDetails.rows) &&
                    stateDetails.rows.map((item) => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
                <ErrorMessage name="address.state" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>


              {/* <Grid item xs={12} sm={4}>
                <FormLabel>Region</FormLabel>
                <Textfield name="address.region" id="address.region" placeholder="Region" component={Textfield} />
                <ErrorMessage name="address.region" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid> */}
              <Grid item xs={12} sm={4}>
                <FormLabel>City</FormLabel>
                <Textfield name="address.city" id="address.city" placeholder="City" component={Textfield} />
                <ErrorMessage name="address.city" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormLabel>Address Line1</FormLabel>
                <Textfield name="address.addr1" id="address.addr1" placeholder="AddressLine1" component={Textfield} />
                <ErrorMessage name="address.addr1" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Address Line2</FormLabel>
                <Textfield name="address.addr2" id="address.addr2" placeholder="AddressLine2" component={Textfield} />
                <ErrorMessage name="address.addr2" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Postal Code</FormLabel>
                <Textfield name="address.postalCode" id="address.postalCode" placeholder="Postal Coe" component={Textfield} />
                <ErrorMessage name="address.postalCode" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
            </Grid>


          </TabPanel>
          <TabPanel value={currentTab} index={2}>
            {/* Remarks Tab */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="enqSource">EnquirySource</InputLabel>
                  <Select id="enqSource">
                    {enqSourceDetails.rows && Array.isArray(enqSourceDetails.rows) && enqSourceDetails.rows.map((item) => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* enqmode */}
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="enqSource">EnquiryMode</InputLabel>
                  <Select id="enqSource">
                    {enqModDetails.rows && Array.isArray(enqModDetails.rows) && enqModDetails.rows.map((item) => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/*<Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="district">EnquiryMode</InputLabel>
                  <Select id="district">
                    {districtDetails.rows && Array.isArray(districtDetails.rows) && districtDetails.rows.map((item) => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid> */}

              <Grid item xs={12} sm={6}>
                <FormLabel>Remarks</FormLabel>
                <Textfield name="remarks" id="remarks" placeholder="Remarks" component={Textfield} />
                <ErrorMessage name="remarks" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>

            </Grid>
          </TabPanel>
          <Button type="submit" sx={style.changeBtn}>Save</Button>
        </Form>
      </Formik>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default AddEditModal;