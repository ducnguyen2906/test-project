import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}

function fetchProduct() {
  return axios({
    method: 'GET',
    url: 'https://5fcc8253603c0c0016486e48.mockapi.io/api/products',
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchProduct);
    const data = response.data;
    console.log(data);
    yield put({ type: 'API_CALL_SUCCESS', data });
  } catch (error) {
    yield put({ type: 'API_CALL_FAILURE', error });
  }
}
