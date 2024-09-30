import { LuUser2 } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

async function UserIcon() {
  // const {userId } = auth() // get the user id only
  const user = await currentUser(); // get current user
  const profileImage = user?.imageUrl; // get profile image (if exists)

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="user icon"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
