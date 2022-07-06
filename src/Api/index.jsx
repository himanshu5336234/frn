import { put } from "redux-saga/effects";


// const NEW_HOST = "https://shoplanea.herokuapp.com";














const NEW_HOST = "http://localhost:8080";
export function* getLogin({ payload }) {
  const data = yield fetch(`${NEW_HOST}/signin`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
  if (data.status == true) {
    localStorage.Token = data.Token;
  }
  yield put({ type: "GOT_LOGIN", data });
}







export function* getRegistration({ payload }) {
  const data = yield fetch(`${NEW_HOST}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
  if (data.status == true) {
    localStorage.Token = data.Token;
  }
  yield put({ type: "GOT_LOGIN", data });
}






