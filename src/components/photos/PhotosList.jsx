import styled from "@emotion/styled";
import React from "react";

function PhotosList({ albumid, id, title, url, thumbnailurl }) {
  // js자리
  const PhotosCard = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    border: 1px solid #128dffb3;
    margin: 20px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const PhotosTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PhotosAlbumId = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    color: #a3a3a3;
  `;
  const PhotosUrl = styled.div`
    font-size: 14px;
  `;
  const PhotosThumbnailUrl = styled.div`
    font-size: 11px;
    padding-top: 10px;
    color: #6d6c6c;
  `;
  // jsx자리
  return (
    <PhotosCard>
      <PhotosTitle>
        {id}.{title}
      </PhotosTitle>
      <PhotosAlbumId>{albumid}</PhotosAlbumId>
      <PhotosUrl>{url}</PhotosUrl>
      <PhotosThumbnailUrl>{thumbnailurl}</PhotosThumbnailUrl>
    </PhotosCard>
  );
}

export default PhotosList;
