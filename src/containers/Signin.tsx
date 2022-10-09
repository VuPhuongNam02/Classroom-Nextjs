import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import LayoutAuth from "@/layouts/LayoutAuth";
import NextLink from "next/link";
import GoogleIcon from "@/icons/GoogleIcon";

function Signin() {
  return (
    <LayoutAuth
      titleWeb="Singin"
      title="Singin"
      subTitle="New to Classroom"
      titleLink={
        <NextLink passHref href="/signup">
          <Link color="teal" ml={1}>
            Sign up now!
          </Link>
        </NextLink>
      }
    >
      <form>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input type="email" placeholder="Enter your email address" />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Link color="teal">Forgot your password?</Link>
          </Box>
        </Stack>

        <Button colorScheme="teal" width="full" mt={4}>
          Sign In
        </Button>
      </form>

      <Text textAlign="center" m="1.5rem">
        Or
      </Text>

      <Button width="full" leftIcon={<GoogleIcon />}>
        Google
      </Button>
    </LayoutAuth>
  );
}

export default Signin;
