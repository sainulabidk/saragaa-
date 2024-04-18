// AddEditModal.js

import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { Button, Tab, Tabs } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Textfield from 'ui-component/common/TextField';
import { addCustomer, updateCustomer, getCustomerById, getCustomer } from 'module/vendor/container/customerContainer/slice';
import { getCountry } from 'module/admin/container/countryContainer/slice';
import { getEnqSource } from 'module/admin/container/enqSourceContainer/slice';
import { getState } from 'module/admin/container/stateContainer/slice';
import { getEnqMode } from 'module/admin/container/enqModeContainer/slice';
import commonStyles from 'assets/style/Style';
import 'assets/style/style.css';

const AddEditModal = ({ formtype, data, handleClose }) => {
  const dispatch = useDispatch();
  const customerByIdData = useSelector((state) => state.data.customers.customerByIdData);
  const CountryDetails = useSelector((state) => state.country.country.countryData);
  const stateDetails = useSelector((state) => state.adminReducer.state.stateData);
  const enqModDetails = useSelector((state) => state.adminReducer.enqmode.enqModeData);

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getEnqSource());
    dispatch(getState());
    dispatch(getEnqMode());
  }, [dispatch]);

  const [currentTab, setCurrentTab] = useState(0);
  const [custType, setCustType] = useState('');

  const initialValues = {
    custType: formtype === 'editform' ? customerByIdData?.custType || '' : '',
    fName: formtype === 'editform' ? customerByIdData?.fName || '' : '',
    lName: formtype === 'editform' ? customerByIdData?.lName || '' : '',
    email: formtype === 'editform' ? customerByIdData?.email || '' : '',
    contactMobile1: formtype === 'editform' ? customerByIdData?.contactMobile1 || '' : '',
    contactMobile2: formtype === 'editform' ? customerByIdData?.contactMobile2 || '' : '',
    address: {
      region: formtype === 'editform' ? customerByIdData?.address?.region || '' : '',
      city: formtype === 'editform' ? customerByIdData?.address?.city || '' : '',
      addr1: formtype === 'editform' ? customerByIdData?.address?.addr1 || '' : '',
      addr2: formtype === 'editform' ? customerByIdData?.address?.addr2 || '' : '',
    },
    remarks: formtype === 'editform' ? customerByIdData?.remarks || '' : '',
  };

  const validationSchema = Yup.object({
    custType: Yup.string().required('Customer Type is Required'),
    fName: Yup.string().required('First Name is Required'),
    lName: Yup.string().required('Last Name is Required'),
    email: Yup.string().required('Email is Required'),
    contactMobile1: Yup.string().required('Mobile is Required'),
    contactMobile2: Yup.string().required('WhatsApp is Required'),
    address: Yup.object().shape({
      region: Yup.string().required('Region is Required'),
      city: Yup.string().required('City is Required'),
      addr1: Yup.string(),
      addr2: Yup.string(),
    }),
    remarks: Yup.string().required('Remarks is Required'),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      console.log('Submitting form with values:', values);
      if (formtype === 'addform') {
        await dispatch(addCustomer(values));
        await dispatch(getCustomer());
      } else {
        values.id = data.id;
        await dispatch(updateCustomer(values));
        await dispatch(getCustomer());
      }
      handleClose(formtype);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error if necessary
    }
  };

  return (
    <Box onClose={handleClose}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
        <Form>
          <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
            <Tab label="Basic Details" />
            <Tab label="Additional Details" />
            <Tab label="General Details" />
          </Tabs>
          <TabPanel value={currentTab} index={0} selectedCustType={custType} onCustTypeChange={setCustType}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <FormLabel id="custType-label">Custmer Type</FormLabel>
                <Select
                  labelId="custType-label"
                  name="custType"
                  id="custType"
                  value={custType}
                  onChange={(event) => setCustType(event.target.value)}
                  fullWidth
                >
                  <MenuItem value=""> <em>Select Custmer Type</em></MenuItem>
                  <MenuItem value="Organization">Organization</MenuItem>
                  <MenuItem value="Individual">Individual</MenuItem>
                  <MenuItem value="Agent">Agent</MenuItem>
                </Select>
              </Grid>
              {/* Other form fields */}
            </Grid>
          </TabPanel>
          {/* Other TabPanel components for other tabs */}
          <Button type="submit">Save</Button>
        </Form>
      </Formik>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, selectedCustType, onCustTypeChange } = props;

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
