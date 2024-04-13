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
// import { addSupportType, updateSupportType, getSupportTypeById} from 'module/admin/container/supportTypeContainer/slice';

// const AddEditModal = ({ formtype, data, handleClose }) => {
//      const theme = useTheme();
//      const style = commonStyles(theme);
//      const dispatch = useDispatch();
//   const supportTypeById = useSelector((state) => state.data.supportType.supportTypeByIdData);

//   useEffect(() => {
//     if (data && data.id) {
//       dispatch(getSupportTypeById(data.id));
//     }
//   }, [dispatch, data]);

//   console.log('==================datacheck==================', data);

//   const initialValues = {
//     supportType: formtype === 'editform' ?  supportTypeById?.supportType || '' : '',
//     desc: formtype === 'editform' ?  supportTypeById?.desc || '' : '',
//    isActive : formtype === 'editform' ?  supportTypeById?.isActive || '' : '',
    

//   };

//   const validationSchema = Yup.object({
//     supportType: Yup.string().required('SupportType is Required'),
//     desc: Yup.string().required('Description is Required'),
//     // Include validation for isActive only in editform
//     ...(formtype === 'editform' && { isActive: Yup.string().required('isActive is Required') }),
//   });

//   const onSubmit = (values, { resetForm }) => {

//     console.log(values, '=======updatedValues========');
//     if (formtype && formtype === 'addform') {
//       dispatch(addSupportType(values));
 
//     } else {
    
//       values.id = data.id;
    

//       dispatch(updateSupportType(values));
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
//             <FormLabel>SupportType</FormLabel>
//               <Textfield name="supportType" id="supportType" placeholder="SupportType" component={Textfield} />
//               <ErrorMessage name="supportType" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <FormLabel>Description</FormLabel>
//               <Textfield name="desc" id="desc" placeholder="Description " component={Textfield} />
//               <ErrorMessage name="desc" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>
//             {formtype === 'editform' && ( // Render isActive field only for editform
//               <Grid item xs={12} sm={6}>
//                 <FormLabel>IsActive</FormLabel>
//                 <Textfield name="isActive" id="isActive" placeholder="IsActive" component={Textfield} />
//                 <ErrorMessage name="isActive" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//               </Grid>
//             )}
             
           
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

import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Textfield from 'ui-component/common/TextField';
import { Button, FormControlLabel, Switch } from '@mui/material';
import commonStyles from 'assets/style/Style';
 
import { addSupportType, updateSupportType, getSupportTypeById,getSupportType } from 'module/admin/container/supportTypeContainer/slice';

const AddEditModal = ({ formtype, data, handleClose }) => {
  const theme = useTheme();
  const style = commonStyles(theme);
  const dispatch = useDispatch();
  const supportTypeById = useSelector((state) => state.adminReducer.supportType.supportTypeByIdData);
  // const updateSuccess = useSelector((state) => state.updateSuccess); // Assuming this is the flag set in the redux store

  useEffect(() => {
    if (data && data.id) {
      dispatch(getSupportTypeById(data.id));
    }
  }, [dispatch, data]);

  console.log('==================datacheck==================', data);

  const initialValues = {
    supportType: formtype === 'editform' ? supportTypeById?.supportType || '' : '',
    desc: formtype === 'editform' ? supportTypeById?.desc || '' : '',
    isActive: formtype === 'editform' ? supportTypeById?.isActive || '' : '',
  };

  const validationSchema = Yup.object({
    supportType: Yup.string().required('SupportType is Required'),
    desc: Yup.string().required('Description is Required'),
    // Include validation for isActive only in editform
    ...(formtype === 'editform' && { isActive: Yup.string().required('isActive is Required') }),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values, '=======updatedValues========');
  
    // Check if the values are different from the initial values
    const isChanged = Object.keys(initialValues).some(key => initialValues[key] !== values[key]);
  
    if (isChanged) {
      if (formtype && formtype === 'addform') {
        dispatch(addSupportType(values));
      } else {
        values.id = data.id;
        dispatch(updateSupportType(values));
        dispatch(getSupportType())
      }
      handleClose(formtype);
      resetForm();
      // Show toast message only if changes are made
      toast.success('Edited supporttype successful', { autoClose: 3000 });
    } else {
      // If no changes were made, simply close the modal
      handleClose(formtype);
      resetForm();
    }
  };
  

  return (
    <Box onClose={handleClose}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
        <Form>
          <Grid container spacing={2}></Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormLabel>SupportType</FormLabel>
              <Textfield name="supportType" id="supportType" placeholder="SupportType" component={Textfield} />
              <ErrorMessage name="supportType" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel>Description</FormLabel>
              <Textfield name="desc" id="desc" placeholder="Description" component={Textfield} />
              <ErrorMessage name="desc" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            {formtype === 'editform' && (
              <Grid item xs={12} sm={6}>
                <FormControlLabel control={<Switch name="isActive" />} label="Active" labelPlacement="start" />
              </Grid>
            )}
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
