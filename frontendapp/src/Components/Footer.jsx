import React from "react";
import Social from "../assests/Social.png";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import n1 from ".././assests/Rectangle 126.png";
import n2 from ".././assests/north-star-24 (1).png";
const Footer = () => {
  return (
    <>
      <Box border="1px solid gray"   mt="50px">
        <Flex
          alignItems="stretch"
          h="400px"
        
          w="100%"
          mx="auto"
          
        >
          <Flex w="100%">
            <Flex flexDir="column" w="25%" mt="30px" gap={5}>
              <Text
                color="stone-900"
                fontSize="base"
                fontWeight="bold"
                leading="6"
                textTransform="uppercase"
              >
                Page d'accueil
              </Text>
              <Text color="stone-900" fontSize="sm">
                Missions de PANDA
              </Text>
              <Text color="stone-900" fontSize="sm">
                Fonctionnalités
              </Text>
              <Text color="stone-900" fontSize="sm">
                Découvrez les experts
              </Text>
              <Text color="stone-900" fontSize="sm" whiteSpace="nowrap">
                Découvrez les organisations en Afrique
              </Text>
              <Text color="stone-900" fontSize="sm">
                Offres d'emploi
              </Text>
              <Text color="stone-900" fontSize="sm">
                Evénements à venir
              </Text>
              <Text color="stone-900" fontSize="sm">
                Témoignages
              </Text>
              <Text color="stone-900" fontSize="sm">
                Les fondateurs
              </Text>
            </Flex>

            <Flex flexDir="column" w="25%" mt="30px" gap={5}>
              <Text
                color="stone-900"
                fontSize="base"
                fontWeight="bold"
                leading="6"
                textTransform="uppercase"
              >
                pour les EXPERTS
              </Text>
              <Text color="stone-900" fontSize="sm" leading="5">
                Découvrez les organisations en Afrique
              </Text>
              <Text color="stone-900" fontSize="sm" leading="5" mt={5}>
                Offres d'emploi
              </Text>
              <Text color="stone-900" fontSize="sm" leading="5" mt={5}>
                Travel Map
              </Text>
              <Text color="stone-900" fontSize="sm" leading="5" mt={5}>
                Evénements à venir
              </Text>
            </Flex>

            <Flex flexDir="column" w="25%" mt="30px" gap={5}>
              {" "}
              <Text
                color="stone-900"
                fontSize="base"
                fontWeight="bold"
                leading="6"
                textTransform="uppercase"
                w="25%"
                ml="30px"
                whiteSpace="nowrap"
              >
                pour les organisations en Afrique
              </Text>
              <Text
                color="stone-900"
                fontSize="sm"
                leading="5"
                whiteSpace="nowrap"
              >
                Découvrez les experts
              </Text>
              <Text color="stone-900" fontSize="sm" leading="5" mt={5}>
                Travel Map
              </Text>
              <Text
                color="stone-900"
                fontSize="sm"
                leading="5"
                whiteSpace="nowrap"
                mt={5}
              >
                Evénements à venir
              </Text>
            </Flex>

            <Flex flexDir="column" w="25%" mt="30px" gap={5}>
              <Text
                color="stone-900"
                fontSize="base"
                fontWeight="bold"
                leading="5"
                textTransform="uppercase"
                w="25%"
                mx="auto"
              >
                Contact
              </Text>{" "}
              <Text
                color="stone-900"
                fontSize="sm"
                leading="5"
                grow
                whiteSpace="nowrap"
                mt={4}
              >
                Nous contacter
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w="100%"mt='20px'
        >
          <Flex
            ml="200px"
            color="#1F1F1F"
            font-family="KyivType Sans"
            font-style="normal"
            font-weight="350"
            line-height="135.2%"
            w="33%"
            fontSize="4xl"
            // border="2px solid red"
          >
            P
            <Box>
              {" "}
              <Image
                src={n1}
                width="24.854px"
                height="25.951px"
                flex-shrink="0"
                borderRadius="180.028px 180.028px 0px 0px"
                border="3px solid #1F1F1F"
                mt="15px"
              />
              <Image
                src={n2}
                width="10.431px"
                height="10.34px"
                flex-shrink="0"
                position="absolute"
                mt="-20px"
                ml="7px"
                // border="2px solid black"
              />
            </Box>
            NDA
          </Flex>
          <Text
            textAlign="center"
            color="stone-900"
            fontSize="lg"
            mt={5}
            w="33%"
            mr="150px"
            // border="2px solid red"
          >
            © 2022 Tous droits réservés
          </Text>
          <Image
            loading="lazy"
            src={Social}
            alt="Social Image"
            flexShrink="0"
              mr="30px"
            mt="20px"
            h="30px"
            w="33%"
          />
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
