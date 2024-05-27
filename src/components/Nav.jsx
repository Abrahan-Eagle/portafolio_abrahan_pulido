import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const icons = [
    {
      name: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-home"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#fff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      ),
      alt: "home icon",
      route: "/",
    },
    {
      name: "Experience",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-book"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
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
      ),
      alt: "portfolio icon",
      route: "/experience",
    },
    {
      name: "Projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-briefcase"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#fff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
          <path d="M12 12l0 .01" />
          <path d="M3 13a20 20 0 0 0 18 0" />
        </svg>
      ),
      alt: "projects icon",
      route: "/projects",
    },

    {
      name: "Contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-address-book"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#fff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
          <path d="M10 16h6" />
          <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M4 8h3" />
          <path d="M4 12h3" />
          <path d="M4 16h3" />
        </svg>
      ),
      alt: "contact icon",
      route: "/contact",
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      w="95%"
      m="0 auto"
      maxW="400px"
      minW="300px"
      position="fixed"
      background="backGrey"
      padding="5px"
      borderRadius={50}
      bottom="15px"
      left={0}
      right={0}
      zIndex={999}
      sx={{
        "@media (min-width: 800px)": {
          position: "absolute",
          width: "50%",
          top: "0px",
          left: "unset",
          right: "0px",
          bottom: "unset",
          borderRadius: "20px",
        },
      }}
    >
      {icons.map((icon) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "active link-base" : "link link-base"
          }
          key={icon.name}
          to={icon.route}
        >
          {/* <Image className="navImage" src={icon.icon} alt={icon.alt} /> */}
          {icon.icon}
          <p className="p-nav">{icon.name}</p>
        </NavLink>
      ))}
    </Box>
  );
};
