import React from "react";
import { Layout } from "../../layout/Layout";
import { Box, Image, Link, Text } from "@chakra-ui/react";

export const Experience = () => {
  const listSkills = [
    {
      name: "HTML5",
      type: "frontend",
      image: "./skills/html.png",
    },
    {
      name: "CSS3",
      type: "frontend",
      image: "./skills/css.png",
    },
    {
      name: "JavaScript",
      type: "frontend",
      image: "./skills/js.png",
    },
    {
      name: "TypeScript",
      type: "frontend",
      image: "./skills/typescript-icon.svg",
    },
    {
      name: "Electron",
      type: "frontend",
      image: "./skills/electronjs.svg",
    },
    {
      name: "Flutter",
      type: "frontend",
      image: "./skills/react-native.svg",
    },
    {
      name: "Vue",
      type: "frontend",
      image: "./skills/vue.svg",
    },
    {
      name: "Node.js",
      type: "backend",
      image: "./skills/nodejs.svg",
    },
    {
      name: "Flutter",
      type: "backend",
      image: "./skills/python.svg",
    },
    {
      name: "Nest.js",
      type: "backend",
      image: "./skills/nestjs.svg",
    },
    {
      name: "PostgreSQL",
      type: "backend",
      image: "./skills/postgresql.svg",
    },
    {
      name: "MySql",
      type: "backend",
      image: "./skills/postgresql.svg",
    },
    {
      name: "MongoDB",
      type: "backend",
      image: "./skills/mongodb.svg",
    },
  ];

  const frontend = listSkills.filter((skill) => skill.type == "frontend");
  const backend = listSkills.filter((skill) => skill.type == "backend");
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
          mb: "1rem",
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
            Resume
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
          {/* Experience */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: ".5rem",
            }}
          >
            <Box
              sx={{
                position: "relative",
                bgGradient:
                  "linear-gradient( to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50% )",
                width: "30px",
                height: "30px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                boxShadow: "-4px 8px 24px hsla(0, 0%, 0%, 0.25)",
                zIndex: 1,
                mr: ".8rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-book"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#1F51FF"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </Box>

            <Text
              sx={{
                fontSize: "18px",
                color: "white",
                fontWeight: "bold",

                "@media (min-width: 1100px)": {
                  fontSize: "24px",
                },
              }}
            >
              Experiencia
            </Text>
          </Box>

          <Box sx={{ ml: "45px", position: "relative" }}>
            <Box sx={{ mb: "1rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "-33px",
                  top: "10px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "100%",
                  bg: "primary",
                  boxShadow: "0 0 0 4px hsl(227, 100%, 56%);",
                }}
              ></Box>
              <Text
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  "@media (min-width: 1100px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Programador Fullstack
              </Text>
              <Text>IMA</Text>
              <Text sx={{ fontSize: "15px", color: "primary" }}>2024</Text>
            </Box>
          </Box>

          <Box sx={{ ml: "45px", position: "relative" }}>
            <Box sx={{ mb: "1rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "-33px",
                  top: "10px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "100%",
                  bg: "primary",
                  boxShadow: "0 0 0 4px hsl(227, 100%, 56%);",
                }}
              ></Box>
              <Text
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  "@media (min-width: 1100px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Programador Fullstack - Mobile. Líder de Desarrollo.
              </Text>
              <Text>Mekautos</Text>
              <Text sx={{ fontSize: "15px", color: "primary" }}>
                2024-Presente
              </Text>
            </Box>
          </Box>

          <Box sx={{ ml: "45px", position: "relative" }}>
            <Box sx={{ mb: "1rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "-33px",
                  top: "10px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "100%",
                  bg: "primary",
                  boxShadow: "0 0 0 4px hsl(227, 100%, 56%);",
                }}
              ></Box>
              <Text
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  "@media (min-width: 1100px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Programador Fullstack - Mobile.
              </Text>
              <Text>Goddito</Text>
              <Text sx={{ fontSize: "15px", color: "primary" }}>
                2024-Presente
              </Text>
            </Box>
          </Box>

          <Box sx={{ ml: "45px", position: "relative" }}>
            <Box sx={{ mb: "1rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "-33px",
                  top: "10px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "100%",
                  bg: "primary",
                  boxShadow: "0 0 0 4px hsl(227, 100%, 56%);",
                }}
              ></Box>
              <Text
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  "@media (min-width: 1100px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Programador Fullstack.
              </Text>
              <Text>AP-Worlds Digital Services</Text>
              <Text sx={{ fontSize: "15px", color: "primary" }}>
                2019 - 2021
              </Text>
            </Box>
          </Box>

          <Box sx={{ ml: "45px", position: "relative" }}>
            <Box sx={{ mb: "1rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "-33px",
                  top: "10px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "100%",
                  bg: "primary",
                  boxShadow: "0 0 0 4px hsl(227, 100%, 56%);",
                }}
              ></Box>
              <Text
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  "@media (min-width: 1100px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Programador Fullstack. Líder de Desarrollo.
              </Text>
              <Text>PAFEM</Text>
              <Text sx={{ fontSize: "15px", color: "primary" }}>
                2018 - 2019
              </Text>
            </Box>
          </Box>

          <Box sx={{ ml: "45px", position: "relative" }}>
            <Box sx={{ mb: "1rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "-33px",
                  top: "10px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "100%",
                  bg: "primary",
                  boxShadow: "0 0 0 4px hsl(227, 100%, 56%);",
                }}
              ></Box>
              <Text
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  "@media (min-width: 1100px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Programador Fullstack.
              </Text>
              <Text>Tu WEB</Text>
              <Text sx={{ fontSize: "15px", color: "primary" }}>
                2016 - 2018
              </Text>
            </Box>
          </Box>

          <Box sx={{ ml: "45px", position: "relative" }}>
            <Box sx={{ mb: "1rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "-33px",
                  top: "10px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "100%",
                  bg: "primary",
                  boxShadow: "0 0 0 4px hsl(227, 100%, 56%);",
                }}
              ></Box>
              <Text
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  "@media (min-width: 1100px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Programador y Redes Informaticas.
              </Text>
              <Text>IUTVAL</Text>
              <Text sx={{ fontSize: "15px", color: "primary" }}>
                2016 - 2018
              </Text>
            </Box>
          </Box>

          <Box sx={{ ml: "45px", position: "relative" }}>
            <Box sx={{ mb: "1rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "-33px",
                  top: "10px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "100%",
                  bg: "primary",
                  boxShadow: "0 0 0 4px hsl(227, 100%, 56%);",
                }}
              ></Box>
              <Text
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  "@media (min-width: 1100px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Programador Fullstack.
              </Text>
              <Text>Petrocasa Construcción</Text>
              <Text sx={{ fontSize: "15px", color: "primary" }}>
                2014 - 2015
              </Text>
            </Box>
          </Box>

          <Box sx={{ ml: "45px", position: "relative" }}>
            <Box sx={{ mb: "1rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "-33px",
                  top: "10px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "100%",
                  bg: "primary",
                  boxShadow: "0 0 0 4px hsl(227, 100%, 56%);",
                }}
              ></Box>
              <Text
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  "@media (min-width: 1100px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Tecníco de computación.
              </Text>
              <Text>MP Computación</Text>
              <Text sx={{ fontSize: "15px", color: "primary" }}>
                2010 - 2012
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          bg: "hsl(240, 2%, 12%)",
          margin: "0 auto",
          borderRadius: 20,
          transition: "0.5s ease-in-out",
          border: "1px solid hsl(227, 100%, 56%);",
          padding: "13px",
          mb: "1rem",
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
            Habilidades
          </Text>
          <Box
            sx={{
              width: "40px",
              height: "5px",
              bg: "primary",
              borderRadius: 20,
              mb: "1rem",
            }}
          ></Box>
        </Box>

        <Box>
          <Text
            fontSize="2xl"
            color="white"
            fontWeight="bold"
            padding=".5rem 0"
          >
            Frontend
          </Text>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "left",
              gap: "10px",
            }}
          >
            {frontend.map((skill) => (
              <Box
                sx={{
                  display: "flex",
                  borderRadius: 10,
                  flexDirection: "column",
                  padding: ".5rem",
                  width: "130px",
                  bg: "backGrey",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  sx={{ width: "80px", height: "80px" }}
                  src={skill.image}
                />
                <Text sx={{ mt: ".3rem" }}>{skill.name}</Text>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ mt: "1rem" }}>
          <Text
            fontSize="2xl"
            color="white"
            fontWeight="bold"
            padding=".5rem 0"
          >
            Backend
          </Text>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "left",
              gap: "10px",
            }}
          >
            {backend.map((skill) => (
              <Box
                sx={{
                  display: "flex",
                  borderRadius: 10,
                  flexDirection: "column",
                  padding: ".5rem",
                  width: "130px",
                  bg: "backGrey",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  sx={{ width: "80px", height: "80px" }}
                  src={skill.image}
                />
                <Text sx={{ mt: ".3rem" }}>{skill.name}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
