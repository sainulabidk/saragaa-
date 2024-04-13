import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage,  } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Textfield from 'ui-component/common/TextField';
import { Button, MenuItem, Select } from '@mui/material';
import commonStyles from 'assets/style/Style';
 
import { addUser, updateUser, getUserById } from 'module/vendor/container/userContainer/slice';
import { useState } from 'react';

console.log('========add user===1', addUser);
console.log('========add user===2', getUserById);
const AddEditModal = ({ formtype, data, handleClose }) => {
  const theme = useTheme();
  const style = commonStyles(theme);
  const dispatch = useDispatch();
  const userById = useSelector((state) => state.data.user.userByIdData);
  const [role, setRole] = useState('');
  useEffect(() => {
    if (data && data.id) {
      dispatch(getUserById(data.id));
    }
  }, [dispatch, data]);


  useEffect(() => {
    if (userById && userById.role) {
      setRole(userById.role);
    }
  }, [userById]);

  const initialValues = {
    fName: formtype === 'editform' ? userById?.fName || '' : '',
    lName: formtype === 'editform' ? userById?.lName || '' : '',
    email: formtype === 'editform' ? userById?.email || '' : '',
    mobileNo: formtype === 'editform' ? userById?.mobileNo || '' : '',
    password: formtype === 'editform' ? userById?.password || '' : '',
    role: formtype === 'editform' ? userById?.role || '' : ''
  };

  const validationSchema = Yup.object({
    fName: Yup.string().required('First Name is Required'),
    lName: Yup.string().required('Last Name is Required'),
    email: Yup.string().required('Email is Required'),
    mobileNo: Yup.string().required('Mobile is Required'),
    password: Yup.string().required('Password is Required'),
    // role: Yup.string().required('Role is Required')
  });

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
 
  const onSubmit = (values, { resetForm }) => {
    console.log(values, '=======updatedValues========');
    if (formtype === 'addform') {
      dispatch(addUser(values));
    } else {
      dispatch(updateUser({ id: data.id, ...values }));
    }

    handleClose();
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
            <Grid item xs={12} sm={6}>
              <FormLabel>Email</FormLabel>
              <Textfield name="email" id="email" placeholder="Email" component={Textfield} />
              <ErrorMessage name="email" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel>Mobile</FormLabel>
              <Textfield name="mobileNo" id="mobileNo" placeholder="Mobile" component={Textfield} />
              <ErrorMessage name="mobileNo" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel>Role</FormLabel>
              <Select
                name="role"
                placeholder="Role"
                value={role}
                onChange={handleRoleChange}
                sx={{ width: '100%' }}
              >
                <MenuItem value="vendorAccount">Accountant</MenuItem>
                <MenuItem value="vendorManager">Manager</MenuItem>
                <MenuItem value="vendorOperator">Operator</MenuItem>
              </Select>
              <ErrorMessage name="role" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
          


            <Grid item xs={12} sm={6}>
              <FormLabel>Password</FormLabel>
              <Textfield name="password" id="password" placeholder="Password" component={Textfield} />
              <ErrorMessage name="password" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
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

export default AddEditModal;