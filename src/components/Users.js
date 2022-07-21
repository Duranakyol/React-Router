import React from 'react'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'; 

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .finally(setLoading(false));
  }, []);
  return (
    <div>
      <h1>USERS :</h1>
      { loading && <div>Loading...</div> }
      <ul>
        
        {users.map((user) => (
          <li key={user.id}>
            <NavLink activeClassName="active" to={`/user/${user.id}`}>{user.name }</NavLink>
            </li>
          ) )}
        
      </ul>
    </div>
  )
}

export default Users
