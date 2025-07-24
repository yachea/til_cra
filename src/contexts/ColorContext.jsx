import { createContext, useReducer } from "react";
// 1. 초기값 설정
const initalState = "white";
// 2. 리듀서 함수 만들기
function reducer(state, action) {
  switch (action.type) {
    case "YELLOW":
      return "yellow";
    case "SKYBLUE":
      return "skyblue";
    case "RESET":
      return initalState;
    default:
      return state;
  }
}

export const ColorContext = createContext();
export const ColorContextProvider = ({ children }) => {
  // 3. state 생성
  const [color, dispatch] = useReducer(reducer, initalState);
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
