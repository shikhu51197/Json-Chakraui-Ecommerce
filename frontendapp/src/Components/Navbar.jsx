import React, { useState } from "react";
import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  Text,
  Heading,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Image,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import n1 from ".././assests/Rectangle 126.png";
import n2 from ".././assests/north-star-24 (1).png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Box h="80px">
        <Box
          border="1px solid transparent"
          width="100%"
          height="207.412px"
          flex-shrink="0"
          bg="white" zIndex={10}
          position="fixed"
        >
          <Flex
            as="nav"
            align="center"
            width="100%"
            position="fixed"
            h="100px"
            zIndex={10}
            gap={10}
            justify="space-between"
            p={{ base: 4, lg: 2 }}
            fontFamily="serif"
            // boxShadow="lg"
            bg="white"
          >
            <Box display="flex" p={10}>
              <Text
                color="#1F1F1F"
                font-family="BIZ UDPGothic"
                font-size="16px"
                font-style="normal"
                font-weight="400"
                line-height="158.7%"
                letter-spacing="-1.5px"
                text-transform="capitalize"
              >
                EN - FR
              </Text>
            </Box>
            <Heading
              flexShrink="0"
              color="#1F1F1F"
              fontFamily="Jost"
              fontSize="32px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
              letter-spacing="-1.5px"
              align="center"
              //   border="2px solid red"
              m="auto"
            >
              <Flex>
                {" "}
                Bienvenue sur{" "}
                <Flex
                  ml="5px"
                  color="#1F1F1F"
                  font-family="KyivType Sans"
                  font-size="39.231px"
                  font-style="normal"
                  font-weight="350"
                  line-height="135.2%"
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
                      mt="7px"
                    />
                    <Image
                      src={n2}
                      width="10.431px"
                      height="10.34px"
                      flex-shrink="0"
                      position="absolute"
                      left="47.5%"
                      top="46%"
                    />
                  </Box>
                  NDA
                </Flex>
              </Flex>
            </Heading>
            {isLargerThan1024 ? (
              <>
                <Flex gap={100}>
                  <Text
                    color="#1F1F1F"
                    fontFamily="BIZ UDPGothic"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="158.7%"
                    letterSpacing="-1.5px"
                    textDecorationLine="underline"
                    // marginRight="100px"
                    align="right"
                  >
                    Créer un compte
                  </Text>
                  <Text
                    color="#1F1F1F"
                    fontFamily="BIZ UDPGothic"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="158.7%"
                    letterSpacing="-1.5px"
                    marginRight="50px"
                    align="right"
                    textDecorationLine="underline"
                  >
                    Se connecter
                  </Text>
                </Flex>
              </>
            ) : null}

            <Box>
              <IconButton
                aria-label="Toggle navigation"
                icon={<HamburgerIcon />}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                display={{ base: "block", lg: "none" }}
              />
            </Box>
          </Flex>

          <Flex
            mx="auto"
            alignItems="center"
            justifyContent="space-between"
            maxWidth="1200px"
            borderWidth={0}
            w="100%"
            h="100px"
            mt="100px"
          >
            <Tabs defaultIndex={1} borderBottomColor="transparent">
              <TabList>
                <Tab
                  py={4}
                  m={0}
                  color="#1F1F1F"
                  font-family="BIZ UDPGothic"
                  font-size="13px"
                  font-style="normal"
                  font-weight="400"
                  line-height="158.7%"
                  letter-spacing="-1.5px"
                  text-transform="capitalize"
                >
                  Missions De PANDA
                </Tab>
                <Tab
                  py={4}
                  m={0}
                  color="#1F1F1F"
                  font-family="BIZ UDPGothic"
                  font-size="13px"
                  font-style="normal"
                  font-weight="400"
                  line-height="158.7%"
                  letter-spacing="-1.5px"
                  text-transform="capitalize"
                >
                  Fonctionnalités
                </Tab>
                <Tab
                  py={4}
                  m={0}
                  color="#1F1F1F"
                  font-family="BIZ UDPGothic"
                  font-size="13px"
                  font-style="normal"
                  font-weight="400"
                  line-height="158.7%"
                  letter-spacing="-1.5px"
                  text-transform="capitalize"
                >
                  Experts
                </Tab>
                <Tab
                  py={4}
                  m={0}
                  color="#1F1F1F"
                  font-family="BIZ UDPGothic"
                  font-size="13px"
                  font-style="normal"
                  font-weight="400"
                  line-height="158.7%"
                  letter-spacing="-1.5px"
                  text-transform="capitalize"
                >
                  Organisations en Afrique
                </Tab>
                <Tab
                  py={4}
                  m={0}
                  color="#1F1F1F"
                  font-family="BIZ UDPGothic"
                  font-size="13px"
                  font-style="normal"
                  font-weight="400"
                  line-height="158.7%"
                  letter-spacing="-1.5px"
                  text-transform="capitalize"
                >
                  Offres d'emploi
                </Tab>{" "}
                <Tab
                  py={4}
                  m={0}
                  color="#1F1F1F"
                  font-family="BIZ UDPGothic"
                  font-size="13px"
                  font-style="normal"
                  font-weight="400"
                  line-height="158.7%"
                  letter-spacing="-1.5px"
                  text-transform="capitalize"
                >
                  Evénements à venir
                </Tab>{" "}
                <Tab
                  py={4}
                  m={0}
                  color="#1F1F1F"
                  font-family="BIZ UDPGothic"
                  font-size="13px"
                  font-style="normal"
                  font-weight="400"
                  line-height="158.7%"
                  letter-spacing="-1.5px"
                  text-transform="capitalize"
                >
                  Témoignages
                </Tab>{" "}
                <Tab
                  py={4}
                  m={0}
                  color="#1F1F1F"
                  font-family="BIZ UDPGothic"
                  font-size="13px"
                  font-style="normal"
                  font-weight="400"
                  line-height="158.7%"
                  letter-spacing="-1.5px"
                  text-transform="capitalize"
                >
                  Fondateurs
                </Tab>
              </TabList>
            </Tabs>
          </Flex>
          <Drawer
            isOpen={isDrawerOpen}
            placement="right"
            onClose={() => setIsDrawerOpen(false)}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4}>
                  <Box>
                    <Image
                      src={n1}
                      width="380px"
                      height="818px"
                      flex-shrink="0"
                      borderRadius=" 180px 180px 0px 0px"
                      border="1px solid #1F1F1F"
                    />
                    <Box
                      color="#1F1F1F"
                      font-family="BIZ UDPGothic"
                      font-size="13px"
                      font-style="normal"
                      font-weight="400"
                      line-height="158.7%"
                      letter-spacing="-1.5px"
                      text-transform="capitalize"
                      position="absolute"
                      left="35%"
                      top="15%"
                    >
                      <Text
                        py={4}
                        m={0}
                        color="#1F1F1F"
                        font-family="BIZ UDPGothic"
                        font-size="13px"
                        font-style="normal"
                        font-weight="400"
                        line-height="158.7%"
                        letter-spacing="-1.5px"
                        text-transform="capitalize"
                      >
                        Créer un compte
                      </Text>
                      <Text
                        py={4}
                        m={0}
                        color="#1F1F1F"
                        font-family="BIZ UDPGothic"
                        font-size="13px"
                        font-style="normal"
                        font-weight="400"
                        line-height="158.7%"
                        letter-spacing="-1.5px"
                        text-transform="capitalize"
                      >
                        Se connecter
                      </Text>
                      <Image
                        src={n2}
                        width="10.431px"
                        height="10.34px"
                        flex-shrink="0"
                        m="auto"
                        align="center"
                        //   mt='20px'
                      />
                      <Text
                        py={4}
                        m={0}
                        color="#1F1F1F"
                        font-family="BIZ UDPGothic"
                        font-size="13px"
                        font-style="normal"
                        font-weight="400"
                        line-height="158.7%"
                        letter-spacing="-1.5px"
                        text-transform="capitalize"
                      >
                        Missions De PANDA
                      </Text>
                      <Text
                        py={4}
                        m={0}
                        color="#1F1F1F"
                        font-family="BIZ UDPGothic"
                        font-size="13px"
                        font-style="normal"
                        font-weight="400"
                        line-height="158.7%"
                        letter-spacing="-1.5px"
                        text-transform="capitalize"
                      >
                        Fonctionnalités
                      </Text>
                      <Text
                        py={4}
                        m={0}
                        color="#1F1F1F"
                        font-family="BIZ UDPGothic"
                        font-size="13px"
                        font-style="normal"
                        font-weight="400"
                        line-height="158.7%"
                        letter-spacing="-1.5px"
                        text-transform="capitalize"
                      >
                        Experts
                      </Text>
                      <Text
                        py={4}
                        m={0}
                        color="#1F1F1F"
                        font-family="BIZ UDPGothic"
                        font-size="13px"
                        font-style="normal"
                        font-weight="400"
                        line-height="158.7%"
                        letter-spacing="-1.5px"
                        text-transform="capitalize"
                      >
                        Organisations en Afrique
                      </Text>
                      <Text
                        py={4}
                        m={0}
                        color="#1F1F1F"
                        font-family="BIZ UDPGothic"
                        font-size="13px"
                        font-style="normal"
                        font-weight="400"
                        line-height="158.7%"
                        letter-spacing="-1.5px"
                        text-transform="capitalize"
                      >
                        Offres d'emploi
                      </Text>{" "}
                      <Text
                        py={4}
                        m={0}
                        color="#1F1F1F"
                        font-family="BIZ UDPGothic"
                        font-size="13px"
                        font-style="normal"
                        font-weight="400"
                        line-height="158.7%"
                        letter-spacing="-1.5px"
                        text-transform="capitalize"
                      >
                        Evénements à venir
                      </Text>{" "}
                      <Text
                        py={4}
                        m={0}
                        color="#1F1F1F"
                        font-family="BIZ UDPGothic"
                        font-size="13px"
                        font-style="normal"
                        font-weight="400"
                        line-height="158.7%"
                        letter-spacing="-1.5px"
                        text-transform="capitalize"
                      >
                        Témoignages
                      </Text>{" "}
                      <Text
                        py={4}
                        m={0}
                        color="#1F1F1F"
                        font-family="BIZ UDPGothic"
                        font-size="13px"
                        font-style="normal"
                        font-weight="400"
                        line-height="158.7%"
                        letter-spacing="-1.5px"
                        text-transform="capitalize"
                      >
                        Fondateurs
                      </Text>
                    </Box>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
