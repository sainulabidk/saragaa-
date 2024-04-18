// import { takeEvery, call } from 'redux-saga/effects';
// import 'react-toastify/dist/ReactToastify.css';
import { put, call, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import config from 'config';
import auth from 'container/auth';
 
import * as actionType from './slice';

function* fetchSupport() {
  try {
    // const filter = action.payload;
    // console.log("===========Customerdataaa=====",actionType.payload);
    //  let page = (filter && filter.page) || 1;
    //  console.log("pageeeeeeeeeeeee",page);
    //   let searchVal = (filter?.searchVal && filter?.searchVal) || '';
    //   let limit = (filter?.limit && filter?.limit) || 10;

    // console.log('++++++++++++++filtervalues++++++++++++', filter);
    let params = {
      api: `${config.Ip}/support`,
      method: 'GET',
      successAction: actionType.getSupportSuccess(),
      failAction: actionType.getSupportFail(),
      authourization: 'token'
    };
    yield call(auth.basicApi, params);
  } catch (error) {
    console.log(error);
  }
}

// function* fetchSupportCount(action) {
//   const filter = action.payload;
//   console.log('=============filter=======================', filter);

//   try {
//     let params = {
//       api: `${config.Ip}/support/count?where=${JSON.stringify(filter)}`,
//       method: 'GET',
//       successAction: actionType.totalCountSuccess(),
//       failAction: actionType.totalCountFail(),
//       authourization: 'token'
//     };

//   yield call(auth.basicApi, params);
   
//   } catch (error) {
//     console.log(error);
//   }
// }



function* fetchSupportById(action) {
  const filter = action.payload;
  console.log('=============filterId=======================', filter);
  try {
    let params = {
      api: `${config.Ip}/support/${action.payload}`,
      method: 'GET',
      successAction: actionType.getSupportByIdSuccess(),
      failAction: actionType.getSupportByIdFail(),
      authourization: 'token'
    };
    yield call(auth.basicApi, params);
  } catch (error) {
    console.log(error);
  }
}

function* addSupport(action) {
  console.log('=========action.payload===========', action.payload);

  try {
    let params = {
      api: `${config.Ip}/support`,
      method: 'POST',
      successAction: actionType.addSupportSuccess(),
      failAction: actionType.addSupportFail(),
      authourization: 'token',
      body: JSON.stringify(action.payload)
    };

    let res = yield call(auth.basicApi, params);

    if (res) {
      // yield put(actionType.getCustomer());
      yield put({ type: actionType.getSupport().type });
      // yield put({ type: actionType.getCustomer().type });
      yield call(() => toast.success('Add Support  successful', { autoClose: 3000 }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateSupportById(action) {
  console.log('================actin.paylad====================', action.payload);

  try {
    let params = {
      api: `${config.Ip}/support/${action.payload.id}`,
      method: 'PUT',
      successAction: actionType.updateSupportSuccess(),
      failAction: actionType.updateSupportFail(),
      authourization: 'token',
      body: JSON.stringify({ ...action.payload, id: undefined }),
      payload: action.payload
    };

    let res = yield call(auth.basicApi, params);
    yield call(() => toast.success('Edit Support successful', { autoClose: 2000 }));

    console.log('=================updateresponse===================', res);
    yield put(getSupport());
  } catch (error) {
    console.log(error);
  }
}

function* deleteSupport(action) {
  console.log(' payload============================', action.payload);
  try {
    let params = {
      api: `${config.Ip}/support/${action.payload}`,
      method: 'DELETE',
      successAction: actionType.deleteSupportSuccess(),
      failAction: actionType.deleteSupportFail(),
      authourization: 'token',
      // body: JSON.stringify(action.payload),
      payload: action.payload
    };

    let res = yield call(auth.basicApi, params);
    yield call(() => toast.error(' Delete Successfully', { autoClose: 3000 }));

    if (res && res.status === 204) {
      //  yield put({ type: actionType.getCountry().type });
      //  yield call(() => toast.success('Delete successful', { autoClose: 3000 }));
      // yield put({
      //   type: actionType.totalCount().type,
      //   payload: { 'where=': {} }
      // });
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* SupportActionWatcher() {
  yield takeEvery('support/getSupport', fetchSupport);
  // yield takeEvery('support/totalCount', fetchSupportCount)
  yield takeEvery('support/addSupport', addSupport);
  yield takeEvery('support/getSupportById', fetchSupportById);
  yield takeEvery('support/updateSupport', updateSupportById);
  yield takeEvery('support/deleteSupport', deleteSupport)
}






























// // import { takeEvery, call } from 'redux-saga/effects';
// // import 'react-toastify/dist/ReactToastify.css';
// import { put, call, takeEvery } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
// import config from 'config';
// import auth from 'container/auth';

// import * as actionType from './slice';
// import { deleteSupport } from 'module/vendor/container/supportContainer/slice';

// function* fetchSupport() {
//   try {
//     // const filter = action.payload;
//     // console.log("===========Supportdataaa=====",actionType.payload);
//     //  let page = (filter && filter.page) || 1;
//     //  console.log("pageeeeeeeeeeeee",page);
//     //   let searchVal = (filter?.searchVal && filter?.searchVal) || '';
//     //   let limit = (filter?.limit && filter?.limit) || 10;

//     // console.log('++++++++++++++filtervalues++++++++++++', filter);
//     let params = {
//       api: `${config.Ip}/support`,
//       method: 'GET',
//       successAction: actionType.getSupportSuccess(),
//       failAction: actionType.getSupportFail(),
//       authourization: 'token'
//     };
//     let res = yield call(auth.basicApi, params);

//     console.log('========Supportdata=====', res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* fetchSupportById(action) {
//   const filter = action.payload;
//   console.log('=============filterId=======================', filter);
//   try {
//     let params = {
//       api: `${config.Ip}/support/${action.payload}`,
//       method: 'GET',
//       successAction: actionType.getSupportByIdSuccess(),
//       failAction: actionType.getSupportByIdFail(),
//       authourization: 'token'
//     };
//     yield call(auth.basicApi, params);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* addSupport(action) {
//   console.log('=========action.payload===========', action.payload);

//   try {
//     let params = {
//       api: `${config.Ip}/support`,
//       method: 'POST',
//       successAction: actionType.addSupportSuccess(),
//       failAction: actionType.addSupportFail(),
//       authourization: 'token',
//       body: JSON.stringify(action.payload)
//     };

//     let res = yield call(auth.basicApi, params);

//     if (res) {
//       // yield put(actionType.getSupport());
//       yield put({ type: actionType.getSupport().type });
//       // yield put({ type: actionType.getSupport().type });
//       yield call(() => toast.success('Add Support  successful', { autoClose: 3000 }));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* updateSupportById(action) {
//   console.log('================actin.paylad====================', action.payload);

//   try {
//     let params = {
//       api: `${config.Ip}/support/${action.payload.id}`,
//       method: 'PUT',
//       successAction: actionType.updateSupportSuccess(),
//       failAction: actionType.updateSupportFail(),
//       authourization: 'token',
//       body: JSON.stringify({ ...action.payload, id: undefined }),
//       payload: action.payload
//     };

//     let res = yield call(auth.basicApi, params);

//     console.log('=================updateresponse===================', res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* deleteSupport(action) {
//   console.log(' payload============================', action.payload);
//   try {
//     let params = {
//       api: `${config.Ip}/support/${action.payload}`,
//       method: 'DELETE',
//       successAction: actionType.deleteSupportSuccess(),
//       failAction: actionType.deleteSupportFail(),
//       authourization: 'token',
//       // body: JSON.stringify(action.payload),
//       payload: action.payload
//     };

//     let res = yield call(auth.basicApi, params);

//     if (res && res.status === 204) {
//       //  yield put({ type: actionType.getCountry().type });
//       //  yield call(() => toast.success('Delete successful', { autoClose: 3000 }));
//       // yield put({
//       //   type: actionType.totalCount().type,
//       //   payload: { 'where=': {} }
//       // });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default function* SupportActionWatcher() {
//   yield takeEvery('support/getSupport', fetchSupport);
//   yield takeEvery('support/addSupport', addSupport);
//   yield takeEvery('support/getSupportById', fetchSupportById);
//   yield takeEvery('support/updateSupport', updateSupportById);
//   yield takeEvery('support/deleteSupport', deleteSupport);
// }
