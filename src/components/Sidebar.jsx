import { Box, Image, Text, Link, Button } from "@chakra-ui/react";
import React from "react";

export const Sidebar = ({ sidebarActive, setSidebarActive }) => {
  return (
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

        "@media (min-width: 800px)": {
          width: "35%",
          position: "fixed",

          height: "95vh",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            alignItems: "center",

            "@media (min-width: 800px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            width="80px"
            height="80px"
            /* bgGradient="linear-gradient( to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97% )" */
            bg="primary"
            justifyContent="center"
            alignItems="center"
            borderRadius={50}
            mr=".8rem"
            sx={{
              "@media (min-width: 800px)": {
                width: "120px",
                height: "120px",
                mb: ".5rem",
                borderRadius: "50%"
              },
            }}
          >
            <Image
              sx={{
                "@media (min-width: 800px)": {
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%"
                },
              }}
              width="80px"
              height="80px"
              src="./home/image.png"
              borderRadius= "50%"
            />
          </Box>

          <Box
            sx={{
              width: "70%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              sx={{
                textAlign: "center",
                mb: "5px",
                fontSize: "16px",
                "@media (min-width: 800px)": {
                  fontSize: "1.3em",
                  mb: ".5rem",
                },
              }}
            >
              Abrahan Pulido
            </Text>
            <Text
              sx={{
                bg: "backGrey",
                fontSize: "11px",
                padding: "5px 10px",
                borderRadius: 20,
                textAlign: "center",
                width: "fit-content",
                margin: "0 auto",

                "@media (min-width: 800px)": {
                  fontSize: "1em",
                  padding: "5px 20px",
                },
              }}
            >
              FullStack Developer
            </Text>
          </Box>

          <Box
            onClick={() => setSidebarActive(!sidebarActive)}
            sx={{
              position: "absolute",
              top: "1rem",
              width: "40px",
              right: "1rem",
              borderRadius: "0 15px",
              bg: "backGrey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              "@media (min-width: 800px)": {
                top: 0,
                right: 0,
                width: "60px",
                height: "40px",
              },
            }}
          >
            {sidebarActive != true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
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
                <path d="M6 9l6 6l6 -6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-up"
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
                <path d="M6 15l6 -6l6 6" />
              </svg>
            )}
          </Box>
        </Box>

        {sidebarActive && (
          <Box sx={{ pt: ".5rem" }}>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                background: "hsl(227, 100%, 56%);",
                margin: "16px 0",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
                margin: ".8rem 0",
                gap: "5px",
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
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail"
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
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </Box>

              <Box>
                <Text sx={{ fontSize: "13px", color: "lightGrey" }}>EMAIL</Text>
                <Text sx={{ fontSize: "12px" }}>ing.pulido.abrahan@gmail.com</Text>
              </Box>
              
             
              
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
                margin: ".8rem 0",
                gap: "5px",
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
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-map-pin"
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
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
              </Box>

              <Box>
                <Text sx={{ fontSize: "13px", color: "lightGrey" }}>
                  LOCATION
                </Text>
                <Text sx={{ fontSize: "12px" }}>
                  Valencia, Carabobo, Venezuela
                </Text>
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                height: "1px",
                background: "hsl(227, 100%, 56%);",
                margin: "16px 0",
              }}
            ></Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <Link
                href="https://www.linkedin.com/in/abrahan-pulido-909a35b7/"
                isExternal
              >
                <Image
                  width="28px"
                  height="28px"
                  src="./icons/logo-linkedin.svg"
                />
              </Link>

              <Link href="https://github.com/Abrahan-Eagle" isExternal>
                <Image
                  width="30px"
                  height="30px"
                  src="./icons/logo-github.svg"
                />
              </Link>
            </Box>

            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/CV-Pulido-Abrahan-Fullstack-Developer.pdf"
                download
                sx={{
                  gap: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bg: "primary",
                  margin: "1rem 0",
                  padding: ".5rem",
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "10px",
                }}
              >
                <Text
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.1em",
                  }}
                >
                 Descargar CV
                </Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-download"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 11l5 5l5 -5" />
                  <path d="M12 4l0 12" />
                </svg>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
