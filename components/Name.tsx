import { Text } from "@chakra-ui/react";

import { useAppContext } from "~/context/app-context";

const Name = () => {
  const context = useAppContext();

  return (
    <Text fontWeight="semibold" fontSize="xl">
      {context.user?.name}
    </Text>
  );
};
export default Name;
