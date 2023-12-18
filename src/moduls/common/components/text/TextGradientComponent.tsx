  import { Text } from "@chakra-ui/react"
import { ITextGradient } from "./_types"


const TextGradientComponent: React.FC<ITextGradient> = ({ children, background = "linear(to-tr, teal.100, red.300, yellow)" }) => {
  return (
    <Text
      bgGradient={background}
      bgClip="text"
    >
      {children}
    </Text>
  )
}

export { TextGradientComponent }
