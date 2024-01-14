import Profile from "./Profile/Profile";
import data from "./Data/user.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />
    </div>
  );
};
