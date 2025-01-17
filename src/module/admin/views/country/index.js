import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import {
  // Button,
  Card,
  CardContent
} from '@mui/material';
// import commonStyles from 'assets/style/Style';
// import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import AddEditModal from './addEditModal';
import OpenModal from 'ui-component/common/OpenModal';
import Paginate from 'ui-component/common/Pagination';
import DeleteModal from 'ui-component/Modals/DeleteModal';
import CardHead from 'ui-component/common/CardHead';
import ViewModal from './viewModal';
import TableHeads from 'ui-component/Table/TableHead';
import TableRows from 'ui-component/Table/TableRows';

import countryHead from 'utils/TableConfig';
import NodataFound from 'ui-component/common/NoData';

import { getCountry, deleteCountry, totalCount } from 'module/admin/container/countryContainer/slice';

const Country = () => {
  const searchWithFiltr = [
    {
      id: '1',
      value: 'name',
      name: 'Name'
    },
    {
      id: '2',
      value: 'callingCode',
      name: 'CallingCode'
    }
  ];
  const [tableHeading, setTableHeading] = useState('');
  // const theme = useTheme();
  // const style = commonStyles(theme);
  const [searchFilter, setSearchFilter] = useState(searchWithFiltr[0].value);
  const [openModal, setOpenModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [modalCompenet, setModalComponet] = useState(null);
  const [modalHeading, setModalHeading] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const [pageFilters, setPageFilters] = useState({
    limit: 10,
    deleted: 'false'
  });
  const [page, setPage] = useState(1);

  const modalStyle = { width: '60%' };
  const dispatch = useDispatch();
  const countryDetails = useSelector((state) => state.country.country.countryData);

  console.log('==================countryDetails==================', countryDetails);

  useEffect(() => {
    dispatch(
      getCountry({
        limit: pageFilters.limit,
        //  skip: (page - 1) * pageFilters.limit
        searchVal: searchValue,
        filter: searchFilter
      })
      
    );
    setTableHeading('MyTeam');
    dispatch(totalCount({}));
  }, [dispatch, searchValue, searchFilter]);

  const handleSearchHandler = (event) => {
    const whereString = { [searchFilter]: { like: event.target.value, options: 'i' } };
    console.log('================whereString====================', whereString);

    setSearchValue(event.target.value);
    setPage(1);
    dispatch(getCountry({ limit: 10, skip: 0, whereString }));
    dispatch(totalCount(whereString));
  };

  const handlePageChange = (event, value) => {

    console.log('===================searchValue=================', searchValue);

    const whereString = { [searchFilter]: { like: searchValue, options: 'i' } };
    setPage(value);
    console.log('==============beforevalue======================',value);

    let pageFilter = {
      ...pageFilters
    };
    pageFilter.page = value;
    console.log('==============aftervalue======================',value);
  
    setPageFilters(pageFilter);

    dispatch(getCountry({ where: whereString, skip: (value - 1) * pageFilter.limit, limit: pageFilter.limit }));
    dispatch(totalCount(whereString));
  };

// const handlePageChange = (event, value) => {
//     setPage(value);
//     const skip = (value - 1) * pageFilters.limit;
//     dispatch(getCountry({
//       where: { [searchFilter]: { like: searchValue, options: 'i' } },
//       skip: skip,
//       limit: pageFilters.limit
//     }));
//     dispatch(totalCount({ [searchFilter]: { like: searchValue, options: 'i' } }));
//   };

  const handleOpenModal = (whichopen, item) => {
    setOpenModal(true);
    let ComponentToRender;
    switch (whichopen) {
      case 'addform':
        setModalHeading('Add Country');
        ComponentToRender = <AddEditModal formtype="addform" data={item} handleClose={handleCloseModal} />;
        break;
      case 'editform':
        setModalHeading('Edit Country');
        ComponentToRender = <AddEditModal formtype="editform" data={item} handleClose={handleCloseModal} />;
        break;
      case 'viewform':
        setModalHeading('View Country');
        ComponentToRender = <ViewModal data={item} />;
        break;
      default:
        ComponentToRender = null;
    }
    setModalComponet(ComponentToRender);
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
    dispatch(deleteCountry(selectedId));
    setShowDeleteModal(false);
  };

  const handleOptionChange = (event) => {
    setSearchFilter(event.target.value);
  };
  const {
    countryHead: { config, keys }
  } = countryHead;

  return (
    <>
      <Box>
        <Card>
          <CardHead
          tableHeading={tableHeading}
            handleAddModal={() => handleOpenModal('addform')}
            searchHandler={handleSearchHandler}
            searchValue={searchFilter}
            searchWithFiltr={searchWithFiltr}
            filterHandler={handleOptionChange}
          />

          <CardContent>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHeads keys={keys} config={config} />
                <TableRows
                  data={countryDetails?.rows}
                  keys={keys}
                  // config={config}
                  // currentPage={page}
                  // pageFilters={pageFilters}
                  handleOpenModal={handleOpenModal}
                  handleDelete={handleDeleteModal}
                />
              </Table>
            </TableContainer>
            <Paginate page={page} limit={pageFilters.limit} countryCount={countryDetails?.count} handlePageChange={handlePageChange} />
          
            {countryDetails?.length == 0 && <NodataFound />}
          </CardContent>
        </Card>
        {openModal && (
          <OpenModal
            open={openModal}
            handleClose={handleCloseModal}
            component={modalCompenet}
            mdlwidth={modalStyle.width}
            mdlHeading={modalHeading}
          />
        )}
        {showDeleteModal && (
          <DeleteModal open={showDeleteModal} handleClose={handleCloseModal} id={selectedId} onDeleteConfirm={deleteReferenceConfirm} />
        )}
      </Box>
    </>
  );
};
export default Country;
