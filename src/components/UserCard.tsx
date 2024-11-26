import { getServerAuthSession } from "@/backend/authentication/auth"

export const UserCard = async () => {

  const session = await getServerAuthSession();


  return (
    <h1>{session?.user.name}</h1>
  )
}