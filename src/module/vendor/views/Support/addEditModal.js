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
    if (formtype === 'editform' && supportById && supportById.imgUrls) {
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
    imgUrls: formtype === 'editform' ? Yup.string().notRequired() : Yup.string().required('Image is Required')
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      if (formtype && formtype === 'addform') {
        await dispatch(addSupport(values));
      } else {
        values.id = data.id;
        await dispatch(updateSupport(values));
      }
      handleClose(formtype);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error display or other actions
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const allowedFormats = ['image/png', 'image/jpeg'];
  
    if (file) {
      // Check if the file format is allowed
      if (!allowedFormats.includes(file.type)) {
        console.error('Unsupported file format. Please upload PNG or JPEG images only.');
        return;
      }
  
      // Check if the file size is within the limit (500kb)
      if (file.size > 500 * 1024) {
        console.error('File size exceeds the limit of 500kb. Please upload a smaller image.');
        return;
      }
  
      // If both format and size are valid, create the image URL
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


// import DataTable from 'react-data-table-component';
// import React, { useState } from 'react';
// import OpenModal from 'ui-component/common/OpenModal';
// import AddEditModal from './addEditModal';
// import '../../../../assets/style/style.css';
// // import TableRows from 'ui-component/Table/TableRows';
// import { IconButton } from '@mui/material';
// import { Visibility, Delete } from '@mui/icons-material';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import CardHead from 'ui-component/common/CardHead';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import DeleteModal from 'ui-component/Modals/DeleteModal';
// import ViewModal from './viewModal';
// import '../../../../assets/style/style.css';

// import { getSupport, deleteSupport } from 'module/vendor/container/supportContainer/slice';

// export default function Index() {
//   const [openModal, setOpenModal] = useState(false);
//   const [modalComponent, setModalComponent] = useState(null);
//   const [modalHeading, setModalHeading] = useState('');
//   const [tableHeading, setTableHeading] = useState('');
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedId, setSelectedId] = useState();
//   const [filteredData, setFilteredData] = useState([]);

//   const modalStyle = { width: '60%' };
//   const dispatch = useDispatch();
//   const supportDetails = useSelector((state) => state.data.support.supportData);

//   console.log('=========suppprt details', supportDetails);
//   useEffect(() => {
//     dispatch(getSupport({}));
//     setTableHeading('SUPPORT TYPE');
//   }, [dispatch]);

//   const handleOpenModal = (whichOpen, item) => {
//     setOpenModal(true);
//     let ComponentToRender;
//     switch (whichOpen) {
//       case 'addform':
//         setModalHeading('Add Support');
//         ComponentToRender = <AddEditModal formtype="addform" data={item} handleClose={handleCloseModal} />;
//         break;
//       case 'editform':
//         setModalHeading('Edit Support');
//         ComponentToRender = <AddEditModal formtype="editform" data={item} handleClose={handleCloseModal} />;
//         break;
//       case 'viewform':
//         setModalHeading('View Support');
//         ComponentToRender = <ViewModal data={item} />;
//         break;
//       default:
//         ComponentToRender = null;
//     }
//     setModalComponent(ComponentToRender);
//   };

//   const handleCloseModal = (formtype) => {
//     setOpenModal(false);
//     setShowDeleteModal(false);
//     if (formtype === 'addform') setPage(1);
//     dispatch(getSupport());
//   };

//   const handleDeleteModal = (item) => {
//     setShowDeleteModal(true);
//     setSelectedId(item.id);
//   };

//   const deleteReferenceConfirm = () => {
//     dispatch(deleteSupport(selectedId));
//     setShowDeleteModal(false);
//     dispatch(getSupport());
//   };

//   const handleSearch = (event) => {
//     const searchValue = event.target.value.toLowerCase();
//     const filteredData = supportDetails.rows.filter((row) => {
//       return (row.support.toLowerCase().includes(searchValue) || row.desc.toLowerCase().includes(searchValue))
//     });
//     setFilteredData(filteredData); // Update the filtered data state
//   };
//   const dataToDisplay = filteredData.length > 0 ? filteredData : supportDetails.rows;

//   const columns = [
//     {
//       name: 'SUPPORT TYPE',
//       selector: (row) => row.sprtType?.supportType || 'N/A'
//     },
//     {
//               name: 'PRIORITY',
//               selector: (row) => row.priority
//             },
//     {
//       name: 'DESCRIPTION',
//       selector: (row) => {
//         if(row.desc.length > 20) {
//           return row.desc.substring(0,20) + '....'
//         }
//         return row.desc
//       }
//     },
  

//     {
//       name: 'ACTIONS',
//       cell: (row) => (
//         <div>
//           <IconButton onClick={() => handleOpenModal('viewform', row)}>
//             <Visibility className="actn-icon1" style={{ color: 'blue' }} /> {/* Example: blue color */}
//           </IconButton>
//           <IconButton onClick={() => handleOpenModal('editform', row)}>
//             <EditNoteIcon className="actn-icon2" style={{ color: 'green' }} /> {/* Example: green color */}
//           </IconButton>
//           <IconButton onClick={() => handleDeleteModal(row)}>
//             <Delete className="actn-icon3" style={{ color: 'red' }} /> {/* Example: red color */}
//           </IconButton>
//         </div>
//       )
//     }
//   ];

//   return (
//     <DataTable
//       columns={columns}
//       data={dataToDisplay}
//       // striped
//       highlightOnHover
//       pointerOnHover
//       subHeader
//       pagination
//       paginationPerPage={6}
//       paginationRowsPerPageOptions={[10, 20, 30]}
//       subHeaderComponent={
//         <div>
//           <CardHead
//             tableHeading={tableHeading}
//             handleAddModal={() => handleOpenModal('addform')}
//             supportDetails={supportDetails}
//             searchHandler={handleSearch}
//           />
//           {openModal && (
//             <OpenModal
//               open={openModal}
//               handleClose={handleCloseModal}
//               component={modalComponent}
//               mdlwidth={modalStyle.width}
//               mdlHeading={modalHeading}
//             />
//           )}

//           {showDeleteModal && (
//             <DeleteModal open={showDeleteModal} handleClose={handleCloseModal} id={selectedId} onDeleteConfirm={deleteReferenceConfirm} />
//           )}
//         </div>
//       }
//     />
//   );
// }
