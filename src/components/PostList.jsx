import { useEffect, useContext } from "react";
import UserContext from "../context/user/userContext";

const PostList = () => {
  const userContext = useContext(UserContext);
  const { user, users, setUser, getUsers } = userContext;

  useEffect(() => {
    setUser();
    getUsers();
  }, []);

  return (
    <div>
      <h4>posts</h4>
      {/* {user && (
        <>
          <p>name:{user.name}</p>
          <p>email:{user.email}</p>
        </>
      )} */}

      {users && users.length}
    </div>
  );
};

export default PostList;
