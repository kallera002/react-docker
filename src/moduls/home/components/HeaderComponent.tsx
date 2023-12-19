import { Link, VStack, Button, Stack, Heading, ButtonGroup, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { TextGradientComponent, SocialMediaButtonComponent, BaseLayoutComponent } from "../../common/components"

const HeaderComponent = ( ) => {
 return (
   <BaseLayoutComponent id={"lorem"}>
     <VStack
       m="auto"
       my="10"
       mt={{ base: 10, md: 10, lg: 10, sm: 10, xs: "4em" }}
       zIndex="100"
     >
       <Link
         as={NavLink}
         to="/"
         textDecoration="none"
         isExternal={true}
         style={{ textDecoration: "none" }}
       >
         <Button
           borderRadius="full"
           borderColor="blue.600"
           h="30px"
           fontSize={{ base: "sm", sm: "sm" }}
           borderWidth="2px"
         >
           Halo, Saya seorang Programer asal Indonesia
         </Button>
       </Link>
     </VStack>

     <Stack>

       <Heading
         fontSize={{
           "2xl": "6xl",
           xl: "6xl",
           md: "6xl",
           lg: "6xl",
           sm: "3xl",
         }}
         fontWeight="extrabold"
       >
         <Stack display="flex" direction="row">
           <Text>Saya</Text>
           <TextGradientComponent> Fikri Ramadhan </TextGradientComponent>
         </Stack>

         <Stack display="flex" direction="row">
           <Text colorScheme="black">Backend Developer</Text>
           <TextGradientComponent background="linear(to-tr, teal.500, green.400)"> dan </TextGradientComponent>
         </Stack>
         <Stack display="flex" direction="row">
           <TextGradientComponent background="linear(to-tr, teal.500, green.400)"> Frontend Developer. </TextGradientComponent>
         </Stack>
       </Heading>

       <Text py="5" colorScheme="black" fontWeight="400">
         Saya merancang dan membuat{" "}
         <span
           style={{
             color: "var(--chakra-colors-teal-500)",
             fontWeight: 500,
           }}
         >
           aplikasi yang fungsional dan indah
         </span>{" "}
         <br />
         dengan semangat dan fokus pada {" "}
         <span
           style={{
             color: "var(--chakra-colors-teal-500)",
             fontWeight: 500,
           }}
         >
           pengalaman pengguna
         </span>{" "}
         dan{" "}
         <span
           style={{
             color: "var(--chakra-colors-teal-500)",
             fontWeight: 500,
           }}
         >
           kualitas tinggi.
         </span>{" "}
       </Text>

       <ButtonGroup gap="1">
         <Button
           as="a"
           target="_blank"
           href="mailto:fikriramadhan002@gmail.com"
           border="2px"
           variant="outline"
           size={{ base: "md", md: "md", sm: "sm" }}
           colorScheme="teal"
         >
           Hire me
         </Button>
         <Button
           colorScheme="teal"
           target="_blank"
           as="a"
           href="https://cal.com/fikri-ramadhan-002"
           variant="solid"
           size={{ base: "md", md: "md", sm: "sm" }}
           bgGradient="linear(to-r, teal.500, green.400)"
         >
           Schedule a Meeting
         </Button>
       </ButtonGroup>

       <Stack py="4">
         <SocialMediaButtonComponent />
       </Stack>

     </Stack>
   </BaseLayoutComponent>
 )
}

export default HeaderComponent
