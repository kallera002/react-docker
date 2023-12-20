import { ChakraProvider} from "@chakra-ui/react";
import { IChildren } from "../../_types";
import theme from "../../utils/theme";


const ChakraComponent: React.FC<IChildren> = ({children}) => {

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export  { ChakraComponent}

