import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Smart Home Automation",
    description:
      "Experience the future with our cutting-edge smart home solutions. Control your home's lighting, security, and appliances effortlessly. Embrace a smarter lifestyle today",
    getImageSrc: () => require("../images/smart-home-automation.jpg"),
  },
  {
    title: "Virtual Reality Gaming",
    description:
      "Dive into immersive virtual worlds with our advanced VR gaming setup. Experience action, adventure, and excitement like never before. Get ready for the ultimate gaming journey",
    getImageSrc: () => require("../images/virtual-reality-gaming.jpg"),
  },
  {
    title: "5G Connectivity",
    description:
      "Stay connected at lightning speed with 5G technology. Experience seamless streaming, faster downloads, and lag-free video calls. Embrace the power of 5G today",
    getImageSrc: () => require("../images/5g-connectivity.jpg"),
  },
  {
    title: "AI-Powered Assistants",
    description:
      "Enhance your productivity with AI-powered virtual assistants. Schedule tasks, set reminders, and get real-time information with ease. Let AI simplify your life",
    getImageSrc: () => require("../images/ai-powered-assistans.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#5a76a0"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ sm: "repeat(1, minmax(0, 1fr))", lg: "repeat(2, minmax(0, 1fr))" }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;