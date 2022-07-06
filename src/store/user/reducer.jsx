// Set initial state
const initialState = {
  LoginData:{},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "GOT_LOGIN": {
      return {
        ...state,
        LoginData: action.data,
      };
    }
    default:
      return state;
  }
}
