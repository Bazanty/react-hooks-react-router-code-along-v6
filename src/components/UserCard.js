import { Link } from "react-router-dom";

function UserCard({ user }) {
  if (!user) {
    return <p>User data is not available.</p>;
  }

  return (
    <article>
      <h2>{user.name}</h2>
      <Link to={`/profile/${user.id}`}>View profile</Link>
    </article>
  );
}

export default UserCard;
