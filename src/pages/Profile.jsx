import React from 'react';
import styled from 'styled-components';
import ImageList from '../components/ImageList';
import { getFavorites, getUserProfile } from '../utils/localStorage';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
    @media (max-width: 800px) {
      flex-direction: column;
    }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.3;
  height: 450px;
  position: relative;
  top: 100px;
  @media (max-width: 800px) {
    top: 30px;
  }
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
  @media (max-width: 800px) {
  font-size: 16px;
}
`;

const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    width: 60px;
    height: 60px;
  }
`;

const FavoritedImages = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex: 0.7;
  @media (max-width: 800px) {
    margin-top: 70px;
  }
`;

const ProfileData = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
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
          <ProfileData>{getUserProfile().username || 'N/A'}</ProfileData>
        </ProfileSubSection>
        <ProfileSubSection>
          <ProfileSubTitle>Email</ProfileSubTitle>
          <ProfileData>{getUserProfile().email || 'N/A'}</ProfileData>
        </ProfileSubSection>
        <ProfileSubSection>
          <ProfileSubTitle>Name</ProfileSubTitle>
          <ProfileData>{getUserProfile().name || 'N/A'}</ProfileData>
        </ProfileSubSection>
        <ProfileSubSection>
          <ProfileSubTitle>Surname</ProfileSubTitle>
          <ProfileData>{getUserProfile().surname || 'N/A'}</ProfileData>
        </ProfileSubSection>
        <ProfileSubSection>
          <ProfileSubTitle>Location</ProfileSubTitle>
          <ProfileData>{getUserProfile().location || 'N/A'}</ProfileData>
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
