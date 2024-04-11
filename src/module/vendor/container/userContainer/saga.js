import { takeEvery, call, put } from 'redux-saga/effects';
import 'react-toastify/dist/ReactToastify.css';
import config from 'config';
import auth from 'container/auth';
import * as actionType from './slice';
import { toast } from 'react-toastify';

function* fetchUser() {
  try {
    // const filter = action.payload;
    // let page = (filter && filter.page) || 1;
    // console.log("page",page);
    // let searchVal = (filter?.searchVal && filter?.searchVal) || '';
    // let limit = (filter?.limit && filter?.limit) || 10;
    // console.log('++++++++++++++filtervakues++++++++++++', filter);
    let params = {
      api: `${config.Ip}/users`,
      method: 'GET',
      successAction: actionType.getUserSuccess(),
      failAction: actionType.getUserFail(),
      authourization: 'token'
    };
    yield call(auth.basicApi, params);
  } catch (error) {
    console.log(error);
  }
}

function* fetchUserCount() {
  try {
    let params = {
      api: `${config.Ip}/users/count`,
      method: 'GET',
      successAction: actionType.totalCountSuccess(),
      failAction: actionType.totalCountFail(),
      authourization: 'token'
    };
      yield call(auth.basicApi, params);
  } catch (error) {
    console.log(error);
  }
}

function* fetchUserById(action) {
  const filter = action.payload;
  console.log('=============filterId=======================', filter);
  try {
    let params = {
      api: `${config.Ip}/users/${action.payload}`,
      method: 'GET',
      successAction: actionType.getUserByIdSuccess(),
      failAction: actionType.getUserByIdFail(),
      authourization: 'token'
    };
    yield call(auth.basicApi, params);
  } catch (error) {
    console.log(error);
  }
}

function* addUser(action) {
  try {
    const params = {
      api: `${config.Ip}/users/createUser`,
      method: 'POST',
      successAction: actionType.addUserSuccess, // Pass the action type without invoking the function
      failAction: actionType.addUserFail, // Pass the action type without invoking the function
      authorization: 'token', // Correct the spelling of "authorization"
      body: JSON.stringify(action.payload)
    };
    const res = yield call(auth.basicApi, params);

    console.log('=========res===========', res);

    if (res) {
      yield put({ type: actionType.getUser().type });
      // yield call(() => toast.success('Add User successful', { autoClose: 3000 }));
      toast.success("user added",{autoClose:3000})
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateUserById(action) {
  console.log('================actin.paylad====================', action.payload);

  try {
    let params = {
      api: `${config.Ip}/users/${action.payload.id}`,
      method: 'PATCH',
      successAction: actionType.updateUserSuccess(),
      failAction: actionType.updateUserFail(),
      authourization: 'token',
      body: JSON.stringify({ ...action.payload, id: undefined }),
      payload: action.payload
    };

    let res = yield call(auth.basicApi, params);

    console.log('=================updateresponse===================', res);

    // if (res && res.status === 204) {

    // }
  } catch (error) {
    console.log(error);
  }
}

// function* deleteUser(action) {
//   console.log(' payload============================', action.payload);
//   try {
//     let params = {
//       api: ${config.Ip}/users/${action.payload},
//       method: 'DELETE',
//       successAction: actionType.deleteUserSuccess(),
//       failAction: actionType.deleteUserFail(),
//       authourization: 'token',
//       // body: JSON.stringify(action.payload),
//       payload: action.payload
//     };

//     let res = yield call(auth.basicApi, params);

//     console.log("====delted=======",res);

//     if (res && res.status === 204) {
//       //  yield put({ type: actionType.getCountry().type });
//     //  yield call(() => toast.success('Delete successful', { autoClose: 3000 }));

//       // yield put({
//       //   type: actionType.totalCount().type,
//       //   payload: { 'where=': {} }
//       // });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

function* deleteUser(action) {
  console.log(' payload============================', action.payload);
  try {
    let params = {
      api: `${config.Ip}/users/${action.payload}`,
      method: 'DELETE',
      successAction: actionType.deleteUserSuccess(),
      failAction: actionType.deleteUserFail(),
      authourization: 'token',
      // body: JSON.stringify(action.payload),
      payload: action.payload
    };

    let res = yield call(auth.basicApi, params);
    if (res) {
       toast.success('Delete successful', { autoClose: 3000 });


      //  yield put({ type: actionType.getCountry().type });
    // toast.error('Delete successful', { autoClose: 3000 })
      // yield put({
      //   type: actionType.totalCount().type,
      //   payload: { 'where=': {} }
      // });
    }
    console.log('====delted=======', res);
  } catch (error) {
    console.log(error);
  }
}

export default function* UserActionWatcher() {
  yield takeEvery('user/getUser', fetchUser);
  yield takeEvery('user/addUser', addUser);
  yield takeEvery('user/totalCount', fetchUserCount);
  yield takeEvery('user/getUserById', fetchUserById);
  yield takeEvery('user/updateUser', updateUserById);
  yield takeEvery('user/deleteUser', deleteUser);
}