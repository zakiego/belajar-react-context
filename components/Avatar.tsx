import { Avatar as AvatarChakra } from "@chakra-ui/react";
import { useContext } from "react";

import { AppContext } from "~/context/app-context";

const Avatar = () => {
  const context = useContext(AppContext);
  return <AvatarChakra name="Dan Abrahmov" src={context.user?.avatar} />;
};
export default Avatar;
