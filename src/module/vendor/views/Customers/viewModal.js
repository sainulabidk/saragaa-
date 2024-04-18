// import React ,{useEffect} from 'react';
//  import { useDispatch, useSelector } from 'react-redux';
// import Box from '@mui/system/Box';
// import Grid from '@mui/material/Grid';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import commonStyles from 'assets/style/Style';


//  import { getCustomerById  } from 'module/vendor/container/customerContainer/slice';
// const ViewModal = ({data}) => {
//   const theme = useTheme();
//   const style = commonStyles(theme);
//     const dispatch = useDispatch();
//     const customerById = useSelector((state) => state.data.customers.customerByIdData);

// console.log('===============customerid=====================',customerById);


//     useEffect(() => {
//       if (data?.id) {
//         dispatch(getCustomerById(data?.id));
//       }
//     }, [dispatch, data]);
// console.log('================data====================',data.id);


//   return (
//     <>
//       <Box>
//         <Grid container spacing={3}>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Customer Type</Typography>
//             <Typography sx={style.viewModalContent}>{customerById?.custType || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>First Name</Typography>
//             <Typography sx={style.viewModalContent}>{customerById?.fName || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Last Name</Typography>
//             <Typography sx={style.viewModalContent}>{customerById?.lName || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Email</Typography>
//             <Typography sx={style.viewModalContent}>{customerById?.email || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Mobile</Typography>
//             <Typography sx={style.viewModalContent}>{customerById?.contactMobile1 || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>WhatsApp</Typography>
//             <Typography sx={style.viewModalContent}>{customerById?.contactMobile2 || '-'}</Typography>
//           </Grid>
        
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>addr1</Typography>
//             <Typography sx={style.viewModalContent}>{customerById?.address?.addr1 || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>State</Typography>
//             <Typography sx={style.viewModalContent}>{customerById?.address?.state?.name || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>District</Typography>
//             <Typography sx={style.viewModalContent}>{customerById?.address?.district?.name || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>District</Typography>
//             <Typography sx={style.viewModalContent}>{customerById?.address?.district?.name || '-'}</Typography>
//           </Grid>

        
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default ViewModal;

// import React ,{useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Box from '@mui/system/Box';
// import Grid from '@mui/material/Grid';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import commonStyles from 'assets/style/Style';
// import { getCustomerById  } from 'module/vendor/container/customerContainer/slice';

// const ViewModal = ({data}) => {
//   const theme = useTheme();
//   const style = commonStyles(theme);
//     const dispatch = useDispatch();
//     const customerByIdData = useSelector((state) => state.data.customer.customerByIdData);
//     console.log('===============customerid=====================',customerByIdData);

//     useEffect(() => {
//       if (data?.id) {
//         dispatch(getCustomerById(data?.id));
//       }
//     }, [dispatch, data]);
// console.log('================data====================',data.id);

//   return (
//     <>
//       <Box>
//         <Grid container spacing={3}>
//         <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Customer Type</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.custType || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>First Name</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.fName || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Last Name</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.lName || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Email</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.email || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Mobile</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.contactMobile1 || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Whatsapp</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.contactMobile2 || '-'}</Typography>
//           </Grid>

//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Country</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.address?.country?.name || '-'}</Typography>
//           </Grid>

//           {/* <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>State</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.address?.state || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>District</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.address?.district || '-'}</Typography>
//           </Grid> */}
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Region</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.address?.region || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>City</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.address?.city || '-'}</Typography>
//           </Grid>


//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Address LineI</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.address?.addr1 || '-'}</Typography>
//           </Grid>
//           <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
//             <Typography sx={style.viewModalLab}>Address LineII</Typography>
//             <Typography sx={style.viewModalContent}>{customerByIdData?.address?.addr2 || '-'}</Typography>
//           </Grid>
        
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default ViewModal;


import React ,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Tab, Tabs } from '@mui/material';

import commonStyles from 'assets/style/Style';
import { getCustomerById  } from 'module/vendor/container/customerContainer/slice';

const ViewModal = ({data}) => {
  const theme = useTheme();
  const style = commonStyles(theme);
    const dispatch = useDispatch();
    const customerByIdData = useSelector((state) => state.data.customers.customerByIdData);
    console.log('===============customerid=====================',customerByIdData);

    useEffect(() => {
      if (data?.id) {
        dispatch(getCustomerById(data?.id));
      }
    }, [dispatch, data]);
console.log('================data====================',data.id);
const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <Box>
      <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
            <Tab label="Basic Details" />
            <Tab label="Additional Details" />
            <Tab label="General Details" />
        </Tabs>

        <TabPanel value={currentTab} index={0}>  
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Customer Type</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.custType || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>First Name</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.fName || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Last Name</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.lName || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Email</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.email || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Mobile(Primary)</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.contactMobile1 || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Mobile(Secondary)</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.contactMobile2 || '-'}</Typography>
          </Grid>
          </Grid>
          </TabPanel>
          
          <TabPanel value={currentTab} index={1}>
          <Grid container spacing={2}>

            <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
              <Typography sx={style.viewModalLab}>Country</Typography>
              <Typography sx={style.viewModalContent}>{customerByIdData?.address?.country?.name || '-'}</Typography>
            </Grid>

          {/* <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>State</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.address?.state || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>District</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.address?.district || '-'}</Typography>
          </Grid> */}
          </Grid>
          </TabPanel>

          <TabPanel value={currentTab} index={2}>
          <Grid container spacing={2}>
          {/* <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Region</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.address?.region || '-'}</Typography>
          </Grid> */}
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>City</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.address?.city || '-'}</Typography>
          </Grid>


          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Address LineI</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.address?.addr1 || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Address LineII</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.address?.addr2 || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Postal Code</Typography>
            <Typography sx={style.viewModalContent}>{customerByIdData?.address?.postalCode || '-'}</Typography>
          </Grid>
        
        </Grid>
        </TabPanel>

      </Box>
    </>
  );
};

export default ViewModal;

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


