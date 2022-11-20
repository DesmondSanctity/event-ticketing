import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Text,
  Icon,
  Image
} from "@chakra-ui/react";

export default function Home() {
  // Button bgColor color
  const bgColor = useColorModeValue("pink.400", "pink.500");

  return (
    <Box px={10} py={20} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          Welcome to{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, pink.400,green.500)"
            fontWeight="extrabold"
          >
            Xata CONF
          </Text>{" "}
          2023.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 20 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          An event ticketing application featuring <a href="https://nextjs.org/">Nextjs</a> the react framework
          for production, <a href="https://chakra-ui.com/">Chakra-UI</a>{" "}
          an open source UI library and design system for building user interfaces{" "}
          <a href="https://wagmi-xyz.vercel.app/"> & Cloudinary </a> a media transformation and 
          optimization tool.
        </chakra.p>
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          mb={5}
        >
          <Image src='xata-conf-mock2.jpg' fallbackSrc='https://via.placeholder.com/150' />
        </Box>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            borderRadius="2xl"
            variant="solid"
            bg={bgColor}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            href="https://github.com/SabeloMkhwanzi/Nextjs-Chakra-ui-Wagmi"
          >
            Get Started
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}