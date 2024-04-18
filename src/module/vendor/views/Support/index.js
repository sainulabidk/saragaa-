import DataTable from 'react-data-table-component';
import React, { useState } from 'react';
import OpenModal from 'ui-component/common/OpenModal';
import AddEditModal from './addEditModal';
import CardHead from 'ui-component/common/CardHead';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DeleteModal from 'ui-component/Modals/DeleteModal';
import '../../../../assets/style/style.css';
import ViewModal from './viewModal';
import { IconButton } from '@mui/material';

import { Visibility, Delete } from '@mui/icons-material';
import EditNoteIcon from '@mui/icons-material/EditNote';

import { getSupport, deleteSupport } from 'module/vendor/container/supportContainer/slice';
import { toast } from 'react-toastify';

export default function Index() {
  const [tableHeading, setTableHeading] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);
  const [modalHeading, setModalHeading] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const modalStyle = { width: '60%' };
  const dispatch = useDispatch();
  const supportDetails = useSelector((state) => state.data.support.supportData);

  console.log('=========suppprt details', supportDetails);
  useEffect(() => {
    dispatch(getSupport({}));
    setTableHeading('SUPPORT TYPE');
  }, [dispatch]);

  const handleOpenModal = (whichOpen, item) => {
    setOpenModal(true);
    let ComponentToRender;
    switch (whichOpen) {
      case 'addform':
        setModalHeading('Add Support');
        ComponentToRender = <AddEditModal formtype="addform" data={item} handleClose={handleCloseModal} />;
        break;
      case 'editform':
        setModalHeading('Edit Support');
        ComponentToRender = <AddEditModal formtype="editform" data={item} handleClose={handleCloseModal} />;
        break;
      case 'viewform':
        setModalHeading('View Support');
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
    dispatch(getSupport());
  };

  const handleDeleteModal = (item) => {
    setShowDeleteModal(true);
    setSelectedId(item.id);
  };

  const deleteReferenceConfirm = () => {
    dispatch(deleteSupport(selectedId));
    setShowDeleteModal(false);
    dispatch(getSupport());
    toast.error('support deleted successfully');
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredData = supportDetails.rows.filter((row) => {
      return (row.supportType.toLowerCase().includes(searchValue) || 
      row.desc.toLowerCase().includes(searchValue));
    });
    setFilteredData(filteredData); // Update the filtered data state
  };
  const dataToDisplay = filteredData.length > 0 ? filteredData : supportDetails.rows;

  const columns = [
    {
      name: 'SUPPORT TYPE',
      selector: (row) => row.sprtType?.supportType || 'N/A'
    },
    {
      name: 'PRIORITY',
      selector: (row) => row.priority
    },
    {
      name: 'DESCRIPTION',
      selector: (row) => {
        if (row.desc) {
          return row.desc.length > 20 ? row.desc.substring(0, 20) + '....' : row.desc;
        } else {
          return 'N/A'; // Add default value if description is undefined
        }
      }
    },
    {
      name: 'IMAGE',
      cell: (row) => <img src={row.imgUrls} alt="Support" style={{ height: '50px' }} /> // Assuming imgUrls is a URL to the image
    },

    {
      name: 'ACTIONS',
      cell: (row) => (
        <div>
        <IconButton onClick={() => handleOpenModal('viewform', row)}>
            <Visibility className='actn-icon1'/>
          </IconButton>
          <IconButton onClick={() => handleOpenModal('editform', row)}>
            <EditNoteIcon className='actn-icon2' />
          </IconButton>
          <IconButton onClick={() => handleDeleteModal(row)}>
            <Delete className='actn-icon3' />
          </IconButton>

        </div>
      )
    }
  ];

  return (
    <DataTable
      columns={columns}
      data={dataToDisplay}
      // striped
      highlightOnHover
      pointerOnHover
      subHeader
      pagination
      paginationPerPage={6}
      paginationRowsPerPageOptions={[10, 20, 30]}
      subHeaderComponent={
        <div>
          <CardHead
            tableHeading={tableHeading}
            handleAddModal={() => handleOpenModal('addform')}
            supportDetails={supportDetails}
            searchHandler={handleSearch}
          />
          {openModal && (
            <OpenModal
              open={openModal}
              handleClose={handleCloseModal}  q
              component={modalComponent}
              mdlwidth={modalStyle.width}
              mdlHeading={modalHeading}
            />
          )}

          {showDeleteModal && (
            <DeleteModal open={showDeleteModal} handleClose={handleCloseModal} id={selectedId} onDeleteConfirm={deleteReferenceConfirm} />
          )}
        </div>
      }
    />
  );
}








// =====one=======


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












// import DataTable from 'react-data-table-component';
// import React, { useState } from 'react';
// import OpenModal from 'ui-component/common/OpenModal';
// import AddEditModal from './addEditModal';
// import CardHead from 'ui-component/common/CardHead';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import DeleteModal from 'ui-component/Modals/DeleteModal';
// import '../../../../assets/style/style.css';
// import ViewModal from './viewModal';
// import { IconButton } from '@mui/material';

// import { Visibility, Delete } from '@mui/icons-material';
// import EditNoteIcon from '@mui/icons-material/EditNote';

// import { getSupport, deleteSupport } from 'module/vendor/container/supportContainer/slice';
// import { toast } from 'react-toastify';

// export default function Support() {
//   const [tableHeading, setTableHeading] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [modalComponent, setModalComponent] = useState(null);
//   const [modalHeading, setModalHeading] = useState('');

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   // const [selectedRow, setSelectedRow] = useState(null);
//   const [selectedId, setSelectedId] = useState();

//   const [filteredData, setFilteredData] = useState([]);

//   const modalStyle = { width: '60%' };
//   const dispatch = useDispatch();
//   const supportDetails = useSelector((state) => state.data.support.supportData);

//   console.log('========supportDetails=======', supportDetails);

//   useEffect(() => {
//     dispatch(getSupport());
//     setTableHeading('SUPPORT');
//   }, [dispatch]);

//   const handleOpenModal = (whichOpen, item) => {
//     setOpenModal(true);
//     // setSelectedRow(item); // Store selected row
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

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setShowDeleteModal(false);
//   };
//   const handleDeleteModal = (item) => {
//     setShowDeleteModal(true);
//     setSelectedId(item.id);
//   };

//   const deleteReferenceConfirm = () => {
//     dispatch(deleteSupport(selectedId));
//     setShowDeleteModal(false);
//     dispatch(getSupport());
//     toast.error('Support deleted successfully', { autoClose: 3000 });
//   };
//   // const deleteReferenceConfirm = () => {
//   //   dispatch(deleteSupport(selectedId))
//   //     .then(() => {
//   //       setShowDeleteModal(false);
//   //       toast.error('Support deleted successfully', { autoClose: 3000 }); // Show Toast notification on successful deletion
//   //     })
//   //     .catch((error) => {
//   //       console.error('Failed to delete support:', error);
//   //       toast.error('Failed to delete support', { autoClose: 3000 }); // Show Toast notification on failure
//   //     });
//   // };

//   const handleSearch = (event) => {
//     const searchValue = event.target.value.toLowerCase();
//     const filteredData = supportDetails.rows.filter((row) => {
//       return (
//         row.sprtType?.supportType.toLowerCase().includes(searchValue) ||
//         row.priority.toLowerCase().includes(searchValue) ||
//         row.desc.toLowerCase().includes(searchValue)
//       );
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
//       name: 'PRIORITY',
//       selector: (row) => row.priority
//     },
//     {
//       name: 'SUPPORT QUERY',
//       selector: (row) => {
//         if(row.desc.length > 20) {
//           return row.desc.substring(0,20) + '....'
//         }
//         return row.desc
//       }
//     },
//     {
//       name: 'IMAGE',
//       cell: (row) => <img src={row.imgUrls} alt="Support" style={{ height: '50px' }} /> // Assuming imgUrls is a URL to the image
//     },
//     {
//       name: 'Actions',
//       cell: (row) => (
//         <div>
//           <IconButton onClick={() => handleOpenModal('viewform', row)}>
//             <Visibility style={{ color: 'blue' }} />
//           </IconButton>
//           <IconButton onClick={() => handleOpenModal('editform', row)}>
//             <EditNoteIcon style={{ color: 'green' }} />
//           </IconButton>
//           <IconButton onClick={() => handleDeleteModal(row)}>
//             <Delete style={{ color: 'red' }} />
//           </IconButton>
//         </div>
//       )
//     }
//   ];

//   return (
//     <div style={{ overflowX: 'auto' }}>
//       <DataTable
//         columns={columns}
//         data={dataToDisplay}
//         striped
//         highlightOnHover
//         pointerOnHover
//         subHeader
//         pagination
//         paginationPerPage={10}
//         paginationRowsPerPageOptions={[10, 20, 30]}
//         subHeaderComponent={
//           <div>
//             <CardHead
//               tableHeading={tableHeading}
//               handleAddModal={() => handleOpenModal('addform')}
//               supportDetails={supportDetails}
//               searchHandler={handleSearch}
//             />
//             {openModal && (
//               <OpenModal
//                 open={openModal}
//                 handleClose={handleCloseModal}
//                 component={modalComponent}
//                 mdlwidth={modalStyle.width}
//                 mdlHeading={modalHeading}
//               />
//             )}
//             {showDeleteModal && (
//               <DeleteModal open={showDeleteModal} handleClose={handleCloseModal} id={selectedId} onDeleteConfirm={deleteReferenceConfirm} />
//             )}
//           </div>
//         }
//       />
//     </div>
//   );
// }

 
// import DataTable from 'react-data-table-component';
// import React, { useState } from 'react';
// import OpenModal from 'ui-component/common/OpenModal';
// import AddEditModal from './addEditModal';
// import CardHead from 'ui-component/common/CardHead';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import DeleteModal from 'ui-component/Modals/DeleteModal';
// import '../../../../assets/style/style.css';
// import ViewModal from './viewModal';
// import { IconButton } from '@mui/material';

// import { Visibility, Delete } from '@mui/icons-material';
// import EditNoteIcon from '@mui/icons-material/EditNote';

// import { getSupport, deleteSupport } from 'module/vendor/container/supportContainer/slice';

// export default function Support() {
//   const [tableHeading, setTableHeading] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [modalComponent, setModalComponent] = useState(null);
//   const [modalHeading, setModalHeading] = useState('');

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   // const [selectedRow, setSelectedRow] = useState(null);
//   const [selectedId, setSelectedId] = useState();

//   const [filteredData, setFilteredData] = useState([]);

//   const modalStyle = { width: '60%' };
//   const dispatch = useDispatch();
//   const supportDetails = useSelector((state) => state.support.support.supportData);

//   console.log('========supportDetails=======', supportDetails);

//   useEffect(() => {
//     dispatch(getSupport());
//     setTableHeading('SUPPORT');
//   }, [dispatch]);

//   const handleOpenModal = (whichOpen, item) => {
//     setOpenModal(true);
//     // setSelectedRow(item); // Store selected row
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
//       return (
//         row.sprtType?.Support.toLowerCase().includes(searchValue) ||
//         row.priority.toLowerCase().includes(searchValue) ||
//         row.desc.toLowerCase().includes(searchValue)
//       );
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
//       name: 'PRIORITY',
//       selector: (row) => row.priority
//     },
//     {
//       name: 'SUPPORT QUERY',
//       selector: (row) => row.desc
//     },
//     {
//       name: 'IMAGE',
//       cell: (row) => <img src={row.imgUrls} alt="Support" style={{ height: '100px' }} /> // Assuming imgUrls is a URL to the image
//     },
//     {
//       name: 'Actions',
//       cell: (row) => (
//         <div>
//           <IconButton onClick={() => handleOpenModal('viewform', row)}>
//             <Visibility style={{ color: 'blue' }} />
//           </IconButton>
//           <IconButton onClick={() => handleOpenModal('editform', row)}>
//             <EditNoteIcon style={{ color: 'green' }} />
//           </IconButton>
//           <IconButton onClick={() => handleDeleteModal(row)}>
//             <Delete style={{ color: 'red' }} />
//           </IconButton>
//         </div>
//       )
//     }
//   ];

//   return (
//     <div style={{ overflowX: 'auto' }}>
//       <DataTable
//         columns={columns}
//         data={dataToDisplay}
//         striped
//         highlightOnHover
//         pointerOnHover
//         subHeader
//         pagination
//         paginationPerPage={10}
//         paginationRowsPerPageOptions={[10, 20, 30]}
//         subHeaderComponent={
//           <div>
//             <CardHead
//               tableHeading={tableHeading}
//               handleAddModal={() => handleOpenModal('addform')}
//               supportDetails={supportDetails}
//               searchHandler={handleSearch}
//             />
//             {openModal && (
//               <OpenModal
//                 open={openModal}
//                 handleClose={handleCloseModal}
//                 component={modalComponent}
//                 mdlwidth={modalStyle.width}
//                 mdlHeading={modalHeading}
//               />
//             )}
//             {showDeleteModal && (
//               <DeleteModal open={showDeleteModal} handleClose={handleCloseModal} id={selectedId} onDeleteConfirm={deleteReferenceConfirm} />
//             )}
//           </div>
//         }
//       />
//     </div>
//   );
// }
