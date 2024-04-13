import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { Button, Input, MenuItem, TextField } from '@mui/material';
import commonStyles from 'assets/style/Style';
import { getSupportType } from 'module/vendor/container/supportTypeContainer/slice';
import { addSupport, updateSupport, getSupportById } from 'module/vendor/container/supportContainer/slice';

const AddEditModal = ({ formtype, data, handleClose }) => {
  const supportTypeGet = useSelector((state) => state.data.supportType.supportTypeData);
  const theme = useTheme();
  const style = commonStyles(theme);
  const dispatch = useDispatch();
  const supportById = useSelector((state) => state.data.support.supportByIdData);

  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (formtype === 'editform' && data && data.id) {
      dispatch(getSupportById(data.id));
    }
    dispatch(getSupportType());
  }, [dispatch, formtype, data]);

  useEffect(() => {
    if (formtype === 'editform' && supportById && supportById.sprtType) {
      setSelectedImage(supportById.imgUrls || '');
    }
  }, [formtype, supportById]);

  const initialValues = {
    sprtType: formtype === 'editform' ? supportById?.sprtType || '' : '',
    priority: formtype === 'editform' ? supportById?.priority || '' : '',
    desc: formtype === 'editform' ? supportById?.desc || '' : '',
    imgUrls: formtype === 'editform' ? supportById?.imgUrls || '' : ''
  };

  const validationSchema = Yup.object({
    sprtType: Yup.string().required('Support is required'),
    priority: Yup.string().required('Priority is Required'),
    desc: Yup.string().required('Description is Required'),
    // imgUrls: formtype === 'editform' ? Yup.string().notRequired() : Yup.string().required('Image is Required')
  });

  const onSubmit = async (values, { resetForm }) => {
    if (formtype && formtype === 'addform') {
      await dispatch(addSupport(values));
    } else {
      values.id = data.id;
      await dispatch(updateSupport(values));
    }
    handleClose(formtype);
    resetForm(); 
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    } else {
      setSelectedImage('');
    }
  };

  return (
    <Box onClose={handleClose}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormLabel>SupportType</FormLabel>
                <TextField
                  select
                  name="sprtType"
                  id="sprtType"
                  placeholder="Select Support Type"
                  value={values.sprtType}
                  onChange={(e) => {
                    setFieldValue('sprtType', e.target.value);
                  }}
                  fullWidth
                >
                  {supportTypeGet &&
                    supportTypeGet.rows &&
                    supportTypeGet.rows.map((option) => (
                      <MenuItem key={option.id} value={option.id}> 
                        {option.supportType}
                      </MenuItem>
                    ))}
                </TextField>
                <ErrorMessage name="sprtType" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel>Priority</FormLabel>
                <TextField
                  select
                  name="priority"
                  id="priority"
                  placeholder="Select Priority Type"
                  value={values.priority}
                  onChange={(e) => setFieldValue('priority', e.target.value)}
                  fullWidth
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                  <MenuItem value="urgent">Urgent</MenuItem>
                </TextField>
                <ErrorMessage name="priority" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid> 
              <Grid item xs={12} sm={6}>
                <FormLabel>Description</FormLabel>
                <TextField
                  name="desc"
                  id="desc"
                  value={values.desc} 
                  onChange={handleChange} 
                  placeholder="Description"
                  multiline
                  rows={4} 
                  fullWidth
                  variant="outlined"
                />
                <ErrorMessage name="desc" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid> 
              <Grid item xs={12} sm={6}>
                <FormLabel>Image</FormLabel>
                <Input type="file" name="imgUrls" id="imgUrls" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                <label htmlFor="imgUrls">
                  <Button variant="outlined" component="span">
                    Choose Image
                  </Button>
                </label>
                {selectedImage && (
                  <div>
                    <img src={selectedImage} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }} />
                  </div>
                )}
                <ErrorMessage name="imgUrls" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
              </Grid> 
            </Grid>
            <Button type="submit" sx={style.changeBtn}>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddEditModal;