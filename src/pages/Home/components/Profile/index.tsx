import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from '../../../../components/Links';
import { api } from '../../../../lib/axios';
import { ProfileAvatar, ProfileContainer, ProfileDetails } from './styles';

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

interface ProfileProps {

}

export const Profile: React.FC<ProfileProps> = () => {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)

  const getProfileData = useCallback(async () => {
    const response = await api.get(`/users/${username}`)
    setProfileData(response.data)
  }, [profileData]);

  useEffect(() => {
    getProfileData()
  })

  return (
    <ProfileContainer>
      <ProfileAvatar src="https://github.com/matheuszarpellon.png" />
      <ProfileDetails>
        <header>
          <h1>{profileData.name}</h1>
          <Link text="Github" href="https://github.com/matheuszarpellon" />
        </header>
        <p>
          {profileData.bio}
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} /> {profileData.login}
          </li>
          { profileData?.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} /> {profileData.company}
            </li>
          )}
          <li>
            <FontAwesomeIcon icon={faUserGroup} /> {profileData.followers} seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
};