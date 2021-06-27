import {put, takeEvery, takeLatest, all} from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
  console.log('Hello Sagas!');
}

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(2000);
  yield put({type: 'counter-incremented'});
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchEveryIncrementAsync() {
  yield takeEvery('counter-incremented-every-async', incrementAsync);
}

function* watchLatestIncrementAsync() {
  yield takeLatest('counter-incremented-latest-async', incrementAsync);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchEveryIncrementAsync(),
    watchLatestIncrementAsync(),
  ]);
}
