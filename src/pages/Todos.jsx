import React, { useState } from "react";

function Todos() {
  // js 자리
  const [todosData, setTodosData] = useState([]);
  async function getTodos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  function resetList() {
    setTodosData([]);
  }
  // getTodos();
  // jsx 자리
  return (
    <div>
      <h1>
        Todos 목록 <button onClick={getTodos}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>
      <div>
        {/* {todosData.map(function (item, index) {
          return (
            
          )
        })} */}
      </div>
    </div>
  );
}

export default Todos;
