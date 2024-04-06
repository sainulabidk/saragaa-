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

export default function Support() {
  const [tableHeading, setTableHeading] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);
  const [modalHeading, setModalHeading] = useState('');

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [selectedRow, setSelectedRow] = useState(null);
  const [selectedId, setSelectedId] = useState();
  const modalStyle = { width: '60%' };
  const dispatch = useDispatch();
  const supportDetails = useSelector((state) => state.support.support.supportData);

  console.log('========supportDetails=======', supportDetails);

  useEffect(() => {
    dispatch(getSupport());
    setTableHeading('SUPPORT');
  }, [dispatch]);

  const handleOpenModal = (whichOpen, item) => {
    setOpenModal(true);
    // setSelectedRow(item); // Store selected row
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
  };

  const handleDeleteModal = (item) => {
    setShowDeleteModal(true);
    setSelectedId(item.id);
  };

  const deleteReferenceConfirm = () => {
    dispatch(deleteSupport(selectedId));
    setShowDeleteModal(false);
    dispatch(getSupport());
  };
  const columns = [
    {
      name: 'SUPPORT TYPE',
      selector: (row) => row.sprtType.supportType
    },

    {
      name: 'PRIORITY',
      selector: (row) => row.priority
    },
    {
      name: 'SUPPORT QUERY',
      selector: (row) => row.desc
    },
    {
      name: 'IMAGE',
      cell: (row) => <img src={row.imgUrls} alt="Support" /> // Assuming imgUrls is a URL to the image
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          <IconButton onClick={() => handleOpenModal('viewform', row)}>
            <Visibility style={{ color: 'blue' }} />
          </IconButton>
          <IconButton onClick={() => handleOpenModal('editform', row)}>
            <EditNoteIcon style={{ color: 'green' }} />
          </IconButton>
          <IconButton onClick={() => handleDeleteModal(row)}>
            <Delete style={{ color: 'red' }} />
          </IconButton>
        </div>
      )
    }
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={supportDetails.rows}
        striped
        highlightOnHover
        pointerOnHover
        subHeader
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
        subHeaderComponent={
          <div>
            <CardHead tableHeading={tableHeading} handleAddModal={() => handleOpenModal('addform')} supportDetails={supportDetails} />
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
              <DeleteModal open={showDeleteModal} handleClose={handleCloseModal} id={selectedId} onDeleteConfirm={deleteReferenceConfirm} />
            )}
          </div>
        }
      />
    </>
  );
}

// // import DataTable from 'react-data-table-component';
// // import React, { useState } from 'react';
// // import OpenModal from 'ui-component/common/OpenModal';
// // import AddEditModal from './addEditModal';
// // import CardHead from 'ui-component/common/CardHead';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useEffect } from 'react';
// // import DeleteModal from 'ui-component/Modals/DeleteModal';
// // import '../../../../assets/style/style.css';
// // import ViewModal from './viewModal';
// // import { IconButton } from '@mui/material';
// // import EditNoteIcon from '@mui/icons-material/EditNote';
// // import { Visibility, Delete } from '@mui/icons-material';

// // import { getSupport, deleteSupport } from 'module/vendor/container/supportContainer/slice';

// // export default function Support() {
// //   const [tableHeading, setTableHeading] = useState('');
// //   const [openModal, setOpenModal] = useState(false);
// //   const [modalComponent, setModalComponent] = useState(null);
// //   const [modalHeading, setModalHeading] = useState('');

// //   const [showDeleteModal, setShowDeleteModal] = useState(false);
// //   // const [selectedRow, setSelectedRow] = useState(null);
// //   const [selectedId, setSelectedId] = useState();
// //   const modalStyle = { width: '60%' };
// //   const dispatch = useDispatch();
// //   const supportDetails = useSelector((state) => state.support.support.supportData);

// //   console.log('========SupportDetails=======', supportDetails);

// //   useEffect(() => {
// //     dispatch(getSupport());
// //     setTableHeading('Support');
// //   }, [dispatch]);

// //   const handleOpenModal = (whichOpen, item) => {
// //     setOpenModal(true);
// //     // setSelectedRow(item); // Store selected row
// //     let ComponentToRender;
// //     switch (whichOpen) {
// //       case 'addform':
// //         setModalHeading('Add Support');
// //         ComponentToRender = <AddEditModal formtype="addform" data={item} handleClose={handleCloseModal} />;
// //         break;
// //       case 'editform':
// //         setModalHeading('Edit Support');
// //         ComponentToRender = <AddEditModal formtype="editform" data={item} handleClose={handleCloseModal} />;
// //         break;
// //       case 'viewform':
// //         setModalHeading('View Support');
// //         ComponentToRender = <ViewModal data={item} />;
// //         break;
// //       default:
// //         ComponentToRender = null;
// //     }
// //     setModalComponent(ComponentToRender);
// //   };

// //   const handleCloseModal = () => {
// //     setOpenModal(false);
// //     setShowDeleteModal(false);
// //     if (formtype === 'addform') setPage(1);
// //   };

// //   const handleDeleteModal = (item) => {
// //     setShowDeleteModal(true);
// //     setSelectedId(item.id);
// //   };

// //   const deleteReferenceConfirm = () => {
// //     dispatch(deleteSupport(selectedId));
// //     setShowDeleteModal(false);
// //     dispatch(getSupport());
// //   };

// //   const columns = [
// //     {
// //       name: 'SUPPORT TYPE',
// //       selector: (row) => row.sprtType
// //     },
// //     {
// //       name: 'PRIORTIY',
// //       selector: (row) => row.priority
// //     },
// //     {
// //       name: 'IMAGE',
// //       selector: (row) => row.imgUrls
// //     },

// //     {
// //       name: 'Actions',
// //       cell: (row) => (
// //         <div>
// //           <IconButton onClick={() => handleOpenModal('viewform', row)}>
// //             <Visibility className="actn-icon1" style={{ color: 'blue' }} /> {/* Example: blue color */}
// //           </IconButton>
// //           <IconButton onClick={() => handleOpenModal('editform', row)}>
// //             <EditNoteIcon className="actn-icon2" style={{ color: 'green' }} /> {/* Example: green color */}
// //           </IconButton>
// //           <IconButton onClick={() => handleDeleteModal(row)}>
// //             <Delete className="actn-icon3" style={{ color: 'red' }} /> {/* Example: red color */}
// //           </IconButton>
// //         </div>
// //       )
// //     }
// //   ];

// //   return (
// //     <DataTable
// //       columns={columns}
// //       data={supportDetails.rows}
// //       // striped
// //       highlightOnHover
// //       pointerOnHover
// //       subHeader
// //       pagination
// //       paginationPerPage={10}
// //       paginationRowsPerPageOptions={[10, 20, 30]}
// //       subHeaderComponent={
// //         <div>
// //           <CardHead tableHeading={tableHeading} handleAddModal={() => handleOpenModal('addform')} />
// //           {openModal && (
// //             <OpenModal
// //               open={openModal}
// //               handleClose={handleCloseModal}
// //               component={modalComponent}
// //               mdlwidth={modalStyle.width}
// //               mdlHeading={modalHeading}
// //             />
// //           )}

// //           {showDeleteModal && (
// //             <DeleteModal open={showDeleteModal} handleClose={handleCloseModal} id={selectedId} onDeleteConfirm={deleteReferenceConfirm} />
// //           )}
// //         </div>
// //       }
// //     />
// //   );
// // }

// // import DataTable from 'react-data-table-component';
// // import React, { useState } from 'react';
// // import OpenModal from 'ui-component/common/OpenModal';
// // import AddEditModal from './addEditModal';
// // import CardHead from 'ui-component/common/CardHead';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useEffect } from 'react';
// // import DeleteModal from 'ui-component/Modals/DeleteModal';
// // import '../../../../assets/style/style.css';
// // import ViewModal from './viewModal';
// // import { IconButton } from '@mui/material';
// // import EditNoteIcon from '@mui/icons-material/EditNote';
// // import { Visibility, Delete } from '@mui/icons-material';

// // import { getSupport, deleteSupport } from 'module/vendor/container/supportContainer/slice';

// // export default function Support() {
// //   const [tableHeading, setTableHeading] = useState('');
// //   const [openModal, setOpenModal] = useState(false);
// //   const [modalComponent, setModalComponent] = useState(null);
// //   const [modalHeading, setModalHeading] = useState('');
// //   const [showDeleteModal, setShowDeleteModal] = useState(false);
// //   const [selectedId, setSelectedId] = useState();
// //   const modalStyle = { width: '60%' };
// //   const dispatch = useDispatch();
// //   const supportDetails = useSelector((state) => state.support.support.supportData);

// //   console.log('========SupportDetails=======', supportDetails);

// //   useEffect(() => {
// //     dispatch(getSupport());
// //     setTableHeading('Support');
// //   }, [dispatch]);

// //   const handleOpenModal = (whichOpen, item) => {
// //     setOpenModal(true);
// //     let ComponentToRender;
// //     switch (whichOpen) {
// //       case 'addform':
// //         setModalHeading('Add Support');
// //         ComponentToRender = <AddEditModal formtype="addform" data={item} handleClose={handleCloseModal} />;
// //         break;
// //       case 'editform':
// //         setModalHeading('Edit Support');
// //         ComponentToRender = <AddEditModal formtype="editform" data={item} handleClose={handleCloseModal} />;
// //         break;
// //       case 'viewform':
// //         setModalHeading('View Support');
// //         ComponentToRender = <ViewModal data={item} />;
// //         break;
// //       default:
// //         ComponentToRender = null;
// //     }
// //     setModalComponent(ComponentToRender);
// //   };

// //   const handleCloseModal = () => {
// //     setOpenModal(false);
// //     setShowDeleteModal(false);
// //   };

// //   const handleDeleteModal = (item) => {
// //     setShowDeleteModal(true);
// //     setSelectedId(item.id);
// //   };

// //   const deleteReferenceConfirm = () => {
// //     dispatch(deleteSupport(selectedId));
// //     setShowDeleteModal(false);
// //   };

// //   const columns = [
// //     {
// //       name: 'SUPPORT TYPE',
// //       selector: (row) => row.sprtType
// //     },
// //     {
// //       name: 'PRIORTIY',
// //       selector: (row) => row.priority
// //     },
// //     {
// //       name: 'IMAGE',
// //       selector: (row) => row.imgUrls
// //     },
// //     {
// //       name: 'DESCRIPTION',
// //       selector: (row) => row.desc
// //     },
// //     {
// //       name: 'Actions',
// //       cell: (row) => (
// //         <div>
// //           <IconButton onClick={() => handleOpenModal('viewform', row)}>
// //             <Visibility style={{ color: 'blue' }} />
// //           </IconButton>
// //           <IconButton onClick={() => handleOpenModal('editform', row)}>
// //             <EditNoteIcon style={{ color: 'green' }} />
// //           </IconButton>
// //           <IconButton onClick={() => handleDeleteModal(row)}>
// //             <Delete style={{ color: 'red' }} />
// //           </IconButton>
// //         </div>
// //       )
// //     }
// //   ];

// //   return (
// //     <>
// //       <CardHead tableHeading={tableHeading} handleAddModal={() => handleOpenModal('addform')} />
// //       <DataTable
// //         columns={columns}
// //         data={supportDetails.rows}
// //         highlightOnHover
// //         pointerOnHover
// //         subHeader
// //         pagination
// //         paginationPerPage={10}
// //         paginationRowsPerPageOptions={[10, 20, 30]}
// //         subHeaderComponent={
// //           <>
// //             {openModal && (
// //               <OpenModal
// //                 open={openModal}
// //                 handleClose={handleCloseModal}
// //                 component={modalComponent}
// //                 mdlwidth={modalStyle.width}
// //                 mdlHeading={modalHeading}
// //               />
// //             )}
// //             {showDeleteModal && (
// //               <DeleteModal open={showDeleteModal} handleClose={handleCloseModal} id={selectedId} onDeleteConfirm={deleteReferenceConfirm} />
// //             )}
// //           </>
// //         }
// //       />
// //     </>
// //   );
// // }

// import DataTable from 'react-data-table-component';
// import React, { useState } from 'react';
// import OpenModal from 'ui-component/common/OpenModal';
// import AddEditModal from './addEditModal';
// import '../../../../assets/style/style.css';
// import { IconButton } from '@mui/material';
// import { Visibility, Delete } from '@mui/icons-material';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import CardHead from 'ui-component/common/CardHead';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import '../../../../assets/style/style.css';

// import { getSupport } from 'module/vendor/container/supportContainer/slice';

// export default function Index() {
//   const [openModal, setOpenModal] = useState(false);
//   const [modalComponent, setModalComponent] = useState(null);
//   const [modalHeading, setModalHeading] = useState('');
//   const [tableHeading, setTableHeading] = useState('');
//   // const [selectedId, setSelectedId] = useState();
//   const modalStyle = { width: '60%' };
//   const dispatch = useDispatch();
//   const supportDetails = useSelector((state) => state.support.support.supportData);

//   console.log('=========support==========', supportDetails.rows);

//   useEffect(() => {
//     dispatch(getSupport({}));
//     setTableHeading('Support');
//   }, [dispatch]);

//   const handleOpenModal = (whichOpen, item) => {
//     setOpenModal(true);
//     let ComponentToRender;
//     switch (whichOpen) {
//       case 'addform':
//         setModalHeading('Add MyTeam');
//         ComponentToRender = <AddEditModal formtype="addform" data={item} handleClose={handleCloseModal} />;
//         break;
//       case 'editform':
//         setModalHeading('Edit MyTeam');
//         ComponentToRender = <AddEditModal formtype="editform" data={item} handleClose={handleCloseModal} />;
//         break;
//       case 'viewform':
//         setModalHeading('View MyTeam');
//         // ComponentToRender = <ViewModal data={item} />;
//         break;
//       default:
//         ComponentToRender = null;
//     }
//     setModalComponent(ComponentToRender);
//   };

//   const handleCloseModal = (formtype) => {
//     setOpenModal(false);

//     if (formtype === 'addform') setPage(1);
//   };

//   const columns = [
//     {
//       name: 'sprtType',
//       selector: (row) => row.sprtType.supportType
//     },
//     // {
//     //   name: 'priority',
//     //   selector: (row) => row.priority
//     // },
//     // {
//     //   name: 'imgUrls',
//     //   selector: (row) => row.imgUrls
//     // },
//     {
//       name: 'desc',
//       selector: (row) => row.desc
//     },
//     {
//       name: 'ACTIONS',
//       cell: (row) => (
//         <div>
//           <IconButton onClick={() => handleOpenModal('viewform', row)}>
//             <Visibility className="actn-icon1" />
//           </IconButton>
//           <IconButton onClick={() => handleOpenModal('editform', row)}>
//             <EditNoteIcon className="actn-icon2" />
//           </IconButton>
//           <IconButton onClick={() => row}>
//             <Delete className="actn-icon3" />
//           </IconButton>
//         </div>
//       )
//     }
//   ];

//   return (
//     <DataTable
//       columns={columns}
//       data={supportDetails.rows}
//       // striped
//       highlightOnHover
//       pointerOnHover
//       subHeader
//       // pagination
//       // paginationPerPage={6}
//       // paginationRowsPerPageOptions={[10, 20, 30]}
//       subHeaderComponent={
//         <div>
//           <CardHead tableHeading={tableHeading} handleAddModal={() => handleOpenModal('addform')} />
//           {openModal && (
//             <OpenModal
//               open={openModal}
//               handleClose={handleCloseModal}
//               component={modalComponent}
//               mdlwidth={modalStyle.width}
//               mdlHeading={modalHeading}
//             />
//           )}
//         </div>
//       }
//     />
//   );
// }

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

// import { getSupport } from 'module/vendor/container/supportContainer/slice';

// function Index() {
//   const supportDetails = useSelector((state) => state.support.support.supportData);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getSupport());
//   }, []);

//   console.log(
//     '=========support1==========',
//     supportDetails
//   );
//   // console.log('=========support1========== call', supportDetails.rows.map((item)=>item.sprtType.supportType));
//   return (
//     <div>
//       {/* {supportDetails.rows.map((item) => (
//         <p key={item.id}>{item.email}</p>
//       ))} */}
//     </div>
//   );
// }

// export default Index;
