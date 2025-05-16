import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedUser } from './userDetailSlice';

function SelectedUserDetails() {
  const dispatch = useDispatch();
  const selectedUserId = useSelector(
    (state) => state.userDetail.selectedUserId,
  );
  const users = useSelector((state) => state.userData.users);
  const loading = useSelector((state) => state.userData.loading);

  if (!selectedUserId) {
    return <p>No user selected</p>;
  }
  const user = users.find((user) => user.id === selectedUserId);

  if (!user) {
    return <p>User not found</p>;
  }
  return (
    <div className='selected-user-details'>
      <h2>Selected User</h2>
      <p>
        <strong>Name: {user.name} </strong>
      </p>
      <p>
        <strong>Email: {user.email}</strong>
      </p>

      <button
        className='clear-btn'
        onClick={() => dispatch(clearSelectedUser(user.id))}
      >
        Clear Selection
      </button>
    </div>
  );
}

export default SelectedUserDetails;
