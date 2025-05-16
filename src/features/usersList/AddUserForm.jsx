import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { use } from 'react';
import { addUser } from './userListSlice';

function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { id: crypto.randomUUID(), name, email };
    dispatch(addUser(newUser));
    setName('');
    setEmail('');
  }
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
      <button
        type='submit'
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Add User
      </button>
    </form>
  );
}

export default AddUserForm;
