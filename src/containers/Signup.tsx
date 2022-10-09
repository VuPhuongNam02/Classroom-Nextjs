import React from "react";
import LayoutAuth from "@/layouts/LayoutAuth";
import NextLink from "next/link";
import { Button, FormControl, FormLabel, Input, Link } from "@chakra-ui/react";

function Signup() {
  return (
    <LayoutAuth
      titleWeb="Singup"
      title="Singup"
      subTitle="Login to Classroom"
      titleLink={
        <NextLink passHref href="/signin">
          <Link color="teal" ml={1}>
            Login now !
          </Link>
        </NextLink>
      }
    >
      <form>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email address"
            id="email"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor="displayName">Display name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your display name"
            id="displayName"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>

        <Button colorScheme="teal" width="full" mt={4}>
          Singup
        </Button>
      </form>
    </LayoutAuth>
  );
}

export default Signup;
