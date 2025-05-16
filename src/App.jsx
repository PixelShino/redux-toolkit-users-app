// src/App.jsx

import AddUserForm from "./features/usersList/AddUserForm";
import UserList from "./features/usersList/UserList";
import SelectedUserDetails from "./features/userDetails/SelectedUserDetails";

function App() {
  return (
    <div className="app-container">
      <h1>User Management App</h1>
      <AddUserForm />
      <SelectedUserDetails />
      <UserList />
      
      <footer className="app-footer">
        <a>
          <p className='text-center text-gray-400'>&copy; Dmitrii Goldobin</p>
        </a>
        <a
          href='https://github.com/PixelShino'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className='text-center text-gray-400'>
            <i className='fab fa-github'></i> GitHub
          </p>
        </a>
        <a
          href='https://t.me/PixelShino'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className='text-center text-gray-400'>
            <i className='fab fa-telegram'></i> Telegram
          </p>
        </a>
      </footer>
    </div>
  );
}

export default App;
