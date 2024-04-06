import React from 'react'

export default function Text() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import commonStyles from 'assets/style/Style';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import formatLabel from 'utils/formatLabel';
import formatDate from 'utils/formatDate';
import formatDateTime from 'utils/formatDateTime';

const TableRows = ({
  data = [],
  keys = [],
  config = [],
  hasAction = true,
  currentPage = 1,
  pageFilters = { limit: 10 },
  handleOpenModal,
  handleDelete,
  hasDelete = true
}) => {
  const theme = useTheme();
  const style = commonStyles(theme);
 
  let returnData = '';

  const rowCellValue = (key, value) => {
    switch (key?.class) {
      case 'desc':
        returnData = value && value.length > 30 ? `${value.substring(0, 30)}...` : value || '--';
        break;
      case 'formatLabelId':
        returnData = `${formatLabel(value)}`;
        break;
      case 'formatDate':
        returnData = `${formatDate(value)}`;
        break;
      case 'formatDateTime':
        returnData = `${formatDateTime(value)}`;
        break;
      default:
        returnData = value;
    }
    return returnData;
  };

  return (
    <TableBody>
      {data.map((rowItem, rowIndex) => (
        <TableRow key={rowIndex}>
          <TableCell sx={style.listTableBody}>
             {(currentPage - 1) * pageFilters.limit + rowIndex + 1}
          
          </TableCell>
          {keys.map((key, i) => {
            return (
              <TableCell key={i}>
                {config[key]?.label === 'Status' &&
                (rowItem[key] === 'active' || rowItem[key] === 'created' || rowItem[key] === 'suspended') ? (
                  <Box sx={style.tableStatusBox}
                  //  backgroundColor={returnStyle}
                   >
                    {rowItem[key]}
                  </Box>
                ) : (
                  rowCellValue(config[key], rowItem[key])
                )}
              </TableCell>
            );
          })}

          {hasAction && (
            <TableCell sx={{ display: 'flex', gap: theme.spacing(1) }}>
              <Button severity="warning" variant="contained" onClick={() => handleOpenModal('viewform', rowItem)} sx={style.listActionBtn}>
                <VisibilityIcon sx={style.listActionIcon} />
              </Button>
              <Button severity="info" variant="contained" onClick={() => handleOpenModal('editform', rowItem)} sx={style.listActionBtn}>
                <EditIcon sx={style.listActionIcon} />
              </Button>
              {hasDelete && (
                <Button severity="info" variant="contained" onClick={() => handleDelete(rowItem)} sx={style.listActionBtn}>
                  <DeleteIcon sx={style.listActionIcon} />
                </Button>
              )}
            </TableCell>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
};

TableRows.propTypes = {
  data: PropTypes.array,
  keys: PropTypes.array,
  config: PropTypes.object,
  hasAction: PropTypes.bool,
  currentPage: PropTypes.number,
  pageFilters: PropTypes.object,
  handleOpenModal: PropTypes.func,
  handleDelete: PropTypes.func,
  hasDelete: PropTypes.bool
};

export default TableRows;





import React from 'react';
// import PropTypes from 'prop-types';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TableRows = ({
  data = [],
   handleOpenModal ,
   hasAction = true,
   handleDelete,
   hasDelete = true
  }) => {
  return (
    <TableBody>
       {data.map((rowItem) => (

    <TableRow>
      {hasAction &&(
      <TableCell>
        <Button variant="contained" onClick={() => handleOpenModal('viewform')}>
          <VisibilityIcon />
        </Button>
        <Button variant="contained" onClick={() => handleOpenModal('editform')}>
          <EditIcon />
        </Button>
        {hasDelete && (
        <Button variant="contained" onClick={() =>  handleDelete(rowItem)}>
          <DeleteIcon />
        </Button>
        )}
      </TableCell>
      )}
    </TableRow>
       ))}
    </TableBody>
  );
};

// TableRows.propTypes = {
//   handleOpenModal: PropTypes.func.isRequired,
// };

export default TableRows;


















// tablerow succsecc////////////////////////////////////////

import React from 'react';
// import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import commonStyles from 'assets/style/Style';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import formatLabel from 'utils/formatLabel';
// import formatDate from 'utils/formatDate';
// import formatDateTime from 'utils/formatDateTime';

const TableRows = ({
  data = [],
  // keys = [],
  // config = [],
  hasAction = true,
  // currentPage = 1,
  // pageFilters = { limit: 10 },
  handleOpenModal,
  handleDelete,
  hasDelete = true
}) => {
  // const theme = useTheme();
  // const style = commonStyles(theme);
 
  // let returnData = '';

  // const rowCellValue = (key, value) => {
  //   switch (key?.class) {
  //     case 'desc':
  //       returnData = value && value.length > 30 ? `${value.substring(0, 30)}...` : value || '--';
  //       break;
  //     case 'formatLabelId':
  //       returnData = `${formatLabel(value)}`;
  //       break;
  //     case 'formatDate':
  //       returnData = `${formatDate(value)}`;
  //       break;
  //     case 'formatDateTime':
  //       returnData = `${formatDateTime(value)}`;
  //       break;
  //     default:
  //       returnData = value;
  //   }
  //   return returnData;
  // };

  return (
    <TableBody>
      {data.map((rowItem,rowIndex) => (
        
        // <TableRow key={rowIndex}>
        <TableRow key={rowIndex} >
          {/* <TableCell sx={style.listTableBody}>
             {(currentPage - 1) * pageFilters.limit + rowIndex + 1}
          
          </TableCell> */}
          {/* {keys.map((key, i) => {
            return (

              <TableCell key={i}>
                {config[key]?.label === 'Status' &&
                (rowItem[key] === 'active' || rowItem[key] === 'created' || rowItem[key] === 'suspended') ? (
                  <Box sx={style.tableStatusBox}
                  //  backgroundColor={returnStyle}
                   >
                    {rowItem[key]}
                  </Box>
                ) : (
                  rowCellValue(config[key], rowItem[key])
                )}
              </TableCell>
            );
          })} */}

          {hasAction && (
            <TableCell sx={{ display: 'flex', }}>
              <Button severity="warning" variant="contained" onClick={() => handleOpenModal('viewform', rowItem)} >
                <VisibilityIcon />
              </Button>
              <Button severity="info" variant="contained" onClick={() => handleOpenModal('editform', rowItem)} >
                <EditIcon  />
              </Button>
              {hasDelete && (
                <Button severity="info" variant="contained" onClick={() => handleDelete(rowItem)} >
                  <DeleteIcon/>
                </Button>
              )}
            </TableCell>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
};

// TableRows.propTypes = {
//   data: PropTypes.array,
//   keys: PropTypes.array,
//   config: PropTypes.object,
//   hasAction: PropTypes.bool,
//   currentPage: PropTypes.number,
//   // pageFilters: PropTypes.object,
//   handleOpenModal: PropTypes.func,
//   handleDelete: PropTypes.func,
//   hasDelete: PropTypes.bool
// };

export default TableRows;





// myteam succsecc page
//   // Index.js
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

// import { getUser, deleteUser } from 'module/vendor/container/userContainer/slice';

// export default function Index() {
//   const [openModal, setOpenModal] = useState(false);
//   const [modalComponent, setModalComponent] = useState(null);
//   const [modalHeading, setModalHeading] = useState('');
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   // const [selectedRow, setSelectedRow] = useState(null);
//   const [selectedId, setSelectedId] = useState();
//   const modalStyle = { width: '60%' };
//   const dispatch = useDispatch();
//   const userDetails = useSelector((state) => state.user.user.userData);

//   console.log("========userDetails=======",userDetails);

//   useEffect(() => {
//     dispatch(getUser({}));
//   }, [dispatch]);

//   const handleOpenModal = (whichOpen, item) => {
//     setOpenModal(true);
//     // setSelectedRow(item); // Store selected row
//     let ComponentToRender;
//     switch (whichOpen) {
//       case 'addform':
//         setModalHeading('Add MyTeam');
//         ComponentToRender = <AddEditModal formtype="addform" data={item} handleClose={handleCloseModal} />;
//         break;
//         case 'editform':
//           setModalHeading('Edit MyTeam');
//           ComponentToRender = <AddEditModal formtype="editform" data={item} handleClose={handleCloseModal} />;
//           break;
//         case 'viewform':
//           setModalHeading('View MyTeam');
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
//     dispatch(deleteUser(selectedId));
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
//       selector: row => row.mobileNo,
//     },
//     {
//       name: 'USER ROLE',
//       selector: row => row.role,
//     },
//     {
//       name: 'ACTIONS',
//       cell: row => <TableRows rowData={row} handleOpenModal={handleOpenModal}   handleDelete={handleDeleteModal}  />,
//     },
//   ];

//   return (
//     <DataTable
//       columns={columns}
//       data={userDetails.rows}
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