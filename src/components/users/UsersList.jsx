import styled from "@emotion/styled";
import React from "react";

function UsersList({
  // js 자리
  id,
  names,
  username,
  email,
  address,
  phone,
  website,
  company,
}) {
  const { street, suite, city, zipcode } = address;
  const { lat, lng } = address.geo;
  const { name, catchPhrase, bs } = company;

  const UsersCard = styled.div`
    position: relative;
    background-color: #ccc;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    margin-left: 40px;
    margin-top: 20px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
      background-color: #fff;
    }
  `;
  const UsersId = styled.div`
    position: absolute;
    top: 40%;
    left: -35px;
    background-color: #fff;
    text-align: center;
    padding: 6px 0;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    font-weight: 600;
  `;
  const UsersTitle = styled.h2`
    font-size: 25px;
    color: #2d57e0;
    padding-bottom: 20px;
  `;
  const UsersName = styled.span`
    font-size: 15px;
    padding-left: 10px;
    color: #364575a7;
  `;
  const UsersAddress = styled.div``;
  const UserPhone = styled.div``;
  const UserCompany = styled.div``;
  const UsersEmail = styled.div``;
  const UserWebsite = styled.div``;

  //jsx 자리
  return (
    <UsersCard>
      <UsersId>{id}</UsersId>
      <UsersTitle>
        {names}
        <UsersName>{username}</UsersName>
      </UsersTitle>
      <UsersAddress>
        {street}
        {suite}
        {city}
        {zipcode}
        {lat}.{lng}
      </UsersAddress>
      <UserPhone>{phone}</UserPhone>
      <UserCompany>
        {name}
        {catchPhrase}
        {bs}
      </UserCompany>
      <UsersEmail>{email}</UsersEmail>
      <UserWebsite>{website}</UserWebsite>
    </UsersCard>
  );
}

export default UsersList;
