import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './userListSlice';
import { useState } from 'react';
function AddUserForm() {
  const dispatch = useDispatch();
  const logUsers = useSelector((state) => state.userList.users);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUser({ name: name, email: email, id: crypto.randomUUID() }));
    setName('');
    setEmail('');
  }

  // console.log(logUsers);
  return (
    <form className='add-user-form'>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit' onClick={(e) => handleSubmit(e)}>
        Add User
      </button>
    </form>
  );
}

export default AddUserForm;
