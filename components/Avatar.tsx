import { useContext } from "react";
import { AppContext } from "~/context/app-context";
import { Avatar as AvatarChakra } from "@chakra-ui/react";

const Avatar = ({}) => {
  const context = useContext(AppContext);
  return <AvatarChakra name="Dan Abrahmov" src={context.user?.avatar} />;
};
export default Avatar;
