import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

function Skeleton({ width = "100%", height = "20px" }) {
  //js 자리
  // keyframes css 애니메이션
  const mov = keyframes`
  0% {background-position: -400px 0}
  100% {background-position: 400px 0}
  `;
  const SkeletonBox = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background: linear-gradient(90deg, #eeeeee 25%, #dddddd 37%, #eeeeee 63%);
    background-size: 800px;
    border-radius: 4px;
    animation: ${mov} 1.2s infinite linear;
    margin: 10px;
  `;
  //jsx  자리
  return <SkeletonBox width={width} height={height} />;
}

export default Skeleton;
