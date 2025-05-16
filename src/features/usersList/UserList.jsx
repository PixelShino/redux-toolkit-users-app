import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers } from './userListSlice';
import { selectedUser } from '../userDetails/userDetailsSlice';

function UserList() {
  const users = useSelector((state) => state.userList.users);
  const dispatch = useDispatch();

  function handleDeleteUser(user) {
    console.log('Deleting user with ID:', user.id);
    dispatch(deleteUser(user.id));
  }
  return (
    <div className='user-list'>
      <h2>User List</h2>

      {/* Кнопка загрузки */}
      <button className='load-btn' onClick={() => dispatch(fetchUsers())}>
        Load Users
      </button>

      <ul>
        {users &&
          users.map((user) => (
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
                  onClick={() => handleDeleteUser(user)}
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
