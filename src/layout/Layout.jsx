import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import { Sidebar } from "../components/Sidebar";
import useScreenSize from "../hooks/useScreenSize";

export const Layout = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const { height, width } = useScreenSize();

  useEffect(() => {
    if (width >= 800) {
      setSidebarActive(true);
    }
  }, [width]);

  return (
    <Box
      bg="hsl(0, 0%, 7%)"
      color="#c4c4c4"
      position="relative"
      minH="100vh"
      padding="1rem"
    >
      <Box
        sx={{
          "@media (min-width: 800px)": {
            display: "flex",
            gap: "10px",
          },
        }}
      >
        <Sidebar
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
        />
        <Box
          paddingBottom="90px"
          sx={{
            "@media (min-width: 800px)": {
              ml: "37.5%",
              width: "65%",
              position: "relative",
              paddingBottom: "0px",
            },
            "@media (min-width: 1100px)": {
              ml: "36.8%",
            },
          }}
        >
          <Box
            sx={{
              "@media (min-width: 800px)": {
                width: "100%",
              },
            }}
          >
            <Nav />
          </Box>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
