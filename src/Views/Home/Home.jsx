import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../layout/Layout";

export const Home = () => {
  return (
    <>
      <Layout>
        <Box
          position="relative"
          sx={{
            width: "100%",
            bg: "hsl(240, 2%, 12%)",
            margin: "0 auto",
            borderRadius: 20,
            transition: "0.5s ease-in-out",
            border: "1px solid hsl(227, 100%, 56%);",

            padding: "13px",
            mb: "1rem",

            "@media (min-width: 800px)": {
              minH: "95vh",
            },
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
              About me
            </Text>
            <Box
              sx={{
                width: "40px",
                height: "5px",
                bg: "primary",
                borderRadius: 20,
                mb: ".5rem",

                "@media (min-width: 800px)": {
                  mb: "1.5rem",
                },
              }}
            ></Box>
          </Box>

          <Box>
            <Text
              sx={{
                mb: "15px",
                "@media (min-width: 1100px)": {
                  fontSize: "1.15em",
                },
              }}
            >
              SUEÑOS: Busco obtener un trabajo con excelente estabilidad laboral, casarme, formar una familia, comprar una casa e independizarme de mis padres.
VALORES: Mis principios se basan en lo que Dios me demanda como su hijo. Aspiro a ser un profesional ético, transparente y eficaz, comprometido con el rol que desempeño dentro de una empresa.

            </Text>

            <Text
              sx={{
                "@media (min-width: 1100px)": {
                  fontSize: "1.15em",
                },
              }}
            >
MI TRABAJO SOÑADO: Deseo trabajar en una empresa destacada, formar parte de un equipo sólido en el cual podamos ayudarnos mutuamente. Busco oportunidades para mi desarrollo profesional y ofrecer todo mi potencial para posicionar a la empresa en los primeros lugares a nivel mundial. Valoraría que el esfuerzo mío y de mis compañeros sea reconocido y valorado por la empresa.

            </Text>
          </Box>

          <Box sx={{ mt: "1.2rem" }}>
            <Text
              sx={{
                fontSize: "25px",
                color: "white",
                fontWeight: "bold",
                mb: "10px",
              }}
            >
              Que estoy haciendo
            </Text>

            <Box
              sx={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",

                "@media (min-width: 1100px)": {
                  flexDirection: "row",
                },
              }}
            >
              <Box
                sx={{
                  bg: "rgba(255,255,255,.035)",
                  width: "100%",
                  maxW: "500px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "left",
                  padding: ".5rem",
                  borderRadius: "20px",

                  "@media (min-width: 1100px)": {
                    width: "48%",
                    minH: "180px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Box>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-device-mobile-code"
                      width="70"
                      height="70"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#1F51FF"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
                      <path d="M20 21l2 -2l-2 -2" />
                      <path d="M17 17l-2 2l2 2" />
                      <path d="M11 4h2" />
                      <path d="M12 17v.01" />
                    </svg>
                  </Box>
                  <Box sx={{ padding: ".4rem" }}>
                    <Text
                      sx={{
                        fontSize: "1.35em",
                        fontWeight: "bold",
                        color: "white",
                        mb: "3px",
                      }}
                    >
                      Aplicaciones móviles
                    </Text>
                    <Text sx={{ fontSize: "1em", fontWeight: "400" }}>
                      Desarrollo profesional de aplicaciones para iOS y Android.
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  bg: "rgba(255,255,255,.035)",
                  width: "100%",
                  maxW: "500px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "left",
                  padding: ".5rem",
                  borderRadius: "20px",

                  "@media (min-width: 1100px)": {
                    width: "48%",
                    minH: "180px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Box>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-device-desktop-code"
                      width="70"
                      height="70"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#1F51FF"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
                      <path d="M7 20h4" />
                      <path d="M9 16v4" />
                      <path d="M20 21l2 -2l-2 -2" />
                      <path d="M17 17l-2 2l2 2" />
                    </svg>
                  </Box>
                  <Box sx={{ padding: ".4rem" }}>
                    <Text
                      sx={{
                        fontSize: "1.35em",
                        fontWeight: "bold",
                        color: "white",
                        mb: "3px",
                      }}
                    >
                      Desarrollo web
                    </Text>
                    <Text sx={{ fontSize: "1em", fontWeight: "400" }}>
                      Desarrollo de sitios de alta calidad a nivel profesional.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};
