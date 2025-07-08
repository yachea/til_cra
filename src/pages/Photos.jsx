import React, { useState } from "react";
import PhotosList from "../components/photos/PhotosList";

function Photos() {
  // js 자리
  const [photosData, setPhotosData] = useState([]);
  async function getPhotos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      setPhotosData(result);
    } catch (error) {
      console.log(error);
    }
  }

  function resetList() {
    setPhotosData([]);
  }

  // getPhotos();
  // jsx 자리
  return (
    <div>
      <h1>
        Photos 목록 <button onClick={getPhotos}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>
      <div>
        {photosData.map(function (item, index) {
          return (
            <PhotosList
              albumid={item.albumId}
              id={item.id}
              title={item.title}
              url={item.url}
              thumbnailurl={item.thumbnailUrl}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
