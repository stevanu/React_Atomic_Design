import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <h1 className="text-2xl">Profile</h1>
      <h1 className=" font-bold">UserName : {username}</h1>
    </div>
  );
};

export default ProfilePage;
