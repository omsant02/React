import UserCard from "./UserCard";

const User = ({ user }) => {
  return (
    <div>
      <UserCard user={user} />
    </div>
  );
};

export default User;
