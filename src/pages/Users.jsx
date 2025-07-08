import React, { useState } from "react";
import UsersList from "../components/users/UsersList";

function Users() {
  const [usersData, setUsersData] = useState([]);
  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setUsersData(result);
    } catch (error) {
      console.log(error);
    }
  }
  function resetList() {
    setUsersData([]);
  }

  // getUsers();
  return (
    <div>
      <h1>
        Users 목록 <button onClick={getUsers}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>
      <div>
        {usersData.map(function (item, index) {
          return (
            <UsersList
              id={item.id}
              names={item.name}
              username={item.username}
              email={item.email}
              address={item.address}
              phone={item.phone}
              website={item.website}
              company={item.company}
              key={index}
            ></UsersList>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
