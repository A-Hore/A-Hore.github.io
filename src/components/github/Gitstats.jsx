import React from "react";
import {
  Box,
  Image,
  Center,
  useColorModeValue,
  Flex,
  Heading,
} from "@chakra-ui/react";

const Gitstats = () => {
  return (
    <Center style={{padding:"0px 1rem"}}>
      <Flex direction={"column"} alignItems="center" gap={"10"}>
        <Heading size={"md"} color={"rgb(77,181,255)"}>
          My Github Stats
        </Heading>
        <Box>
          <a href="https://github.com/A-Hore">
            <Image
              src="https://github-readme-streak-stats.herokuapp.com/?user=A-Hore&stroke=ffffff&background=2e2b2b&ring=0891b2&fire=0891b2&currStreakNum=ffffff&currStreakLabel=0891b2&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true"
              alt="Arjun's GitHub stats"
            />
          </a>
          <p>
            &nbsp;
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=A-Hore&show_icons=true&locale=en"
              alt="praful-87"
            />
          </p>
        </Box>
      </Flex>
    </Center>
  );
};

export default Gitstats;
