import React, { useCallback, useState } from "react";
import Chlid from "./Chlid";

function App() {
  console.log("App : 리랜더링");
  // js 자리
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // jsx 자리
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>함수 실행</button>
      <Chlid />
    </div>
  );
}

export default App;
