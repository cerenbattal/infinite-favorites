import React from "react";
import styled from "styled-components";
import ImageList from '../components/ImageList';
import { getFavorites, getUserProfile } from '../utils/localStorage';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.3;
`;

const ProfileSubSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const ProfileSubTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 5px;
`;

const UserAvatar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const FavoritedImages = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
`;

const ProfileData = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;


const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <UserAvatar>
          <UserIcon />
        </UserAvatar>
        <ProfileSubSection>
          <ProfileSubTitle>Username</ProfileSubTitle>
          <ProfileData>{getUserProfile().username}</ProfileData>
        </ProfileSubSection>
        <ProfileSubSection>
          <ProfileSubTitle>Email</ProfileSubTitle>
          <ProfileData>{getUserProfile().email}</ProfileData>
        </ProfileSubSection>
        <ProfileSubSection>
          <ProfileSubTitle>Name</ProfileSubTitle>
          <ProfileData>{getUserProfile().name}</ProfileData>
        </ProfileSubSection>
        <ProfileSubSection>
          <ProfileSubTitle>Surname</ProfileSubTitle>
          <ProfileData>{getUserProfile().surname}</ProfileData>
        </ProfileSubSection>
        <ProfileSubSection>
          <ProfileSubTitle>Location</ProfileSubTitle>
          <ProfileData>{getUserProfile().location}</ProfileData>
        </ProfileSubSection>
      </ProfileInfo>
      <FavoritedImages>
        <p>Your favorites</p>
        <ImageList images={getFavorites()} />
      </FavoritedImages>
    </ProfileContainer>
  );
};

export default Profile;
