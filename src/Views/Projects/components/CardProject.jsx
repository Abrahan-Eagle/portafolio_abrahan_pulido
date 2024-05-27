import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

export const CardProject = ({ project }) => {
  const { name, image, technologies, description, link } = project;
  return (
    <Box
      sx={{
        bg: "rgba(255,255,255,.035)",
        borderRadius: 20,
        padding: "15px",
        mb: "1rem",
      }}
    >
      {image.map((i) => (
        <Image
          borderRadius="8px"
          key={i}
          src={i}
          alt="image"
          objectFit="cover"
        />
      ))}

      <Text fontSize="2xl" color="white" fontWeight="bold" padding=".5rem 0">
        {name}
      </Text>

      <Text color="#c4c4c4" fontSize="14px" mb=".5rem">
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
            width="105px"
            padding="5px"
            borderRadius="30px"
            textAlign="center"
          >
            {i}
          </Text>
        ))}
      </Box>

      {link?.length > 0 && (
        <Box
          sx={{
            "@media (min-width: 800px)": {
              display: "flex",
              width: "100%",
              margin: "1rem 0",
              justifyContent: "end",
            },
          }}
        >
          <Link
            href={link}
            isExternal
            sx={{
              borderRadius: "30px",
              p: "0.8rem 1.5rem",
              width: "95%",
              m: "1rem auto",
              display: "flex",
              justifyContent: "center",
              bg: "primary",
              alignItems: "center",
              color: "white",
              maxW: "450px",
              gap: "10px",
              "@media (min-width: 800px)": {
                width: "50%",
                margin: 0,
              },
            }}
          >
            Link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-external-link"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
              <path d="M11 13l9 -9" />
              <path d="M15 4h5v5" />
            </svg>
          </Link>
        </Box>
      )}
    </Box>
  );
};
