import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  //   const [user, setUser] = useState<null | AuthUser>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Aadarsh",
      email: "email@example.com",
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* <div>user name is {user?.name}</div>
      <div>user email is {user?.email}</div> */}
      <div>user name is {user.name}</div>
      <div>user email is {user.email}</div>
    </div>
  );
};

export default User;
