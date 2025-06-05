import {
  UnfollowersWrapper,
  ClearButton,
  UnfollowersIcon,
  UnfollowersTitle,
  UnfollowersCount,
  UnfollowersList,
  UnfollowerItem,
} from './UnfollowersList.styled';
import { ReactComponent as CrossIcon } from '../../images/icon-cross.svg';

const UnFollowList = ({ unfollowers, clearFunc }) => {
  return (
    <UnfollowersWrapper>
      {unfollowers.length > 0 && (
        <ClearButton onClick={clearFunc}>
          <UnfollowersIcon as={CrossIcon} />
        </ClearButton>
      )}
      <UnfollowersTitle>
        People who are not following you back:
      </UnfollowersTitle>
      <UnfollowersCount>{unfollowers.length} people</UnfollowersCount>
      <UnfollowersList>
        {unfollowers.map(name => (
          <UnfollowerItem key={name}>{name}</UnfollowerItem>
        ))}
      </UnfollowersList>
    </UnfollowersWrapper>
  );
};

export default UnFollowList;
