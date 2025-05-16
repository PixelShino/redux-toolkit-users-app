import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchData } from './userListSlice';
import { selectedUser } from '../userDetails/userDetailSlice';

function UserList() {
  const users = useSelector((state) => state.userData.users);
  const loading = useSelector((state) => state.userData.loading);
  const error = useSelector((state) => state.userData.error);
  const dispatch = useDispatch();

  function HandleDeleteUser(user) {
    dispatch(deleteUser(user.id));
  }
  // console.log(users);
  return (
    <div className='user-list'>
      <h2>User List</h2>

      {/* Кнопка загрузки */}
      <button className='load-btn' onClick={() => dispatch(fetchData())}>
        Load Users
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error... {error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} - {user.email}
            </span>

            <div className='btn-group'>
              <button
                className='select-btn'
                onClick={() => dispatch(selectedUser(user.id))}
              >
                Select
              </button>

              <button
                className='delete-btn'
                onClick={() => HandleDeleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
