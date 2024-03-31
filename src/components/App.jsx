import Profile from './Profile/Profile';
import userData from '../userData.json';
import allFriends from '../friends.json';
import FriendList from './FriendList/FriendList';
export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={allFriends} />
    </div>
  );
}
