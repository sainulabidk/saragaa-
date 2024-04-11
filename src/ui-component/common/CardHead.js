import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import commonStyles from 'assets/style/Style';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style'; 
import { getCustomer } from '../../module/vendor/container/customerContainer/slice';

//import formatLabel from 'utils/formatLabel';
// import { Select,
  //  FormControl,
  //  InputLabel,
  //   Chip, ListItemIcon, Checkbox, 
    // MenuItem } from '@mui/material';


const CardHead = ({
  tableHeading,
  hasHead= true,
  hasAdd = true,
  handleAddModal,
  hasSearch = true,
  searchHandler,
  // hasFilter = true,
  // searchValue,
  // searchWithFiltr = [],
  // filterHandler,

  //.................................
  // filterOptions,
  // selectedOptions,
  // handleStatusFltr,
  // sortOptions,
  // handleSortChange,
  // sortValue
}) => {
  const theme = useTheme();

  const style = commonStyles(theme);
  const styling = styles(theme)

  const dispatch = useDispatch()
  const dataval = useSelector((state) => state.data.customers.customerData.count)
  console.log('=================userCount===================', dataval);
  useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);


  return (
    <Grid container sx={style.listGrid1}>
      <Box sx={style.listBox}>
        <Box sx={{ width: '100%'}}>
          <Grid container>
            {hasHead &&(
               <Grid item xs={11} md={4} style={{display:'flex', alignItems:'center'}} >
               <Box sx={styling.modalHeadContent}>{tableHeading ? tableHeading : 'Add Heading'}</Box>
             </Grid>
            )}
            <Grid item xs={12} md={4} sm={10}>
              {/* {hasFilter && (
                <Select sx={style.listSelect} value={searchValue} onChange={filterHandler} fullWidth>
                  {searchWithFiltr.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              )} */}
              {hasSearch && (
                <TextField
                  sx={style.listSearch}
                  placeholder="Search Here"
                  InputLabelProps={{
                    shrink: false
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                  className="searchOne"
                  onChange={searchHandler}
                />
              )}
            </Grid>
            {hasAdd && (
              <Grid item xs={12} md={4} sm={2} sx={style.listSecGrid}>
                {/* <Grid>
                  <FormControl sx={{ width: 150, height: '45px', marginRight: '12px' }}> */}
                    {/* <InputLabel sx={style.listFiltrLbl} id="multi-select-label">
                      Filter
                    </InputLabel> */}
                    {/* <Select
                      labelId="multi-select-label"
                      id="multi-select"
                      fullWidth
                      multiple
                      value={selectedOptions}
                      onChange={handleStatusFltr}
                      sx={{
                        height: '48px'
                      }}
                      renderValue={(selected) => {
                        let ellipsisDisplayed = false;
                        return (
                          <div>
                            {selected?.map((value, index) => {
                              if (index === 0 || index === 1) {
                                return <Chip sx={style.listChipFilter} key={index} label={value} />;
                              } else if (!ellipsisDisplayed) {
                                ellipsisDisplayed = true;
                                return <Chip sx={style.listChipFilter} key={index} label="...." />;
                              }
                              return null;
                            })}
                          </div>
                        );
                      }}
                    > */}
                      {/* {filterOptions?.map((option) => (
                        <MenuItem key={option} value={option}>
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={selectedOptions.indexOf(option) > -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ 'aria-labelledby': option }}
                            />
                            <Box sx={{ margin: 'auto' }}> {formatLabel(option)}</Box>
                          </ListItemIcon>
                        </MenuItem>
                      ))} */}
                    {/* </Select> */}
                  {/* </FormControl>
                </Grid> */}
                {/* {sortOptions && (
                  <Grid>
                    <FormControl>
                      <Select
                        sx={{ width: 150, height: '45px' }}
                        value={sortValue}
                        onChange={handleSortChange}
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        {sortOptions.map((option, index) => (
                          <MenuItem key={index} value={option.value}>
                            {option.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                )} */}
                <Box sx={styling.modalResult}><FilterAltSharpIcon/>Result : {dataval} </Box>
                <Button
                  color="info"
                  variant="contained"
                  onClick={() => {
                    handleAddModal();
                  }}
                  sx={style.addBtnHead}
                >
                  +ADD
                </Button>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};



export default CardHead;
















//........................................................................................






// import React from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import commonStyles from 'assets/style/Style';
// import { useTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';
// //import formatLabel from 'utils/formatLabel';
// // import { Select,
//   //  FormControl,
//   //  InputLabel,
//   //   Chip, ListItemIcon, Checkbox, 
//     // MenuItem } from '@mui/material';
// import PropTypes from 'prop-types';

// const CardHead = ({
//   hasAdd = true,
//   handleAddModal,
//   hasSearch = true,
//   searchHandler,
//   // hasFilter = true,
//   // searchValue,
//   // searchWithFiltr = [],
//   // filterHandler,

//   //.................................
//   // filterOptions,
//   // selectedOptions,
//   // handleStatusFltr,
//   // sortOptions,
//   // handleSortChange,
//   // sortValue
// }) => {
//   const theme = useTheme();
//   const style = commonStyles(theme);

//   return (
//     <Grid container sx={style.listGrid1}>
//       <Box sx={style.listBox}>
//         <Box sx={{ display: 'flex', width: '100%', background:'red' }}>
//           <Grid container>
//             <Grid item xs={12} md={8} sm={10}>
//               {/* {hasFilter && (
//                 <Select sx={style.listSelect} value={searchValue} onChange={filterHandler} fullWidth>
//                   {searchWithFiltr.map((option, index) => (
//                     <MenuItem key={index} value={option.value}>
//                       {option.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               )} */}
//               {hasSearch && (
//                 <TextField
//                   sx={style.listSearch}
//                   placeholder="Search Here"
//                   InputLabelProps={{
//                     shrink: false
//                   }}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <SearchIcon />
//                       </InputAdornment>
//                     )
//                   }}
//                   className="searchOne"
//                   onChange={searchHandler}
//                 />
//               )}
//             </Grid>
//             {hasAdd && (
//               <Grid item xs={12} md={4} sm={2} sx={style.listSecGrid}>
//                 {/* <Grid>
//                   <FormControl sx={{ width: 150, height: '45px', marginRight: '12px' }}> */}
//                     {/* <InputLabel sx={style.listFiltrLbl} id="multi-select-label">
//                       Filter
//                     </InputLabel> */}
//                     {/* <Select
//                       labelId="multi-select-label"
//                       id="multi-select"
//                       fullWidth
//                       multiple
//                       value={selectedOptions}
//                       onChange={handleStatusFltr}
//                       sx={{
//                         height: '48px'
//                       }}
//                       renderValue={(selected) => {
//                         let ellipsisDisplayed = false;
//                         return (
//                           <div>
//                             {selected?.map((value, index) => {
//                               if (index === 0 || index === 1) {
//                                 return <Chip sx={style.listChipFilter} key={index} label={value} />;
//                               } else if (!ellipsisDisplayed) {
//                                 ellipsisDisplayed = true;
//                                 return <Chip sx={style.listChipFilter} key={index} label="...." />;
//                               }
//                               return null;
//                             })}
//                           </div>
//                         );
//                       }}
//                     > */}
//                       {/* {filterOptions?.map((option) => (
//                         <MenuItem key={option} value={option}>
//                           <ListItemIcon>
//                             <Checkbox
//                               edge="start"
//                               checked={selectedOptions.indexOf(option) > -1}
//                               tabIndex={-1}
//                               disableRipple
//                               inputProps={{ 'aria-labelledby': option }}
//                             />
//                             <Box sx={{ margin: 'auto' }}> {formatLabel(option)}</Box>
//                           </ListItemIcon>
//                         </MenuItem>
//                       ))} */}
//                     {/* </Select> */}
//                   {/* </FormControl>
//                 </Grid> */}
//                 {/* {sortOptions && (
//                   <Grid>
//                     <FormControl>
//                       <Select
//                         sx={{ width: 150, height: '45px' }}
//                         value={sortValue}
//                         onChange={handleSortChange}
//                         inputProps={{ 'aria-label': 'Without label' }}
//                       >
//                         {sortOptions.map((option, index) => (
//                           <MenuItem key={index} value={option.value}>
//                             {option.name}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                 )} */}
//                 <Button
//                   color="info"
//                   variant="contained"
//                   onClick={() => {
//                     handleAddModal();
//                   }}
//                   sx={style.addBtnHead}
//                 >
//                   +ADD
//                 </Button>
//               </Grid>
//             )}
//           </Grid>
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

// CardHead.propTypes = {
//   hasAdd: PropTypes.bool,
//   handleAddModal: PropTypes.func.isRequired,
//   hasSearch: PropTypes.bool,
//   searchHandler: PropTypes.func.isRequired,
//   hasFilter: PropTypes.bool,
//   searchValue: PropTypes.string,
//   searchWithFiltr: PropTypes.array,
//   filterOptions: PropTypes.array,
//   selectedOptions: PropTypes.array,
//   handleStatusFltr: PropTypes.func,
//   // sortOptions: PropTypes.array,
//   // handleSortChange: PropTypes.func,
//   // sortValue: PropTypes.string
// };

// export default CardHead;
