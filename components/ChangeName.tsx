import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

import { useAppContext } from "~/context/app-context";

const ChangeName = () => {
  const context = useAppContext();

  const [tempName, setTempName] = useState("");

  function handler(e: React.ChangeEvent<HTMLInputElement>) {
    setTempName(e.target.value);
  }

  function changeName() {
    if (context.setUser) {
      context.setUser({ ...context.user, name: tempName });
    }
  }

  return (
    <Box mt="5">
      <Input onChange={handler} placeholder="Name" />
      <Button onClick={() => changeName()} mt="3" size="sm" colorScheme="blue">
        Change Name
      </Button>
    </Box>
  );
};
export default ChangeName;
