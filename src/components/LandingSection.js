import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, my name is Rizqi!";
const bio1 = "A software enginner";
const bio2 = "specialised in front-end";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src="./my-photo.jpg" size="2xl" name="Rizqi" />
        <Heading as="h4" size="lg" noOfLines={1} lineHeight="normal">{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="3xl" noOfLines={1} lineHeight="normal">{bio1}</Heading>
        <Heading as="h1" size="3xl" noOfLines={1} lineHeight="normal">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;