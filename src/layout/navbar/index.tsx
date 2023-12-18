import { Box, Collapse, useDisclosure } from "@chakra-ui/react"
import { DesktopNavbarComponent } from "./desktop/DesktopNavbarComponent"
import MobileNavbarComponent from "./mobile/MobileNavbarComponent";

const NavbarComponent = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position="fixed"
      top="0"
      zIndex="10"
      w="100%"
    >
      <DesktopNavbarComponent
        onClick={onToggle}
        isOpen={isOpen}
      />

      <Collapse in={isOpen} animateOpacity>
        <MobileNavbarComponent />
      </Collapse>
    </Box>
  )
}

export default NavbarComponent

