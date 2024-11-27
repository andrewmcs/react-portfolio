import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack backgroundColor="white" borderRadius="10px">
      <Image src={imageSrc} borderRadius="10px"></Image>
      <VStack alignItems="flex-start" className="cardText" >
        <Heading size="m" >{title}</Heading>
        <Text >{description}</Text>
        <HStack>
          <Text>See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
