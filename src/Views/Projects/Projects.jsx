import React from "react";
import { Layout } from "../../layout/Layout";
import { Box, Image, Text } from "@chakra-ui/react";
import { CardProject } from "./components/CardProject";

export const Projects = () => {
  const listProjectMobile = [
    {
      name: "Petgram",
      image: ["./projects/petgram.webp"],
      technologies: [
        "React Native",
        "Expo",
        "Typescript",
        "CSS3",
        "Nest.js",
        "PostgreSQL",
      ],
      description:
        "Petgram es una comunidad de personas amantes de los animales, donde podrás compartir momentos importantes de tus mascotas, obtener información sobre cómo cuidarlas adecuadamente, reseñas de tiendas y veterinarios cerca de ti.",
    },
    {
      name: "Fast Food",
      image: ["./projects/delivery.webp"],
      technologies: [
        "React Native",
        "Expo",
        "Typescript",
        "CSS3",
        "Nest.js",
        "PostgreSQL",
      ],
      description:
        "Es una aplicación de comida donde podrás descubrir restaurantes cerca de ti, podrás ver sus instalaciones, opiniones de clientes y también solicitar entrega.",
    },
  ];
  const listProjects = [
    {
      name: "Game Minicraft",
      image: ["./projects/minicraft.webp"],
      technologies: ["React", "JavaScript", "CSS3", "Three.js"],
      description:
        "Minijuego de apilar cubos y hacer construcciones, similar a Minecraft, puedes apilar o eliminar cubos, además de guardar el progreso en la memoria del navegador o restaurar el plano sin cubos",
      link: "https://minicraft.netlify.app/",
    },
    {
      name: "Journal App",
      image: ["./projects/journal.png"],
      technologies: ["React", "JavaScript", "MUI", "Firebase", "Redux"],
      description:
        "Aplicación web donde podrás guardar tus experiencias diarias y tener tus experiencias en un lugar seguro.",
      link: "https://journal-app-wil.netlify.app/",
    },
  ];

  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          bg: "hsl(240, 2%, 12%)",
          margin: "0 auto",
          borderRadius: 20,
          transition: "0.5s ease-in-out",
          border: "1px solid hsl(227, 100%, 56%);",
          padding: "13px",
        }}
      >
        <Box>
          <Text
            sx={{
              fontSize: "25px",
              color: "white",
              fontWeight: "bold",

              "@media (min-width: 1100px)": {
                fontSize: "30px",
              },
            }}
          >
            Portfolio
          </Text>
          <Box
            sx={{
              width: "40px",
              height: "5px",
              bg: "primary",
              borderRadius: 20,
              mb: "1rem",

              "@media (min-width: 800px)": {
                mb: "1.5rem",
              },
            }}
          ></Box>
        </Box>

        <Box>
          <Text
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
              padding: ".5rem 0",
            }}
          >
            App Mobile
          </Text>

          <Box
            sx={{
              "@media (min-width: 1100px)": {
                display: "flex",
                gap: "10px",
                justifyContent: "center",
              },
            }}
          >
            {listProjectMobile.map(
              ({ image, name, technologies, description }) => (
                <Box
                  sx={{
                    mb: "1rem",
                    bg: "rgba(255,255,255,.035)",
                    borderRadius: 20,
                    padding: "15px",

                    "@media (min-width: 1100px)": {
                      width: "48%",
                    },
                  }}
                >
                  <Image
                    width="80%"
                    margin="0 auto"
                    src={image}
                    sx={{
                      "@media (min-width: 800px)": {
                        width: "70%",
                        maxW: "500px",
                      },
                    }}
                  />

                  <Text
                    fontSize="2xl"
                    color="white"
                    fontWeight="bold"
                    padding=".5rem 0"
                  >
                    {name}
                  </Text>

                  <Text
                    sx={{
                      fontSize: ".9em",
                      mb: ".5rem",
                    }}
                  >
                    {description}
                  </Text>

                  <Box
                    gap="10px"
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    mb=".5rem"
                  >
                    {technologies.map((i) => (
                      <Text
                        bg="backGrey"
                        width="120px"
                        padding="5px"
                        borderRadius="30px"
                        textAlign="center"
                      >
                        {i}
                      </Text>
                    ))}
                  </Box>

                  <Box sx={{ m: "1rem 0" }}>
                    <Text sx={{ color: "white", fontSize: "1em" }}>
                    En poco tiempo podrás probar nuestra versión beta
                      en plataformas como:
                    </Text>

                    <Box sx={{ display: "flex", gap: "15px", pt: ".5rem" }}>
                      <Image width="50px" src="./icons/googlePlay.svg" />
                      <Image width="50px" src="./icons/appStore.svg" />
                    </Box>
                  </Box>
                </Box>
              )
            )}
          </Box>
        </Box>

        <Box
          sx={{
            m: "0 auto",
            padding: ".5rem",
          }}
        >
          <Text
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
              padding: ".5rem 0",
            }}
          >
            App Web
          </Text>
          <Box
            sx={{
              "@media (min-width: 1100px)": {
                display: "flex",
                gap: "10px",
                justifyContent: "center",
              },
            }}
          >
            {listProjects.map((project) => (
              <CardProject key={project.name} project={project} />
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
