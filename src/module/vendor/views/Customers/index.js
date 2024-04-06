
// import DataTable from 'react-data-table-component';
// import React, { useState } from 'react';
// import OpenModal from 'ui-component/common/OpenModal';
// import AddEditModal from './addEditModal';
// import TableRows from 'ui-component/Table/TableRows';
// import CardHead from 'ui-component/common/CardHead';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import DeleteModal from 'ui-component/Modals/DeleteModal';
// import ViewModal from './viewModal'

// import { getCustomer, deleteCustomer } from 'module/vendor/container/customerContainer/slice';

// export default function Index() {
//   const [openModal, setOpenModal] = useState(false);
//   const [modalComponent, setModalComponent] = useState(null);
//   const [modalHeading, setModalHeading] = useState('');
  
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   // const [selectedRow, setSelectedRow] = useState(null);
//   const [selectedId, setSelectedId] = useState();
//   const modalStyle = { width: '60%' };
//   const dispatch = useDispatch();
//   const customerDetails = useSelector((state) => state.customer.customer.customerData);

//   console.log("========customerDetails=======",customerDetails);

//   useEffect(() => {
//     dispatch(getCustomer());
//   }, [dispatch]);

//   const handleOpenModal = (whichOpen, item) => {
//     setOpenModal(true);
//     // setSelectedRow(item); // Store selected row
//     let ComponentToRender;
//     switch (whichOpen) {
//       case 'addform':
//         setModalHeading('Add Customer');
//         ComponentToRender = <AddEditModal formtype="addform" data={item} handleClose={handleCloseModal} />;
//         break;
//         case 'editform':
//           setModalHeading('Edit Customer');
//           ComponentToRender = <AddEditModal formtype="editform" data={item} handleClose={handleCloseModal} />;
//           break;
//         case 'viewform':
//           setModalHeading('View Customer');
//           ComponentToRender = <ViewModal data={item} />;
//           break;
//         default:
//           ComponentToRender = null;
//       }
//       setModalComponent(ComponentToRender);
//   };

//   const handleCloseModal = (formtype) => {
//     setOpenModal(false);
//     setShowDeleteModal(false);
//     if (formtype === 'addform') setPage(1);
//   };

//   const handleDeleteModal = (item) => {
//     setShowDeleteModal(true);
//     setSelectedId(item.id);
//   };

//   const deleteReferenceConfirm = () => {
//     dispatch(deleteCustomer(selectedId));
//     setShowDeleteModal(false);
//   };

//   const columns = [
//     {
//       name: 'NAME',
//       selector: row => row.fName,
//     },
//     {
//       name: 'EMAIL',
//       selector: row => row.email,
//     },
//     {
//       name: 'MOBILE',
//       selector: row => row.contactMobile1,
//     },
//     // {
//     //   name: 'USER ROLE',
//     //   selector: row => row.role,
//     // },
//     {
//       name: 'ACTIONS',
//       cell: row => <TableRows rowData={row}  data={customerDetails.rows} handleOpenModal={handleOpenModal}   handleDelete={handleDeleteModal}  />,
//     },
//   ];

//   return (
//     <DataTable
//       columns={columns}
//       data={customerDetails.rows}
//       striped
//       highlightOnHover
//       pointerOnHover
//       subHeader
//       subHeaderComponent={
//         <div>
//           <CardHead handleAddModal={() => handleOpenModal('addform')} />
//           {openModal && (
//             <OpenModal
//               open={openModal}
//               handleClose={handleCloseModal}
              
//               component={modalComponent}
//               mdlwidth={modalStyle.width}  
//               mdlHeading={modalHeading}
//             />
//           )}

//         {showDeleteModal && (
//           <DeleteModal 
//           open={showDeleteModal} 
//           handleClose={handleCloseModal}
//           id={selectedId} 
//           onDeleteConfirm={deleteReferenceConfirm} />
//         )}
//         </div>
//       }
//     />
//   );
// }


//.......................................................................................



// import React, {  useState } from 'react';
// import { Modal } from '@mui/material';
// import Box from '@mui/material/Box';
// import PropTypes from 'prop-types';
// import CloseIcon from '@mui/icons-material/Close';
// import Grid from '@mui/material/Grid';
// import { useTheme } from '@mui/material/styles';
// import styles from './style';

// import CustomTabPanel from './CustomTabPanel '; 
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';



// const OpenModal = ({ open, handleClose,  mdlHeading }) => { //mdlwidth //component
//   const theme = useTheme();
//   const style = styles(theme);
//   const [value, setValue] = useState(0);
//   // const [gradientLength, setGradientLength] = useState(0);
//   console.log('------dataaaaa-----------------------------', mdlHeading);
//   const handleIconClick = () => {
//     handleClose();
//   };

//   const handleChange = (event, newValue) => {
//     setValue(newValue); // Update the value state variable
//   };
//   // useEffect(() => {
//   //   const textWidth = mdlHeading?.length * 200;

//   //   setGradientLength(textWidth);
//   // }, [mdlHeading && mdlHeading]);
//   return (
//     <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
//       <Box
//         sx={style.commonModalContent}
//         // style={{
//         //   width: mdlwidth ? mdlwidth : '50%'
//         // }}
//       >
//         <Grid container spacing={2} sx={style.modalBoxHeader}>
//           <Grid item xs={11}>
//             <Box sx={style.modalHeadContent}>{mdlHeading ? mdlHeading : 'Heading'}</Box>
//           </Grid>

//           <Grid item xs={1} sx={style.closeIconGrid}>
//             <CloseIcon sx={style.closeIcon} onClick={handleIconClick} />
//           </Grid>
//           <Box
//             sx={style.headerUnderLine}
//             // style={{ background: `linear-gradient(to right, #F26F26 ${gradientLength}px, #7070702e ${gradientLength}px)` }}
//           ></Box>
//         </Grid>
//         {/* <Box sx={style.modalboxComponet}>{component}</Box> */}
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//   <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//     <Tab label="Item One" />
//     <Tab label="Item Two" />
//     <Tab label="Item Three" />
//   </Tabs>
// </Box>

// <CustomTabPanel value={value} index={0}>
//   Item One
// </CustomTabPanel>
// <CustomTabPanel value={value} index={1}>
//   Item Two
// </CustomTabPanel>
// <CustomTabPanel value={value} index={2}>
//   Item Three
// </CustomTabPanel>
//       </Box>
//     </Modal>
//   );
// };

// OpenModal.propTypes = {
//   open: PropTypes.bool.isRequired,
//   handleClose: PropTypes.func.isRequired,
//   // component: PropTypes.node,
//   mdlwidth: PropTypes.string,
//   mdlheight: PropTypes.string,
//   mdlHeading: PropTypes.string
// };

// export default OpenModal;


//...........................................................................................



import DataTable from 'react-data-table-component';
import React, { useState } from 'react';
import OpenModal from 'ui-component/common/OpenModal';
import AddEditModal from './addEditModal';
import CardHead from 'ui-component/common/CardHead';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DeleteModal from 'ui-component/Modals/DeleteModal';
import '../../../../assets/style/style.css'
import ViewModal from './viewModal';
import { IconButton } from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';

import { getCustomer, deleteCustomer } from 'module/vendor/container/customerContainer/slice';

export default function Index() {
  const [tableHeading, setTableHeading] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);
  const [modalHeading, setModalHeading] = useState('');
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [selectedRow, setSelectedRow] = useState(null);
  const [selectedId, setSelectedId] = useState();
  const modalStyle = { width: '60%' };
  const dispatch = useDispatch();
  const customerDetails = useSelector((state) => state.customer.customer.customerData);

  console.log("========customerDetails=======",customerDetails);

  useEffect(() => {
    dispatch(getCustomer());
    setTableHeading('Customers'); 
  }, [dispatch]);

  const handleOpenModal = (whichOpen, item) => {
    setOpenModal(true);
    // setSelectedRow(item); // Store selected row
    let ComponentToRender;
    switch (whichOpen) {
      case 'addform':
        setModalHeading('Add Customer');
        ComponentToRender = <AddEditModal formtype="addform" data={item} handleClose={handleCloseModal} />;
        break;
        case 'editform':
          setModalHeading('Edit Customer');
          ComponentToRender = <AddEditModal formtype="editform" data={item} handleClose={handleCloseModal} />;
          break;
        case 'viewform':
          setModalHeading('View Customer');
          ComponentToRender = <ViewModal data={item} />;
          break;
        default:
          ComponentToRender = null;
      }
      setModalComponent(ComponentToRender);
  };

  const handleCloseModal = (formtype) => {
    setOpenModal(false);
    setShowDeleteModal(false);
    if (formtype === 'addform') setPage(1);
  };

  const handleDeleteModal = (item) => {
    setShowDeleteModal(true);
    setSelectedId(item.id);
  };

  const deleteReferenceConfirm = () => {
    dispatch(deleteCustomer(selectedId));
    setShowDeleteModal(false);
  };

  const columns = [
    {
      name: 'NAME',
      selector: row => row.fName,
    },
    {
      name: 'EMAIL',
      selector: row => row.email,
    },
    {
      name: 'MOBILE',
      selector: row => row.contactMobile1,
    },
    // {
    //   name: 'USER ROLE',
    //   selector: row => row.role,
    // },
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          <IconButton onClick={() => handleOpenModal('viewform', row)}>
            <Visibility />
          </IconButton>
          <IconButton onClick={() => handleOpenModal('editform', row)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleDeleteModal(row)}>
            <Delete />
          </IconButton>
        </div>
      )
    }
  ];

  return (
    <DataTable
      columns={columns}
      data={customerDetails.rows}
      striped
      highlightOnHover
      pointerOnHover
      subHeader
      pagination
      paginationPerPage={10} 
      paginationRowsPerPageOptions={[10, 20, 30]} 
      subHeaderComponent={
        <div >

        <CardHead  tableHeading={tableHeading} handleAddModal={() => handleOpenModal('addform')} />
        {openModal && (
          <OpenModal
            open={openModal}
            handleClose={handleCloseModal}
            component={modalComponent}
            mdlwidth={modalStyle.width}
            mdlHeading={modalHeading}
          />
        )}

        {showDeleteModal && (
          <DeleteModal 
            open={showDeleteModal} 
            handleClose={handleCloseModal}
            id={selectedId} 
            onDeleteConfirm={deleteReferenceConfirm} 
          />
        )}
      </div>
      }
    />
  );
}