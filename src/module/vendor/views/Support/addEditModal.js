import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Textfield from 'ui-component/common/TextField';
import { Button, MenuItem, TextareaAutosize, Input } from '@mui/material';
import commonStyles from 'assets/style/Style';
import { getSupportType } from 'module/vendor/container/supportTypeContainer/slice';

import { addSupport, updateSupport, getSupportById } from 'module/vendor/container/supportContainer/slice';

const AddEditModal = ({ formtype, data, handleClose }) => {
  const supportTypeGet = useSelector((state) => state.supportType.supportType.supportTypeData);

  console.log('+======data====', supportTypeGet);
  const theme = useTheme();
  const style = commonStyles(theme);
  const dispatch = useDispatch();
  const supportById = useSelector((state) => state.support.support.supportByIdData);

  const [selectedSupportType, setSelectedSupportType] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (formtype === 'editform' && data && data.id) {
      dispatch(getSupportById(data.id));
    }
  }, [dispatch, formtype, data]);

  useEffect(() => {
    dispatch(getSupportType());
  }, [dispatch]);

  useEffect(() => {
    if (formtype === 'editform' && supportById) {
      setSelectedSupportType(supportById.sprtType || '');
      setSelectedPriority(supportById.priority || '');
      setSelectedImage(supportById.imgUrls || []);
    }
  }, [formtype, supportById]);

  const initialValues = {
    sprtType: formtype === 'editform' ? supportById?.sprtType || '' : '',
    priority: formtype === 'editform' ? supportById?.priority || '' : '',
    desc: formtype === 'editform' ? supportById?.desc || '' : '',
    imgUrls: formtype === 'editform' ? supportById?.imgUrls || '' : ''
  };

  const validationSchema = Yup.object({
    sprtType: Yup.string().required('SupportType is Required'),
    priority: Yup.string().required('Priority is Required'),
    desc: Yup.string().required('Description is Required'),
    imgUrls: Yup.string().required('Image is Required')
  });

  const onSubmit = (values, { resetForm }) => {
    if (formtype && formtype === 'addform') {
      dispatch(addSupport(values));
    } else {
      values.id = data.id;
      dispatch(updateSupport(values));
    }
    handleClose(formtype);
    resetForm(); // Make sure resetForm is defined and passed as an argument
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    } else {
      setSelectedImage(null);
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
              <Textfield
                select
                name="sprtType"
                id="sprtType"
                placeholder="SupportType"
                value={selectedSupportType}
                onChange={(e) => setSelectedSupportType(e.target.value)}
              >
                {/* {
                  supportTypeGet.map((item)=>(
                    <MenuItem> </MenuItem>
                  ))
                } */}
                { supportTypeGet.rows.map((option) => (
                  <MenuItem key={option.id}  >
                    {option.supportType}
                  </MenuItem>
                ))}
              </Textfield>

              <ErrorMessage name="sprtType" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel>Priority</FormLabel>
              <Textfield
                select
                name="priority"
                id="priority"
                placeholder="Priority"
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
              >
                {['low', 'medium', 'high', 'urgent'].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Textfield>
              <ErrorMessage name="priority" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormLabel>Description</FormLabel>
              <TextareaAutosize
                name="desc"
                id="desc"
                value={initialValues.desc} // Use initialValues instead of values
                placeholder="Description"
                style={{ width: '100%', minHeight: 100, resize: 'vertical' }}
              />
              <ErrorMessage name="desc" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormLabel>Image</FormLabel>
              <Input type="file" name="imgUrl" id="imgUrl" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
              <label htmlFor="imgUrl">
                <Button variant="outlined" component="span">
                  Choose Image
                </Button>
              </label>
              {selectedImage && (
                <div>
                  <img src={selectedImage} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }} />
                </div>
              )}
              <ErrorMessage name="imgUrl" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
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

// import React, { useEffect, useState } from 'react';
// import { Formik, Form, ErrorMessage } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import * as Yup from 'yup';
// import FormLabel from '@mui/material/FormLabel';
// import Box from '@mui/system/Box';
// import Grid from '@mui/material/Grid';
// import { useTheme } from '@mui/material/styles';
// import Textfield from 'ui-component/common/TextField';
// import { Button, MenuItem } from '@mui/material';
// import commonStyles from 'assets/style/Style';
// import { addSupport, updateSupport, getSupportById } from 'module/vendor/container/supportContainer/slice';

// const AddEditModal = ({ formtype, data, handleClose }) => {
//   const theme = useTheme();
//   const style = commonStyles(theme);
//   const dispatch = useDispatch();
//   const supportById = useSelector((state) => state.support.support.supportByIdData);
//   console.log('====support===', supportById);
//   const [selectedPriority, setSelectedPriority] = useState('');

//   useEffect(() => {
//     if (data && data.id) {
//       dispatch(getSupportById(data.id));
//     }
//   }, [dispatch, data]);

//   const initialValues = {
//     sprtType: formtype === 'editform' ? supportById?.sprtType || '' : '',
//     priority: formtype === 'editform' ? supportById?.priority || '' : '',
//     imgUrls: formtype === 'editform' ? supportById?.imgUrls || '' : '',
//     desc: formtype === 'editform' ? supportById?.desc || '' : ''
//   };

//   const validationSchema = Yup.object({
//     sprtType: Yup.string().required('SupportType is Required'),
//     priority: Yup.string().required('Priority is Required'),
//     imgUrls: Yup.string().required('Image URLs is Required'),
//     desc: Yup.string().required('Description is Required')
//   });

//   const onSubmit = (values, { resetForm }) => {
//     if (formtype && formtype === 'addform') {
//       dispatch(addSupport(values));
//     } else {
//       values.id = data.id;
//       dispatch(updateSupport(values));
//     }
//     handleClose(formtype);
//     resetForm();
//   };

//   return (
//     <Box onClose={handleClose}>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
//         <Form>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <FormLabel>Priority</FormLabel>
//               <Textfield
//                 select
//                 name="priority"
//                 id="priority"
//                 placeholder="Priority"
//                 value={selectedPriority}
//                 onChange={(e) => setSelectedPriority(e.target.value)}
//               >
//                 {['low', 'medium', 'high', 'urgent'].map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </Textfield>
//               <ErrorMessage name="priority" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormLabel>SupportType</FormLabel>
//               <Textfield select name="sprtType" id="sprtType" placeholder="SupportType">
//                 {['Technical', 'option1', 'option2', 'option3'].map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </Textfield>
//               <ErrorMessage name="sprtType" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormLabel>Image URLs</FormLabel>
//               <input type="file" name="imgUrls" id="imgUrls" onChange={(e) => console.log(e.target.files)} />
//               <ErrorMessage name="imgUrls" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormLabel>Description</FormLabel>
//               <Textfield name="desc" id="desc" placeholder="Description" />
//               <ErrorMessage name="desc" component="div" style={{ color: '#f54d4f', fontSize: 12 }} />
//             </Grid>
//           </Grid>
//           <Button type="submit" sx={style.changeBtn}>
//             Save
//           </Button>
//         </Form>
//       </Formik>
//     </Box>
//   );
// };

// export default AddEditModal;
