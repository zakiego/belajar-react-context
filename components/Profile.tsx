import { Stack } from "@chakra-ui/react";
import Avatar from "./Avatar";
import Name from "./Name";

const Profile = ({}) => {
  return (
    <Stack direction="row" alignItems="center">
      <Avatar />
      <Name />
    </Stack>
  );
};
export default Profile;
