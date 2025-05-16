const initialState = {
  loading: false,
  error: null,
  users: [],
  selectedUser: null,
};
export default function userListReducer(state = initialState, action) {
  switch (action.type) {
    case 'userList/fetchData': {
      return { ...state, loading: true, error: null };
    }
    case 'userList/fetchDataSuccess': {
      return { ...state, loading: false, users: action.payload };
    }
    case 'userList/fetchDataError': {
      return { ...state, loading: false, error: action.payload };
    }

    case 'userList/addUser': {
      return { ...state, users: [...state.users, action.payload] };
    }
    case 'userList/deleteUser': {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
}

export function fetchData() {
  return async function (dispatch, getState) {
    dispatch({ type: 'userList/fetchData' });
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      dispatch({ type: 'userList/fetchDataSuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'userList/fetchDataError', payload: err.message });
      //   throw new Error(err);
    }
  };
}

export function addUser(user) {
  return {
    type: 'userList/addUser',
    payload: user,
  };
}

export function deleteUser(id) {
  return {
    type: 'userList/deleteUser',
    payload: id,
  };
}
