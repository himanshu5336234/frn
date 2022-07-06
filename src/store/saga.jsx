import * as Users from "../Api/index";
import { takeLatest, all } from "redux-saga/effects";



function* userActionWatcher() {

 yield takeLatest("REGISTRATION", Users.getRegistration);
 yield takeLatest("LOGIN", Users.getLogin);

}













export default function* rootSaga() {
  yield all([
    userActionWatcher()
  ]);
}
