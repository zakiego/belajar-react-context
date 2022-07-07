import { Container, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import ChangeName from "~/components/ChangeName";
import Profile from "~/components/Profile";
import Reducer from "~/components/Reducer";

export default function Index() {
  return (
    <>
      <Head>
        <title>Belajar React Context</title>
      </Head>
      <div className="vercel">
        <Flex
          flexDirection="column"
          minH="100vh"
          justifyContent="center"
          // alignItems="center"
        >
          <Container>
            <Heading mb="4">Profile</Heading>
            <Profile />
            <ChangeName />
            <Reducer />
          </Container>
        </Flex>
      </div>
    </>
  );
}
