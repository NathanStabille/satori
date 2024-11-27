import { getServerAuthSession } from "@/backend/auth/authentication";
import { SignOutButton } from "./SignOutButton";

export const UserCard = async () => {
  const session = await getServerAuthSession();

  return (
    <div>
      <h1>{session?.user.name}</h1>
      <SignOutButton />
    </div>
  );
};
