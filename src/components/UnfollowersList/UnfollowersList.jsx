import { useState, useEffect } from 'react';
import {
  UnfollowersWrapper,
  ClearButton,
  UnfollowersIcon,
  UnfollowersTitle,
  UnfollowersCount,
  UnfollowersList,
  UnfollowerItem,
  UnFollowersLink,
} from './UnfollowersList.styled';
import { ReactComponent as CrossIcon } from '../../images/icon-cross.svg';

const UnFollowList = ({ unfollowers, clearFunc }) => {
  const [activeUser, setActiveUser] = useState(() => {
    return localStorage.getItem('lastVisitedUser') || '';
  });

  const handleClick = name => {
    localStorage.setItem('lastVisitedUser', name);
    setActiveUser(name);
  };

  useEffect(() => {
    const stored = localStorage.getItem('lastVisitedUser');
    if (stored) {
      const el = document.querySelector(`[data-active="true"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <UnfollowersWrapper>
      {unfollowers.length > 0 && (
        <ClearButton onClick={clearFunc}>
          <UnfollowersIcon as={CrossIcon} />
        </ClearButton>
      )}
      <UnfollowersTitle>
        Accounts which are not following you back:
      </UnfollowersTitle>
      <UnfollowersCount>
        {unfollowers.length}
        {unfollowers.length === 1 ? ' account' : ' accounts'}
      </UnfollowersCount>
      <UnfollowersList>
        {unfollowers.map(({ name, href }) => (
          <UnfollowerItem
            key={name}
            data-active={name === activeUser}
            onClick={() => handleClick(name)}
          >
            <UnFollowersLink
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </UnFollowersLink>
          </UnfollowerItem>
        ))}
      </UnfollowersList>
    </UnfollowersWrapper>
  );
};

export default UnFollowList;
