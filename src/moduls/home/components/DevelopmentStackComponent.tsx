import { Heading, Grid, Stack, Icon, Text, Box } from "@chakra-ui/react"
import {BaseLayoutComponent} from "../../common/components"
import { productCardDetails } from "../data/product_detail_data"

const DevelopmentStackComponent = () => {
  return (

    <BaseLayoutComponent mt="10" id="stack">
      <Heading
        fontSize={{
          base: "5xl",
          md: "5xl",
          lg: "5xl",
          sm: "3xl",
        }}
        fontWeight="bold"
        textAlign="center"
      >
        The full product development stack.
      </Heading>
      <Text
        textAlign="center"
        fontSize={{ base: "md", md: "md", lg: "md", sm: "sm" }}
        my="5"
        mx={{ lg: 60, md: 60, sm: 0, xs: 0 }}
      >
        mengimplementasikan aplikasi berfitur lengkap, Saya dapat menyediakan proses desain produk lengkap mulai dari ide hingga aplikasi berkualitas tinggi, dipoles dengan desain fantastis dan dijalankan dengan perangkat lunak canggih.
      </Text>
      <Box as="center" my={{ base: 20, lg: 20, md: 20, sm: 14}}>
        <Grid
          display={{
            base: "grid",
            md: "grid",
            lg: "grid",
            sm: "block",
          }}
          templateColumns="repeat(2,1fr)"
          maxW="3xl"
          gap="20"
        >
          {productCardDetails.map(
            (item:any, index:number) =>
              item?.stack && (
                <Stack
                  key={index}
                  spacing="3"
                  align="center"
                  mt={{ md: 0, lg: 0, sm: 10, xs: 10 }}
                >
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg={item?.bgColor}
                    mb="2"
                    boxShadow="2xl"
                    transition={"ease-in-out"}
                    transitionDuration="0.5s"
                    _hover={{ boxShadow: "outline" }}
                    cursor="pointer"
                  >
                    <Icon mt="5" w="5" h="5">
                      {item?.svgIcon}
                    </Icon>
                  </Box>
                  <Heading fontSize="xl">{item?.title}</Heading>
                  <Text fontSize="sm">{item?.description}</Text>
                </Stack>
              )
          )}
        </Grid>
      </Box>
    </BaseLayoutComponent>
  )
}
export default DevelopmentStackComponent
