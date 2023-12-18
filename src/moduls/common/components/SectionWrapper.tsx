import { Box } from "@chakra-ui/react"
import { ISectionWrapper } from "../_types"

const SectionWrapper: React.FC<ISectionWrapper> = ({padding = 65, children}) => {
  return (
    <Box style={{ paddingTop: padding }}>
      {children}
    </Box>
  )
}

export { SectionWrapper }
