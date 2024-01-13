import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import building from "../assests/building.png";
import building1 from "../assests/buildingg.png";
import ava from "../assests/ava.png";
import avaa from "../assests/avaa.png";

import star from "../assests/star.svg";
import line2 from "../assests/Line 23.png";
import map from "../assests/map.png";
import profile from "../assests/profile.png";
import image from "../assests/image.png";
import img from "../assests/img.png";
import agri from "../assests/agri.png";
import software from "../assests/software.png";
import r from "../assests/r.png";
import netfli from "../assests/netfli.png";
import data from "../assests/data.png";
import profile1 from "../assests/image1.png";
import profile2 from "../assests/image2.png";
import profile3 from "../assests/image3.png";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import line1 from "../assests/Line 24.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const missionsData = [
  {
    number: "01",
    title: "Networking",
    description:
      "Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.",
  },
  {
    number: "02",
    title: "Partage ",
    description: "Promouvoir le partage de connaissances et d’expertises. ",
  },
  {
    number: "03",
    title: "Recrutement",
    description:
      "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de professionnels  qualifiés.",
  },
  {
    number: "04",
    title: "Collaborations",
    description: " Créer des opportunités de collaborations en Afrique.",
  },
  {
    number: "05",
    title: "Evénements",
    description:
      "Augmenter la visibilité des évenements autour du “Business in Africa”.",
  },
];
const fonctionnalitesData = [
  {
    title: "Sélection de profils",
    description:
      "Sélectionnez les meilleurs profils d'experts ou organisations qui vous intéressent et entrez en contact avec eux! ",
  },
  {
    title: " Publication ",
    description:
      "Offres d’emploi, annonces, collaborations, événements, etc. Publiez du contenu exclusif sur votre page privée ! ",
  },
  {
    title: "tRAVEL MAP",
    description:
      "Rencontrez-vous grâce à notre Travel Map! Cette fonctionnalité permet aux experts de notifier leurs déplacements sur le continent africain. Il ne reste plus qu'à planifier la rencontre! ",
  },
];

const fonction = [
  {
    title: "Filtres & recherche avancée",
    description:
      " Ciblez vos recherches par secteur d'activité, pays et plus encore. ",
  },
  {
    title: "NOTIFICATIONS",
    description:
      "Soyez directement avertis des nouvelles publications et mises à jour grâce aux notifications.",
  },
];
const activityCard = (title) => {
  return (
    <Flex
      key={title}
      justifyContent={["flex-start", "flex-start", "space-between"]}
      alignItems="center"
      mt={2}
    >
      <Image
        src={star}
        alt="Star Image"
        boxSize="6"
        objectFit="cover"
        overflow="hidden"
      />
      <Text
        fontSize={["2xl", "2xl", "4xl"]}
        fontWeight="medium"
        lineHeight={["54.08px", "54.08px", "54.08px"]}
        flex="1"
      >
        {title}
      </Text>
    </Flex>
  );
};
const Home = () => {
  return (
    <div>
      <>
        <Navbar />
        {/* 1 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          mt="110px"
        >
          <Heading
            fontSize="65px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="135%"
            letter-spacing="-1.5px"
            align="center"
            fontFamily="jost"
            variant="h3"
            sx={{ padding: "40px 250px" }}
          >
            Nous réunissons experts du monde entier et organisations en Afrique
          </Heading>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "40px 20px",
            }}
          >
            <Box mr={4} mt={20}>
              <Text
                variant="h6"
                sx={{
                  color: "#A95454",
                  fontFamily: "Jost",
                  fontSize: "40px",
                  fontWeight: "500",
                  lineHeight: "117%",
                  fontStyle: "normal",
                }}
                opacity="0.5"
                mt="50px"
              >
                Organisations en Afrique
              </Text>
              <Text
                // mt={3}
                variant="body1"
                sx={{
                  color: "#1F1F1F",
                  fontFamily: "Jost",
                  fontSize: "15px",
                  fontWeight: "500",
                  lineHeight: "135.2%",
                  fontStyle: "normal",
                }}
                opacity="0.5"
                mt="50px"
              >
                Vous êtes une entreprise privée ou publique basée en Afrique et
                vous avez du mal à recruter des profils expérimentés? Vous êtes
                une start-up africaine et vous souhaitez faire appel aux
                services d'un prestataire externe? Vous recherchez une expertise
                spécifique pour réaliser un futur projet?
              </Text>
              <Text
                variant="body1"
                sx={{
                  color: "#1F1F1F",
                  fontFamily: "Jost",
                  fontSize: "15px",
                  fontWeight: "500",
                  lineHeight: "135.2%",
                  fontStyle: "normal",
                }}
                opacity="0.5"
                mt="50px"
              >
                Grâce à son réseau, PANDA vous aide à trouver les experts dont
                vous avez besoin!
              </Text>
            </Box>

            <img
              src={building1}
              alt="Frame"
              style={{
                borderRadius: "450px 450px 0px 0px",
                width: "500.114px",
                height: "566.289px",
              }}
            />
            <img
              src={building}
              alt="Frame"
              style={{
                borderRadius: "450px 450px 0px 0px",
                width: "579.114px",
                height: "566.289px",
                // zIndex: "999",
                position: "absolute",
                right: "30%",
              }}
            />
            <Box ml="130px" mt={20}>
              <Text
                variant="h6"
                sx={{
                  color: "#A95454",
                  fontFamily: "Jost",
                  fontSize: "40px",
                  fontWeight: "500",
                  lineHeight: "117%",
                  fontStyle: "normal",
                }}
                opacity="0.5"
                mt="50px"
              >
                Experts{" "}
              </Text>
              <Text
                //   mt={3}
                variant="body1"
                sx={{
                  color: "#1F1F1F",
                  fontFamily: "Jost",
                  fontSize: "15px",
                  fontWeight: "500",
                  lineHeight: "135.2%",
                  fontStyle: "normal",
                }}
                opacity="0.5"
                mt="50px"
              >
                Vous êtes un professionnel expérimenté et vous planifiez de
                partir travailler en Afrique? Vous vous rendez souvent sur le
                continent africain pour des raisons professionnelles et vous
                souhaitez étendre votre réseau? Vous souhaitez partager votre
                expertise avec des organisations africaines sans vous déplacer?
              </Text>
              <Text
                // mt={3}
                variant="body1"
                sx={{
                  color: "#1F1F1F",
                  fontFamily: "Jost",
                  fontSize: "15px",
                  fontWeight: "500",
                  lineHeight: "135.2%",
                  fontStyle: "normal",
                }}
                opacity="0.5"
                mt="50px"
              >
                PANDA est la plateforme de networking des experts pour la
                réalisation de leurs projets professionnels sur le continent
                africain!
              </Text>
            </Box>
          </Box>
        </Box>

        {/* 2 */}
        <Box sx={{ padding: "20px" }}>
          <Text
            sx={{
              fontFamily: "Jost",
              fontSize: "65px",
              fontWeight: "500",
              lineHeight: "117%",
              fontStyle: "normal",
            }}
            textAlign="left"
            ml="40px"
            mt="40px"
          >
            Missions de PANDA
          </Text>
          <Flex container mt={10}>
            {missionsData.map((mission, index) => (
              <Grid
                item
                md={2.3}
                key={index}
                sx={{
                  border: "2px solid pink",
                  borderRadius: "100px 100px 00px 00px",
                  padding: "25px",
                  textAlign: "center",
                  marginX: "5px",
                  width: "500px",
                }}
              >
                <Text variant="body1">{mission.number}</Text>
                <Text
                  mt={3}
                  variant="body1"
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "30px",
                    fontWeight: "500",
                    lineHeight: "117.2%",
                    fontStyle: "normal",
                  }}
                >
                  {mission.title}
                </Text>
                <Text
                  mt={2}
                  sx={{
                    fontFamily: "BIZ UDPGothic",
                    fontSize: "13px",
                    fontWeight: "400",
                    lineHeight: "151.2%",
                    fontStyle: "normal",
                    color: "#1F1F1F",
                  }}
                  variant="body1"
                >
                  {mission.description}
                </Text>
              </Grid>
            ))}
          </Flex>
        </Box>

        {/* 3 */}
        <Box sx={{ padding: "20px" }}>
          <Text
            variant="h6"
            sx={{
              fontFamily: "Jost",
              fontSize: "65px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "135%",
              textTransform: "capitalize",
            }}
            textAlign="left"
            ml="40px"
            mt="40px"
          >
            Fonctionnalites
          </Text>
          <Flex container mt={10}>
            {fonctionnalitesData.map((mission, index) => (
              <Grid
                item
                md={2.3}
                key={index}
                border="1px solid #E0E0E0"
                sx={{
                  borderTop: "2px solid pink",
                  borderRadius: "100px 100px 00px 00px",
                  padding: "25px",
                  textAlign: "center",
                  marginX: "5px",
                  width: "300px",
                  mr: "50px",
                }}
              >
                <Image src={star} alt="star" ml="100px" mt="20px" />
                <Text
                  variant="body1"
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "18px",
                    fontWeight: "500",

                    fontStyle: "normal",
                    textTransform: "uppercase",
                  }}
                >
                  {mission.title}
                </Text>
                <Text
                  sx={{
                    fontFamily: "BIZ UDPGothic",
                    fontSize: "15px",
                    fontWeight: "400",

                    fontStyle: "normal",
                    color: "#1F1F1F",
                  }}
                  variant="body1"
                >
                  {mission.description}
                </Text>
              </Grid>
            ))}
            <Image
              src={map}
              alt="circle"
              style={{ width: "459.507px", height: "444.499px" }}
            />
          </Flex>
          <Flex container mt={10}>
            {fonction.map((mission, index) => (
              <Grid
                item
                md={2.3}
                key={index}
                border="1px solid #E0E0E0"
                sx={{
                  borderBottom: "2px solid pink",
                  borderRadius: "00px 00px 100px 100px",
                  padding: "25px",
                  textAlign: "center",
                  marginX: "5px",
                  width: "300px",
                  mr: "50px",
                }}
              >
                <Image src={star} alt="star" ml="100px" mt="20px" />
                <Text
                  variant="body1"
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "18px",
                    fontWeight: "500",

                    fontStyle: "normal",
                    textTransform: "uppercase",
                  }}
                >
                  {mission.title}
                </Text>
                <Text
                  sx={{
                    fontFamily: "BIZ UDPGothic",
                    fontSize: "15px",
                    fontWeight: "400",

                    fontStyle: "normal",
                    color: "#1F1F1F",
                  }}
                  variant="body1"
                >
                  {mission.description}
                </Text>
              </Grid>
            ))}
            <Button
              variant="outlined"
              width="535px"
              padding="28px 100px"
              justify-content="center"
              align-items="center"
              border="0.5px solid #1F1F1F"
              bg="white"
              sx={{ borderRadius: "55px", margin: "auto", marginTop: "200px" }}
            >
              Explorer la Travel Map
            </Button>
          </Flex>
        </Box>

        {/* 4 */}
        <Flex container mt="100px" w="100%" sx={{ padding: "20px" }}>
          <Grid item md={4} p={20} w="40%">
            <Flex>
              <Image src={line1} background="#E0E0E0" />
              <Image src={line2} ml="20px" background="#E0E0E0" />
              <Image src={line2} ml="20px" background="#E0E0E0" />
            </Flex>
            <Text
              sx={{
                fontFamily: "Jost",
                fontSize: "65px",
                fontWeight: "500",
                lineHeight: "117%",
                fontStyle: "normal",
              }}
            >
              Découvrez les experts
            </Text>
            <Text
              sx={{
                fontFamily: "Jost",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "135.2%",
                fontStyle: "normal",
                color: "#1F1F1F",
                marginTop: "280px",
              }}
              p={10}
            >
              Connectez-vous avec des organisations africaines, postulez au job
              de vos rêves en Afrique ou partagez votre expertise même à
              distance!
            </Text>
            <Button
              variant="outlined"
              width="335px"
              padding="28px 100px"
              justify-content="center"
              align-items="center"
              border="0.5px solid #1F1F1F"
              bg="white"
              sx={{ borderRadius: "55px", margin: "auto", marginTop: "200px" }}
            >
              Voir tout
            </Button>
          </Grid>
          <Grid item md={8} w="60%">
            <Text
              sx={{
                fontFamily: "Jost",
                fontSize: "40px",
                fontWeight: "500",
                lineHeight: "117%",
                fontStyle: "normal",
                color: "#1F1F1F",
                // width: "887.735px",

                height: "219.638px",
                flexShrink: " 0",
              }}
              p={10}
            >
              “ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une
              offre d'emploi pour le poste de web developer publiée sur PANDA et
              le mois suivant je commençais à travailler à Dakar! ”
            </Text>
            <Text
              sx={{
                fontFamily: "BIZ UDPGothic",
                fontSize: "13px",
                fontWeight: "700",

                fontStyle: "normal",
                color: "#A95454",

                color: "#A95454",
                textTransform: "uppercase",
                textAlign: "right",
                marginRight: "20px",
              }}
            >
              Omar Ndiaye
            </Text>
            <Flex mt="-20px" w="fit-content" h="fit-content" mr="20px" gap={30}>
              <img
                src={profile1}
                alt="profile1"
                style={{
                  // borderTop: "1px solid ",
                  // borderRadius: "200px 200px 00px 00px",
                  width: "300px",
                  height: "500px",
                  flexShrink: "0",
                  marginTop: "9.5%",
                  // borderRadius: "11px",
                  // mixBlendMode: "luminosity",
                }}
              />
              <img
                src={profile2}
                alt="profile2"
                style={{
                  // borderTop: "1px solid ",
                  // borderRadius: "200px 200px 00px 00px",
                  // marginLeft: "30px",

                  width: "250px",
                  height: "300px",
                  flexShrink: "0",
                  // borderRadius: "11px",
                  mixBlendMode: "luminosity",
                  marginTop: "34.2%",
                }}
              />
              <img
                src={profile3}
                alt="profile3"
                style={{
                  // borderTop: "1px solid ",
                  // borderRadius: "200px 200px 00px 00px",
                  width: "200px",
                  height: "250px",
                  flexShrink: "0",
                  marginLeft: "-1px",
                  // borderRadius: "11px",
                  mixBlendMode: "luminosity",
                  marginTop: "40.4%",
                }}
              />
            </Flex>
          </Grid>
        </Flex>
        {/* 5 */}
        <Flex container mt="100px" w="100%" sx={{ padding: "20px" }}>
          <Grid item md={8} w="60%">
            <Text
              sx={{
                fontFamily: "Jost",
                fontSize: "40px",
                fontWeight: "500",
                lineHeight: "117%",
                fontStyle: "normal",
                color: "#1F1F1F",
                height: "219.638px",
                flexShrink: " 0",
              }}
              p={10}
            >
              “PANDA nous donne accès aux meilleurs talents dans leur domaine
              d'activité et à de réelles perspectives de collaboration! ”
            </Text>
            <Text
              sx={{
                fontFamily: "BIZ UDPGothic",
                fontSize: "13px",
                fontWeight: "700",

                fontStyle: "normal",
                color: "#A95454",

                color: "#A95454",
                textTransform: "uppercase",
                textAlign: "left",
                marginRight: "20px",
              }}
            >
              LGB Company
            </Text>
            <Flex mt="-40px" w="fit-content" h="fit-content" mr="20px" gap={30}>
              <img
                src={img1}
                alt="profile1"
                style={{
                  width: "200px",
                  height: "250px",
                  flexShrink: "0",
                  marginLeft: "-1px",
                  // borderRadius: "11px",
                  mixBlendMode: "luminosity",
                  marginTop: "40.4%",
                }}
              />
              <img
                src={img2}
                alt="profile2"
                style={{
                  width: "250px",
                  height: "300px",
                  flexShrink: "0",
                  // borderRadius: "11px",
                  mixBlendMode: "luminosity",
                  marginTop: "34.2%",
                }}
              />
              <img
                src={img3}
                alt="profile3"
                style={{
                  width: "300px",
                  height: "500px",
                  flexShrink: "0",
                  marginTop: "9.5%",
                }}
              />
            </Flex>
          </Grid>
          <Grid item md={4} p={20} w="40%">
            <Flex>
              <Image src={line1} background="#E0E0E0" />
              <Image src={line2} ml="20px" background="#E0E0E0" />
              <Image src={line2} ml="20px" background="#E0E0E0" />
            </Flex>
            <Text
              sx={{
                fontFamily: "Jost",
                fontSize: "65px",
                fontWeight: "500",
                lineHeight: "117%",
                fontStyle: "normal",
              }}
            >
              Découvrez les organisations en Afrique
            </Text>
            <Text
              sx={{
                fontFamily: "Jost",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "135.2%",
                fontStyle: "normal",
                color: "#1F1F1F",
                marginTop: "80px",
              }}
              p={10}
            >
              Trouvez les experts que vous recherchez, publiez vos offres
              d'emploi et d'autres contenus exclusifs sur votre organisation!
            </Text>
            <Button
              variant="outlined"
              width="335px"
              padding="28px 100px"
              justify-content="center"
              align-items="center"
              border="0.5px solid #1F1F1F"
              bg="white"
              sx={{ borderRadius: "55px", margin: "auto", marginTop: "250px" }}
            >
              Voir tout
            </Button>
          </Grid>
        </Flex>
        {/* 6 */}
        <Flex container mt="100px" w="100%" sx={{ padding: "20px" }}>
          <Grid item md={4} p={20} w="40%">
            <Text
              sx={{
                fontFamily: "Jost",
                fontSize: "65px",
                fontWeight: "500",
                lineHeight: "117%",
                fontStyle: "normal",
              }}
              p={5}
            >
              Offres d'emploi
            </Text>
            <Text
              sx={{
                fontFamily: "Jost",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "135.2%",
                fontStyle: "normal",
                color: "#1F1F1F",
                marginTop: "80px",
                textAlign: "left",
              }}
              p={10}
            >
              Publiez les offres d'emploi au sein de votre organisation auprès
              de notre communauté d'experts! Expert à la recherche d'un emploi
              en Afrique? Trouvez le job de vos rêves!
            </Text>
            <Button
              variant="outlined"
              width="335px"
              padding="28px 100px"
              justify-content="center"
              align-items="center"
              border="0.5px solid #1F1F1F"
              bg="white"
              sx={{ borderRadius: "55px", margin: "auto", marginTop: "200px" }}
            >
              Publier ou postuler à une offre d'emploi
            </Button>
          </Grid>
          <Flex item md={8} w="60%" h="fit-content" gap={20}>
            <Grid item md={6} w="50%" h="fit-content" gap={20}>
              <Box
                p={5}
                sx={{
                  textAlign: "center",
                  border: "1px solid gray",
                  borderRadius: "100px 100px 100px 100px",
                }}
              >
                <Text
                  variant="h6"
                  sx={{
                    color: "#1F1F1F",
                    fontFamily: "Jost",
                    fontSize: "30px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    lineHeight: "122.2%",
                    marginTop: "30px",
                  }}
                >
                  Lead Software Engineer
                </Text>
                <Text
                  mt={1}
                  variant="body1"
                  sx={{
                    color: "#A95454",
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    fontStyle: "normal",
                    lineHeight: "135.2%",
                  }}
                >
                  Madagascar{" "}
                </Text>
                <Box
                  mt={3}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Flex direction={"column"}>
                    <Text color="#A95454">Full-time</Text>
                    <Text>+Favorites</Text>
                  </Flex>

                  <Flex direction={"column"}>
                    <img src={software} alt="Logo1" />
                    <Text color="black" mt="10px">
                      Tubik Studio
                    </Text>
                  </Flex>

                  <Text>1 day ago</Text>
                </Box>
                <Button
                  variant="outlined"
                  width="135px"
                  padding="28px 100px"
                  justify-content="center"
                  align-items="center"
                  border="0.5px solid #1F1F1F"
                  bg="white"
                  sx={{
                    borderRadius: "55px",
                    margin: "auto",
                    marginTop: "50px",
                  }}
                >
                  Voir
                </Button>
              </Box>
              <Box
                p={5}
                sx={{
                  textAlign: "center",
                  border: "1px solid gray",
                  borderRadius: "100px 100px 100px 100px",
                }}
              >
                <Text
                  variant="h6"
                  sx={{
                    color: "#1F1F1F",
                    fontFamily: "Jost",
                    fontSize: "30px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    lineHeight: "122.2%",
                    marginTop: "30px",
                  }}
                >
                  Financial Analyst
                </Text>
                <Text
                  mt={1}
                  variant="body1"
                  sx={{
                    color: "#A95454",
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    fontStyle: "normal",
                    lineHeight: "135.2%",
                  }}
                >
                  Madagascar{" "}
                </Text>
                <Box
                  mt={3}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Flex direction={"column"}>
                    <Text color="#A95454">Full-time</Text>
                    <Text>+Favorites</Text>
                  </Flex>

                  <Flex direction={"column"}>
                    <img src={netfli} alt="Logo1" />
                    <Text color="black" mt="10px">
                      Tubik Studio
                    </Text>
                  </Flex>

                  <Text>1 day ago</Text>
                </Box>
                <Button
                  variant="outlined"
                  width="135px"
                  padding="28px 100px"
                  justify-content="center"
                  align-items="center"
                  border="0.5px solid #1F1F1F"
                  bg="white"
                  sx={{
                    borderRadius: "55px",
                    margin: "auto",
                    marginTop: "50px",
                  }}
                >
                  Voir
                </Button>
              </Box>
            </Grid>
            <Grid item md={6} w="50%" h="fit-content" gap={20}>
              <Box
                p={5}
                sx={{
                  textAlign: "center",
                  border: "1px solid gray",
                  borderRadius: "100px 100px 100px 100px",
                }}
              >
                <Text
                  variant="h6"
                  sx={{
                    color: "#1F1F1F",
                    fontFamily: "Jost",
                    fontSize: "30px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    lineHeight: "122.2%",
                    marginTop: "30px",
                  }}
                >
                  Risk Analyst
                </Text>
                <Text
                  mt={1}
                  variant="body1"
                  sx={{
                    color: "#A95454",
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    fontStyle: "normal",
                    lineHeight: "135.2%",
                  }}
                >
                  Madagascar{" "}
                </Text>
                <Box
                  mt={3}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Flex direction={"column"}>
                    <Text color="#A95454">Full-time</Text>
                    <Text>+Favorites</Text>
                  </Flex>

                  <Flex direction={"column"}>
                    <img src={r} alt="Logo1" />
                    <Text color="black" mt="10px">
                      Tubik Studio
                    </Text>
                  </Flex>

                  <Text>1 day ago</Text>
                </Box>
                <Button
                  variant="outlined"
                  width="135px"
                  padding="28px 100px"
                  justify-content="center"
                  align-items="center"
                  border="0.5px solid #1F1F1F"
                  bg="white"
                  sx={{
                    borderRadius: "55px",
                    margin: "auto",
                    marginTop: "50px",
                  }}
                >
                  Voir
                </Button>
              </Box>
              <Box
                p={5}
                sx={{
                  textAlign: "center",
                  border: "1px solid gray",
                  borderRadius: "100px 100px 100px 100px",
                }}
              >
                <Text
                  variant="h6"
                  sx={{
                    color: "#1F1F1F",
                    fontFamily: "Jost",
                    fontSize: "30px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    lineHeight: "122.2%",
                    marginTop: "30px",
                  }}
                >
                  Data Engineer
                </Text>
                <Text
                  mt={1}
                  variant="body1"
                  sx={{
                    color: "#A95454",
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    fontStyle: "normal",
                    lineHeight: "135.2%",
                  }}
                >
                  Madagascar{" "}
                </Text>
                <Box
                  mt={3}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Flex direction={"column"}>
                    <Text color="#A95454">Full-time</Text>
                    <Text>+Favorites</Text>
                  </Flex>

                  <Flex direction={"column"}>
                    <img src={data} alt="Logo1" />
                    <Text color="black" mt="10px">
                      Tubik Studio
                    </Text>
                  </Flex>

                  <Text>1 day ago</Text>
                </Box>
                <Button
                  variant="outlined"
                  width="135px"
                  padding="28px 100px"
                  justify-content="center"
                  align-items="center"
                  border="0.5px solid #1F1F1F"
                  bg="white"
                  sx={{
                    borderRadius: "55px",
                    margin: "auto",
                    marginTop: "50px",
                  }}
                >
                  Voir
                </Button>
              </Box>
            </Grid>
          </Flex>
        </Flex>
        {/* 7 */}
        <Flex container sx={{ padding: "20px" }} w="100%" mt="100px">
          <Grid item p={10} w="33%">
            <Flex p={0}  mb={10}>
              <Image src={line1} background="#E0E0E0" />
              <Image src={line2} ml="20px" background="#E0E0E0" />
              <Image src={line2} ml="20px" background="#E0E0E0" />
            </Flex>
            <Text
              variant="h6"
              sx={{
                color: "#1F1F1F",
                fontFamily: "Jost",
                fontSize: "65px",
                fontWeight: "500",
                lineHeight: "117%",
                fontStyle: "normal",
                textAlign: "left",
              }}
            >
              Evénements à venir
            </Text>
            <Text
              mt={2}
              sx={{
                color: "#1F1F1F",
                fontFamily: "BIZ UDPGothic",
                fontSize: "15px",
                fontWeight: "500",
                lineHeight: "135.2%",
                fontStyle: "normal",
                textAlign: "left",
              }}
            >
              Publié par: Pablo Diahuno
            </Text>
            <img
              src={profile}
              alt="subimg"
              style={{
                borderRadius: "50%",
                marginTop: "20px",
              }}
            />
            <Text
              mt={5}
              sx={{
                color: "#1F1F1F",
                fontFamily: "Jost",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "135.2%",
                fontStyle: "normal",
                width: "269.018px",
                height: "97.329px",
                flexShrink: "0",
                textAlign: "left",
              }}
            >
              Sortez votre carnet d'adresses! Restez informés de tous les
              événements à venir autour du business en Afrique organisés en
              Afrique ou à l'étranger.
            </Text>
            <Button
              variant="outlined"
              width="335px"
              padding="28px 100px"
              justify-content="center"
              align-items="center"
              border="0.5px solid #1F1F1F"
              bg="white"
              sx={{
                borderRadius: "55px",
                margin: "auto",
                marginLeft: "-20px",
                marginTop: "50px",
              }}
            >
              Publier ou voir les événements
            </Button>
          </Grid>
          <Grid item mt="50px" w="33%">
            <img src={image} alt="centerImg" />
          </Grid>
          <Grid itme mt={200} w="33%">
            <Text mt="-150px">
              <span
                style={{
                  color: "#1F1F1F",
                  fontFamily: "BIZ UDPGothic",
                  fontSize: "13px",
                  fontWeight: "700",
                  // lineHeight: "151.2%",
                  fontStyle: "normal",
                  // width: "269.018px",

                  textAlign: "left",
                }}
              >
                L'événement:{" "}
              </span>
              <span
                style={{
                  color: "#A95454",
                  fontFamily: "BIZ UDPGothic",
                  fontSize: "13px",
                  fontWeight: "700",
                  lineHeight: "151.2%",
                  fontStyle: "normal",
                  // width: "269.018px",
                  // height: "97.329px",

                  textAlign: "left",
                }}
              >
                The Nancy party’s
              </span>
            </Text>
            <Text variant="body1" mt="-270px">
              <span
                style={{
                  color: "#1F1F1F",
                  fontFamily: "BIZ UDPGothic",
                  fontSize: "13px",
                  fontWeight: "700",
                  lineHeight: "151.2%",
                  fontStyle: "normal",
                  width: "269.018px",
                  height: "97.329px",
                  flexShrink: "0",
                  textAlign: "left",
                }}
              >
                Date:{" "}
              </span>
              <span
                style={{
                  color: "#A95454",
                  fontFamily: "BIZ UDPGothic",
                  fontSize: "13px",
                  fontWeight: "700",
                  lineHeight: "151.2%",
                  fontStyle: "normal",
                  width: "269.018px",
                  height: "97.329px",
                  flexShrink: "0",
                  textAlign: "left",
                }}
              >
                10/07/22
              </span>
            </Text>
            <Text variant="body1" mt="-390px">
              <span
                style={{
                  color: "#1F1F1F",
                  fontFamily: "BIZ UDPGothic",
                  fontSize: "13px",
                  fontWeight: "700",
                  lineHeight: "151.2%",
                  fontStyle: "normal",
                  width: "269.018px",
                  height: "97.329px",
                  flexShrink: "0",
                  textAlign: "left",
                }}
              >
                Lieu:{" "}
              </span>
              <span
                style={{
                  color: "#A95454",
                  fontFamily: "BIZ UDPGothic",
                  fontSize: "13px",
                  fontWeight: "700",
                  lineHeight: "151.2%",
                  fontStyle: "normal",
                  width: "269.018px",
                  height: "97.329px",
                  flexShrink: "0",
                  textAlign: "left",
                }}
              >
                Senegal
              </span>
            </Text>
          </Grid>
        </Flex>
        {/* 8 */}
        <Flex  container sx={{ padding: "20px" }}>
          <Grid itme p={10} w="33%">
            <Text
              variant="h6"
              sx={{
                color: "#1F1F1F",
                fontFamily: "Jost",
                fontSize: "65px",
                fontWeight: "500",
                lineHeight: "135%",
                fontStyle: "normal",
                textAlign: "left",
              }}
            >
              Témoignages
            </Text>
            <Text
              mt={4}
              variant="body1"
              sx={{
                color: "#1F1F1F",
                fontFamily: "BIZ UDPGothic",
                fontSize: "13px",
                fontWeight: "700",
                lineHeight: "161.2%",
                fontStyle: "normal",
                textAlign: "left",
              }}
            >
              Diaspora Member:
            </Text>
            <Text
              sx={{
                color: "#A95454",
                fontFamily: "BIZ UDPGothic",
                fontSize: "13px",
                fontWeight: "700",
                lineHeight: "161.2%",
                fontStyle: "normal",
                textAlign: "left",
              }}
            >
              Artur Luison
            </Text>
            <Text
              mt={3}
              variant="body1"
              sx={{
                color: "#1F1F1F",
                fontFamily: "BIZ UDPGothic",
                fontSize: "13px",
                fontWeight: "700",
                lineHeight: "161.2%",
                fontStyle: "normal",
                textAlign: "left",
              }}
            >
              Job Position:
            </Text>
            <Text
              sx={{
                color: "#A95454",
                fontFamily: "BIZ UDPGothic",
                fontSize: "13px",
                fontWeight: "700",
                lineHeight: "161.2%",
                fontStyle: "normal",
                textAlign: "left",
              }}
            >
              Manager
            </Text>
            <Text
              mt={10}
              variant="body1"
              sx={{
                color: "#1F1F1F",
                fontFamily: "Jost",
                fontSize: "15px",
                fontWeight: "500",
                lineHeight: "135.2%",
                fontStyle: "normal",
                height: "200px ",
                width: "200px",
                textAlign: "left",
              }}
            >
              “ Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci. “
            </Text>
          </Grid>
          <Grid item mt={5} w="33%">
            <img src={img} alt="centerImg" style={{ borderRadius: "50%" }} />
          </Grid>
          
          <Grid p={10} w="33%">
            <Flex pb={200} >
              <Image src={line1} background="#E0E0E0" />
              <Image src={line2} ml="20px" background="#E0E0E0" />
              <Image src={line2} ml="20px" background="#E0E0E0" />
            </Flex>
            <Text
              variant="body1"
              sx={{
                color: "#1F1F1F",
                fontFamily: "BIZ UDPGothic",
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "151.2%",
                fontStyle: "normal",
                textAlign: "left",
              }}
          mt={-70}
            >
              Very Nice Atmosphere and experience with “Welcome to PANDA”
            </Text>
            <Text
              mt={6}
              variant="body1"
              sx={{
                color: "#1F1F1F",
                fontFamily: "Jost",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "135.2%",
                fontStyle: "normal",
                textAlign: "left",
              }}
            >
              Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci.
            </Text>
            <Text
              mt={8}
              variant="body1"
              sx={{
                color: "#1F1F1F",
                fontFamily: "Jost",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "135.2%",
                fontStyle: "normal",
                textAlign: "left",
              }}
            >
              Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci.
            </Text>
          </Grid>
        </Flex>
        {/* 9 */}

        <Flex container w="100%" mt="50px">
          <Grid md={6}>
            <Text
              variant="h6"
              sx={{
                color: "#1F1F1F",
                fontFamily: "Jost",
                fontSize: "65px",
                fontWeight: "500",
                lineHeight: "135%",
                fontStyle: "normal",
                textAlign: "left",
              }}
              ml="30px"
            >
              Les fondateurs
            </Text>
            <Flex w="100%" gap={20} mt="50px" p={10}>
              <Box w="100%">
                {" "}
                <img
                  src={avaa}
                  alt="founder1"
                  style={{
                    borderRadius: "200px 200px 00px 00px",
                  }}
                />
                <Text
                  mt={4}
                  variant="body1"
                  sx={{
                    color: "#1F1F1F",
                    fontFamily: "BIZ UDPGothic",
                    fontSize: "13px",
                    fontWeight: "700",
                    lineHeight: "161.2%",
                    fontStyle: "normal",
                  }}
                >
                  Co-fondateur PANDA:
                </Text>
                <Text
                  sx={{
                    color: "#A95454",
                    fontFamily: "BIZ UDPGothic",
                    fontSize: "13px",
                    fontWeight: "700",
                    lineHeight: "161.2%",
                    fontStyle: "normal",
                  }}
                >
                  Sarah Walu Onya
                </Text>
              </Box>

              <Box w="100%">
                {" "}
                <img
                  src={ava}
                  alt="founder1"
                  style={{
                    borderRadius: "200px 200px 00px 00px",
                    // marginLeft: "30px",
                  }}
                />
                <Text
                  mt={4}
                  variant="body1"
                  sx={{
                    color: "#1F1F1F",
                    fontFamily: "BIZ UDPGothic",
                    fontSize: "13px",
                    fontWeight: "700",
                    lineHeight: "161.2%",
                    fontStyle: "normal",
                  }}
                >
                  Co-fondateur PANDA:
                </Text>
                <Text
                  sx={{
                    color: "#A95454",
                    fontFamily: "BIZ UDPGothic",
                    fontSize: "13px",
                    fontWeight: "700",
                    lineHeight: "161.2%",
                    fontStyle: "normal",
                  }}
                >
                  Abdoulaye Ba
                </Text>
              </Box>
            </Flex>
          </Grid>
          <Box
            w="25%"
            h="fit-content"
            mt="150px"
            ml={60}
            sx={{
              border: "1px solid gray",
              borderRadius: "200px 200px 00px 00px",
            }}
          >
            <Text sx={{ padding: "55px", textAlign: "justify" }}>
              “<Text color="#A95454">Sarah et Abdoulaye</Text>sont tous deux
              consultants et managers dans un groupe international de conseil en
              stratégie et management. Ils se sont rencontrés au Luxembourg et
              ont beaucoup échangé sur leur expérience commune dans
              l'entrepreneuriat. Tout au long de leurs discussions, une chose
              très claire est vite apparue : leur passion pour l'entrepreneuriat
              et leur amour de l'Afrique, le continent dont ils sont tous deux
              originaires. “
            </Text>
            <Text sx={{ padding: " 0.5px 55px", textAlign: "justify" }}>
              Ils sont alors convaincus qu'ils peuvent répondre à un besoin
              critique en Afrique et avoir un réel impact en réunissant des
              experts de premier plan du monde entier pour collaborer avec des
              acteurs africains sur des projets visant à faire croître
              l'écosystème de l'innovation en{" "}
              <Text color="#A95454">Afrique.</Text>
            </Text>
          </Box>
        </Flex>
        {/* 10 */}

        <Box mt="100px">
          <Text
            sx={{
              fontFamily: "Jost",
              fontSize: "40px",
              fontWeight: "500",
              lineHeight: "117%",
              fontStyle: "normal",
              color: "#1F1F1F",
              height: "219.638px",
              flexShrink: " 0",
              width: " 1103.035px",
              margin: "auto",
            }}
            p={10}
          >
            “ Notre objectif est de capturer et partager les connaissances, les
            expertises et les réseaux afin de créer des opportunités illimitées,
            que ce soit pour les acteurs africains à la recherche des meilleures
            talents pour développer leurs activités ou pour les experts du monde
            entier qui souhaitent lancer des projets innovants en Afrique. “
          </Text>
          <Text
            sx={{
              fontFamily: "BIZ UDPGothic",
              fontSize: "13px",
              fontWeight: "700",

              fontStyle: "normal",
              color: "#A95454",

              color: "#A95454",
              textTransform: "uppercase",
              textAlign: "right",
              marginRight: "40px",
              marginTop: "90px",
            }}
          >
            Sarah et Abdoulaye
          </Text>
        </Box>

        {/* 11 */}
        <Flex
          flexDirection="column"
          alignItems="stretch"
          mt={60}
          maxW={["full", "full", "100%"]}
          mx="auto"
        >
          <Text
            fontSize={["4xl", "4xl", "6xl"]}
            fontWeight="bold"
            lineHeight={["70px", "70px", "70px"]}
            mb={5}
            mr="200px"
            w="70%"
          >
            Top 5 des domaines d’activités porteurs en Afrique
          </Text>
          <Flex
            alignSelf="center"
            justifyContent={["center", "center", "space-between"]}
            alignItems="center"
            gap={[5, 5, 20]}
            mt={[14, 14, 10]}
            flexWrap={["wrap", "wrap", "nowrap"]}
            maxW={["full", "full", "1299px"]}
          >
            <Image
              loading="lazy"
              src={agri}
              alt="Agri Image"
              // boxSize={["full", "full", "503px"]}
              // objectFit="cover"
              // overflow="hidden"
              my="auto"
              mt="30px"
              w="40%"
              marginRight={10}
              // maxW={["full", "full", "full"]}
            />
            <Box ml='50px'>
              <Flex>
                <Image src={line1} background="#E0E0E0" />
                <Image src={line2} ml="20px" background="#E0E0E0" />
                <Image src={line2} ml="20px" background="#E0E0E0" />
              </Flex>
              <Flex
                flex="1"
                flexDirection="column"
                ml="50px"
                py={[0, 0, 1]}
                maxW={["full", "full", "600px"]}
                gap={5}
              >
                {activityCard("Les énergies renouvelables")}
                {activityCard("L'agro-alimentaire")}
                {activityCard("Les technologies")}
                {activityCard("Le e-commerce")}
                {activityCard("Les solutions de paiement")}

                <Button
                  variant="outlined"
                  width="335px"
                  padding="28px 100px"
                  justify-content="center"
                  align-items="center"
                  border="0.5px solid #1F1F1F"
                  bg="white"
                  sx={{
                    borderRadius: "55px",
                    margin: "auto",
                    marginTop: "50px",
                  }}
                >
                  Suivant
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        {/* 13 */}
        <Flex
          flexDir="column"
          alignItems="stretch"
          mt={[101, 101, 101, 0]}
          px={12}
          maxW="full"
          mx="auto"
        >
          <Text
            // textAlign="center"
            // fontSize={["4xl", "4xl", "4xl", "6xl"]}
            // fontWeight="medium"
            // lineHeight={["54px", "54px", "54px", "54px"]}
            // mt={[28, 28, 28, 10]}
            // maxW={["full", "full", "full", "849px"]}
            // mx="auto"
            sx={{
              fontFamily: "Jost",
              fontSize: "40px",
              fontWeight: "500",
              lineHeight: "117%",
              fontStyle: "normal",
              color: "#1F1F1F",
              height: "219.638px",
              flexShrink: " 0",
              width: " 1103.035px",
              margin: "auto",
              marginTop: "30px",
            }}
            p={10}
          >
            Rejoignez notre communauté et aidez-nous à construire la première
            plateforme de networking en ligne à destination du marché africain!
          </Text>
          <Flex
            flexDir={["column", "column", "column", "row"]}
            alignSelf="center"
            gap={5}
            mt={[28, 28, 28, 10]}
            items={["start", "start", "start", "center"]}
            maxW="full"
            flexWrap="wrap"
          >
            <Button
              // justifyContent="center"
              // alignItems="center"
              // flexShrink="0"
              // h={["59px", "59px", "59px", "59px"]}
              // flexDir="column"
              // flex="1"
              // borderRadius="35px"
              // borderWidth="0.5px"
              // borderStyle="solid"
              // borderColor="stone-900"
              variant="outlined"
              width="335px"
              padding="28px 100px"
              justify-content="center"
              align-items="center"
              border="0.5px solid #1F1F1F"
              bg="white"
              sx={{ borderRadius: "55px", margin: "auto", marginTop: "50px" }}
            >
              Se connecter
            </Button>
            <Button
              // justifyContent="center"
              // alignItems="center"
              // flexShrink="0"
              // h={["59px", "59px", "59px", "59px"]}
              // flexDir="column"
              // flex="1"
              // borderRadius="35px"
              // borderWidth="0.5px"
              // borderStyle="solid"
              // borderColor="stone-900"
              variant="outlined"
              width="335px"
              padding="28px 100px"
              justify-content="center"
              align-items="center"
              border="0.5px solid #1F1F1F"
              bg="white"
              sx={{ borderRadius: "55px", margin: "auto", marginTop: "50px" }}
            >
              Créer un compte
            </Button>
          </Flex>
        </Flex>
        {/* 14 */}
        <Footer />
      </>
    </div>
  );
};

export default Home;
