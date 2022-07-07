import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import { useReducer } from "react";

function reducer(state: number, action: "increment" | "decrement") {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error("Unexpected action");
  }
}

const Reducer = () => {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useReducer(reducer, 0);

  return (
    // <ButtonGroup variant="outline">
    <HStack mt="8">
      <IconButton
        variant="outline"
        aria-label="Decrement"
        icon={<MinusIcon />}
        size="sm"
        onClick={() => setCount("decrement")}
      />
      <Text variant="outline">{count}</Text>
      <IconButton
        variant="outline"
        aria-label="Increment"
        icon={<AddIcon />}
        size="sm"
        onClick={() => setCount("increment")}
      />
    </HStack>
    // </ButtonGroup>
  );
};
export default Reducer;
