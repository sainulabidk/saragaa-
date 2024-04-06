import { takeEvery, call,put } from 'redux-saga/effects';
import 'react-toastify/dist/ReactToastify.css';
import config from 'config';
import auth from 'container/auth';

import * as actionType from './slice';


function* fetchUser(action) {
    try {
      const filter = action.payload;
      console.log("===========uderdataaa=====",action.payload);
     let page = (filter && filter.page) || 1;
     console.log("pageeeeeeeeeeeee",page);
      let searchVal = (filter?.searchVal && filter?.searchVal) || '';
      let limit = (filter?.limit && filter?.limit) || 10;
  
      console.log('++++++++++++++filtervalues++++++++++++', filter);
      let params = {
        api: `${config.Ip}/users?&limit=${limit}&page=${page}&q=${searchVal}`,
        method: 'GET',
        successAction: actionType.getUserSuccess(),
        failAction: actionType.getUserFail(),
        authourization: 'token'
      };
      let res =yield call(auth.basicApi, params);
  
      console.log("finshi", res);
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
 

    // const data =  {
    //   "fName": "ajsal",
    //   "lName": "s",
    //   "email": "ajsall@example.com",
    //   "mobileNo": "6747564565",
    //   "password" : "aju123"
  
    // }
    console.log('=========action.payload===========', action.payload);
    // console.log("========jsonpayload=========",JSON.stringify(action.payload))

  try {
    let params = {
      api: `${config.Ip}/users`,
      method: 'POST',
      successAction: actionType.addUserSuccess(),
      failAction: actionType.addUserFail(),
      authourization: 'token',
      body: JSON.stringify(action.payload)
    };
    let res = yield call(auth.basicApi, params);

    console.log('=========res===========', res);

    if (res) {
      yield put({ type: actionType.getUser().type });
     yield call(() => toast.success('Add User  successful', { autoClose: 3000 }));

      // yield put({
      //   type: actionType.totalCount().type,
      //   payload: { 'where=': {} }
      // });
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
//       api: `${config.Ip}/users/${action.payload}`,
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
    if (res && res.status === 204) {
      //  yield put({ type: actionType.getCountry().type });
    //  yield call(() => toast.success('Delete successful', { autoClose: 3000 }));

      // yield put({
      //   type: actionType.totalCount().type,
      //   payload: { 'where=': {} }
      // });
    }
    console.log("====delted=======",res);

   
  } catch (error) {
    console.log(error);
  }
}


  export default function* UserActionWatcher() {
    yield takeEvery('user/getUser', fetchUser);
    yield takeEvery('user/addUser', addUser);
    yield takeEvery('user/getUserById', fetchUserById);
    yield takeEvery('user/updateUser', updateUserById);
    yield takeEvery('user/deleteUser', deleteUser);
  }
  