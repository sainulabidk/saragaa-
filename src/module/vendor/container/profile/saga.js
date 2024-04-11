import { takeEvery, call } from 'redux-saga/effects';
import 'react-toastify/dist/ReactToastify.css';
import config from 'config';
import auth from 'container/auth';

import * as actionType from './slice';

// GET

function* fetchProf() {
  try {
    let params = {
      api: `${config.Ip}/userProf`,
      method: 'GET',
      successAction: actionType.getProfileSuccess(),
      failAction: actionType.getProfileFail(),
      authourization: 'token'

    };
    let res = yield call(auth.basicApi, params);

    console.log("========GetProfile.data=====", res);
  } catch (error) {
    console.log(error);
  }
}

// Add Profile
function* addProfile(action) {
  console.log('=========Add.Profile.action.payload===========', action.payload);
try {
  let params = {
    api: `${config.Ip}/userProf`,
    method: 'POST',
    successAction: actionType.addProfileSuccess,
    failAction: actionType.addProfileFail,
    authourization: 'token',
    body: JSON.stringify(action.payload)
  };
  let res = yield call(auth.basicApi, params);
  if (res) {
    // yield put(actionType.getCustomer());
    yield put({ type: actionType.getProfile().type })
    // yield put({ type: actionType.getCustomer().type });
   yield call(() => toast.success('Add Profile  successful', { autoClose: 3000 }));

  }
} catch (error) {
  console.log(error);
}
}

// GET BY ID 

// function* fetchProfById(action) {
//   try {
//     let params = {
//       api: `${config.Ip}/userProf/${userId}`,
//       method: 'GET',
//       successAction: actionType.getProfileByIdSuccess(),
//       failAction: actionType.getProfileByIdFail(),
//       authorization: 'token'
//     };
//     yield call(auth.basicApi, params);
//     console.log("========GetIdProfile.data=====", res);
//   } catch (error) {
//     console.log(error);
//   }
// }

function* fetchProfById() {
  // const filter = action.payload;
  // console.log('=============filterId=======================', filter);
  try {
    let params = {
      api: `${config.Ip}/userProf/660efd74a5beb2cbd9afed69`,
      method: 'GET',
      successAction: actionType.getProfileByIdSuccess(),
      failAction: actionType.getProfileByIdFail(),
      authourization: 'token'
    };
   yield call(auth.basicApi, params);
   console.log('=============userProf=======================', res);
  } catch (error) {
    console.log(error);
  }
}


// Update profile

function* updateProfileById(action) {
  console.log('================actin.paylad====================', action.payload);

  try {
    let params = {
      api: `${config.Ip}/userProf/{userId}/${action.payload.id}`,
      method: 'PUT',
      successAction: actionType.updateProfileSuccess(),
      failAction: actionType.updateProfileFail(),
      authourization: 'token',
      body: JSON.stringify({ ...action.payload, id: undefined }),
      payload: action.payload
    };

    let res = yield call(auth.basicApi, params);

    console.log('=================updateResProfile===================', res);

  } catch (error) {
    console.log(error);
  }
}

export default function* ProfileActionWatcher() {
  yield takeEvery('profile/getProfile', fetchProf);
  yield takeEvery('profile/addProfile', addProfile);
  yield takeEvery('profile/getProfileById', fetchProfById);
  yield takeEvery('profile/updateProfile', updateProfileById);
}
