import DataTable from 'react-data-table-component';
import React, { useState } from 'react';
import OpenModal from 'ui-component/common/OpenModal';
import AddEditModal from './addEditModal';
import '../../../../assets/style/style.css'
// import TableRows from 'ui-component/Table/TableRows';
import { IconButton } from '@mui/material';
import { Visibility , Delete } from '@mui/icons-material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CardHead from 'ui-component/common/CardHead';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DeleteModal from 'ui-component/Modals/DeleteModal';
import ViewModal from './viewModal'
import '../../../../assets/style/style.css'

import { getUser, deleteUser } from 'module/vendor/container/userContainer/slice';

export default function Index() {
  const [openModal, setOpenModal] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);
  const [modalHeading, setModalHeading] = useState('');
  const [tableHeading, setTableHeading] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const modalStyle = { width: '60%' };
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.data.user.userData);

  useEffect(() => {
    dispatch(getUser({}));
    setTableHeading('My Team'); 
  }, [dispatch]);

  const handleOpenModal = (whichOpen, item) => {
    setOpenModal(true);
    let ComponentToRender;
    switch (whichOpen) {
      case 'addform':
        setModalHeading('Add MyTeam');
        ComponentToRender = <AddEditModal formtype="addform" data={item} handleClose={handleCloseModal} />;
        break;
      case 'editform':
        setModalHeading('Edit MyTeam');
        ComponentToRender = <AddEditModal formtype="editform" data={item} handleClose={handleCloseModal} />;
        break;
      case 'viewform':
        setModalHeading('View MyTeam');
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
    dispatch(deleteUser(selectedId));
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
      name: 'USER ROLE',
      selector: row => row.role,
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
      data={userDetails.rows}
      // striped
      highlightOnHover
      pointerOnHover
      subHeader
      pagination
      paginationPerPage={6} 
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
