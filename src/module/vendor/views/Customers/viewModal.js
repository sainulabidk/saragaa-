import React ,{useEffect} from 'react';
 import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import commonStyles from 'assets/style/Style';


 import { getCustomerById  } from 'module/vendor/container/customerContainer/slice';
const ViewModal = ({data}) => {
  const theme = useTheme();
  const style = commonStyles(theme);
    const dispatch = useDispatch();
    const customerById = useSelector((state) => state.data.customers.customerByIdData);

console.log('===============customerid=====================',customerById);


    useEffect(() => {
      if (data?.id) {
        dispatch(getCustomerById(data?.id));
      }
    }, [dispatch, data]);
console.log('================data====================',data.id);


  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Customer Type</Typography>
            <Typography sx={style.viewModalContent}>{customerById?.custType || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>First Name</Typography>
            <Typography sx={style.viewModalContent}>{customerById?.fName || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Last Name</Typography>
            <Typography sx={style.viewModalContent}>{customerById?.lName || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Email</Typography>
            <Typography sx={style.viewModalContent}>{customerById?.email || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>Mobile</Typography>
            <Typography sx={style.viewModalContent}>{customerById?.contactMobile1 || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>WhatsApp</Typography>
            <Typography sx={style.viewModalContent}>{customerById?.contactMobile2 || '-'}</Typography>
          </Grid>
        
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>addr1</Typography>
            <Typography sx={style.viewModalContent}>{customerById?.address?.addr1 || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>State</Typography>
            <Typography sx={style.viewModalContent}>{customerById?.address?.state?.name || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>District</Typography>
            <Typography sx={style.viewModalContent}>{customerById?.address?.district?.name || '-'}</Typography>
          </Grid>
          <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
            <Typography sx={style.viewModalLab}>District</Typography>
            <Typography sx={style.viewModalContent}>{customerById?.address?.district?.name || '-'}</Typography>
          </Grid>

        
        </Grid>
      </Box>
    </>
  );
};

export default ViewModal;
