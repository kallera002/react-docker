import { Box } from "@chakra-ui/react"
import { IBaseLayout } from "./_types"

const BaseLayoutComponent: React.FC<IBaseLayout> = ({ children, ...props }) => {
  return (
    <Box
      px={{ base: "6", md: "6", lg: "20", sm: "10", xl: "10" }}
      pb="0"
      pt={{ base: "8", sm: "16", md: "20" }}
      {...props}
      mx="auto"
      maxW="1000"
    >
      {children}
    </Box>
  )
}

export { BaseLayoutComponent }
