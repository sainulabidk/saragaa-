import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    Grid,
    Box,
    Card,
    CardContent,
    Divider,
    Typography,
} from '@mui/material';
import TextField from 'ui-component/common/TextField';
import { IconBuildingBank, IconUser } from '@tabler/icons';
import './Profile.css';
import User from './User';
import { getProfileById } from 'module/vendor/container/profile/slice';
import commonStyles from 'assets/style/Style';
import { useTheme } from '@mui/material/styles';

function Index() {

    const theme = useTheme();
    const style = commonStyles(theme);

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getProfileById());
    // }, [dispatch]);

    const profileById = useSelector((state) => state.data.profile.profileByIdData);

    useEffect(() => {
        dispatch(getProfileById());
        console.log('===============prifile=====================', profileById);
    }, [dispatch,profileById]);



    const initialValues = {
        contactMobile1: '',
        contactMobile2: '',
        // GSTIN: '',
        Country: '',
        State: '',
        District: '',
        City: '',
        Region: '',
        'Land Mark': '',
        addr1: '',
        addr2: '',
        Pincode: '',
        BankName: '',
        AccountantName: '',
        AccountType: '',
        AccountNo: '',
        BranchName: '',
        BranchAddress: '',
        IFSCCode: '',
        UPIId: '',
        CreditPeriod: '',
        CreditLimit: '',
    };

    const validationSchema = Yup.object({
        contactMobile1: Yup.string().required('Contact Mobile 1 is Required'),
        contactMobile2: Yup.string().required('Contact Mobile 2 is Required'),
        // GSTIN: Yup.string().required('GSTIN is Required'),
        Country: Yup.string().required('Country is Required'),
        State: Yup.string().required('State is Required'),
        District: Yup.string().required('District is Required'),
        City: Yup.string().required('City is Required'),
        Region: Yup.string().required('Region is Required'),
        'Land Mark': Yup.string().required('Land Mark is Required'),
        addr1: Yup.string().required('Address Line 1 is Required'),
        addr2: Yup.string().required('Address Line 2 is Required'),
        Pincode: Yup.string().required('Pincode is Required'),
        BankName: Yup.string().required('Bank Name is Required'),
        AccountantName: Yup.string().required('Accountant Name is Required'),
        AccountType: Yup.string().required('Account Type is Required'),
        AccountNo: Yup.string().required('Account Number is Required'),
        BranchName: Yup.string().required('Branch Name is Required'),
        BranchAddress: Yup.string().required('Branch Address is Required'),
        IFSCCode: Yup.string().required('IFSC Code is Required'),
        UPIId: Yup.string().required('UPI Id is Required'),
        CreditPeriod: Yup.string().required('Credit Period is Required'),
        CreditLimit: Yup.string().required('Credit Limit is Required'),
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box>
            <Grid style={{ backgroundColor: '#fff', borderRadius: '14px' }}>

                {/* {profileData ? (
                    profileData.map((profile) => (
                        <div key={profile.id}>
                            {profile.userId ? (
                                <Card style={{backgroundColor:"Red"}}>
                                    <p>{profile.userId.id || '-'}</p>
                                    <p>{profile.userId.fName || '-'}</p>
                                    <p>{profile.userId.lName || '-'}</p>
                                    <p>{profile.userId.email || '-'}</p>
                                    <p>{profile.userId.mobileNo || '-'}</p>
                                </Card>
                            ) : (
                                <p>Missing user data</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )} */}


                <Card>
                    <CardContent>
                        <User />
                    </CardContent>
                    <Divider />
                    <CardContent className='photocontent'>
                        <Typography variant="h4" className='textcontent'>
                            <IconUser className='textcontenticon' /> Update Profile
                        </Typography>
                    </CardContent>
                    <Divider />

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        enableReinitialize={true}
                    >
                        <Form>
                            <Grid container spacing={2} className='textcard'>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >Contact Mobile 1</Typography>
                                    <Field
                                        type="text"
                                        name="contactMobile1"
                                        id="contactMobile1"
                                        placeholder="Contact Mobile 1"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="contactMobile1"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >Contact Mobile 2</Typography>
                                    <Field
                                        type="text"
                                        name="contactMobile2"
                                        id="contactMobile2"
                                        placeholder="Contact Mobile 2"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="contactMobile2"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>

                                {/* <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >GST</Typography>
                                    <Field
                                        type="text"
                                        name="GSTIN"
                                        id="GSTIN"
                                        placeholder="GST"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="GSTIN"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid> */}
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >Country</Typography>
                                    <Field
                                        type="text"
                                        name="Country"
                                        id="Country"
                                        placeholder="Country"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="Country"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >State</Typography>
                                    <Field
                                        type="text"
                                        name="State"
                                        id="State"
                                        placeholder="State"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="State"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >District</Typography>
                                    <Field
                                        type="text"
                                        name="District"
                                        id="District"
                                        placeholder="District"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="District"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >City</Typography>
                                    <Field
                                        type="text"
                                        name="City"
                                        id="City"
                                        placeholder="City"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="City"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >Region</Typography>
                                    <Field
                                        type="text"
                                        name="Region"
                                        id="Region"
                                        placeholder="Region"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="Region"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >Land Mark</Typography>
                                    <Field
                                        type="text"
                                        name="Land Mark"
                                        id="Land Mark"
                                        placeholder="Land Mark"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="Land Mark"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >Address Line 1</Typography>
                                    <Field
                                        type="text"
                                        name="addr1"
                                        id="addr1"
                                        placeholder="Address Line 1"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="addr1"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >Address Line 2</Typography>
                                    <Field
                                        type="text"
                                        name="addr2"
                                        id="addr2"
                                        placeholder="Address Line 2"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="addr2"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography  >Pincode</Typography>
                                    <Field
                                        type="text"
                                        name="Pincode"
                                        id="Pincode"
                                        placeholder="Pincode"
                                        as={TextField}
                                    />
                                    <ErrorMessage
                                        name="Pincode"
                                        component="div"
                                        style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item md={12}>
                                <CardContent className='photocontent'>
                                    <Typography variant="h4" className='textcontent'>
                                        <IconBuildingBank className='textcontenticon' /> Bank Details
                                    </Typography>
                                </CardContent>
                                <Divider />
                                <Grid container spacing={2} className='textcard' >
                                    {/* Bank details form fields go here */}
                                    <Grid item xs={12} sm={4}>
                                        <Typography  >Bank Name</Typography>
                                        <Field
                                            type="text"
                                            placeholder="Bank Name"
                                            name="BankName"
                                            as={TextField}
                                        />
                                        <ErrorMessage
                                            name="BankName"
                                            component="div"
                                            style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography  >Accountant Name</Typography>
                                        <Field
                                            type="text"
                                            placeholder="Accountant Name"
                                            name="AccountantName"
                                            as={TextField}
                                        />
                                        <ErrorMessage
                                            name="AccountantName"
                                            component="div"
                                            style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography  >Account Type</Typography>
                                        <Field
                                            type="text"
                                            placeholder="Account Type"
                                            name="AccountType"
                                            as={TextField}
                                        />
                                        <ErrorMessage
                                            name="AccountType"
                                            component="div"
                                            style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography  >Account Number</Typography>
                                        <Field
                                            type="number"
                                            placeholder="Account Number"
                                            name="AccountNo"
                                            as={TextField}
                                        />
                                        <ErrorMessage
                                            name="AccountNo"
                                            component="div"
                                            style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography  >Branch Name</Typography>
                                        <Field
                                            type="text"
                                            placeholder="Branch Name"
                                            name="BranchName"
                                            as={TextField}
                                        />
                                        <ErrorMessage
                                            name="BranchName"
                                            component="div"
                                            style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography  >Branch Address</Typography>
                                        <Field
                                            type="text"
                                            placeholder="Branch Address"
                                            name="BranchAddress"
                                            as={TextField}
                                        />
                                        <ErrorMessage
                                            name="BranchAddress"
                                            component="div"
                                            style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography  >IFSC Code</Typography>
                                        <Field
                                            type="text"
                                            placeholder="IFSC Code"
                                            name="IFSCCode"
                                            as={TextField}
                                        />
                                        <ErrorMessage
                                            name="IFSCCode"
                                            component="div"
                                            style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography  >UPI Id</Typography>
                                        <Field
                                            type="text"
                                            placeholder="UPI Id"
                                            name="UPIId"
                                            as={TextField}
                                        />
                                        <ErrorMessage
                                            name="UPIId"
                                            component="div"
                                            style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography  >Credit Period</Typography>
                                        <Field
                                            type="text"
                                            placeholder="Credit Period"
                                            name="CreditPeriod"
                                            as={TextField}
                                        />
                                        <ErrorMessage
                                            name="CreditPeriod"
                                            component="div"
                                            style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography  >Credit Limit</Typography>
                                        <Field
                                            type="text"
                                            placeholder="Credit Limit"
                                            name="CreditLimit"
                                            as={TextField}
                                        />
                                        <ErrorMessage
                                            name="CreditLimit"
                                            component="div"
                                            style={{ color: '#f54d4f', fontSize: 12, display: 'flex', justifyContent: 'center', position: 'relative', bottom: '5px' }}
                                        />
                                    </Grid>


                                    <Grid item md={12} className='password-btn'>
                                        <Button type="submit" sx={style.changeBtn}>Save</Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Card>
            </Grid>

        </Box >
    );
}

export default Index;
