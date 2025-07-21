import React, { memo } from "react";

function Chlid() {
  // js 자리
  console.log("Child : 리렌더링");
  // jsx 자리
  return <div>Chlid</div>;
}
// memo 넣어서 컨트롤+스페이스바 해서 리액트 연결하면 됨.
export default memo(Chlid);
