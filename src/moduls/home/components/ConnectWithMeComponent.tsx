import { Flex, VStack, Text, Link, Button } from '@chakra-ui/react';
import { BaseLayoutComponent } from '../../common/components';
import { Link as NavLink } from 'react-router-dom';
import { IoIosRocket } from 'react-icons/io';

const ConnectWithMeComponent = () => {
  return (
    <BaseLayoutComponent id="connect-with-me">
      <Flex
        mb={{ base: 14, lg: 14, md: 14, sm: 20, xs: 20 }}
        p="10"
        w="full"
        borderRadius="10px"
        color="black"
        alignItems={'center'}
        justify={'space-evenly'}
        display={{
          base: "flex",
          md: "flex",
          lg: "flex",
          sm: "block",
          xs: "block",
        }}
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)">
        <VStack alignItems={'flex-start'}>
          <Text
            fontSize={{
              base: "4xl",
              lg: "4xl",
              md: "4xl",
              sm: "2xl",
              xs: "2xl",
            }}
            fontWeight={'bold'}>
            Mari Membangun Sesuatu Bersama Saya
          </Text>
        </VStack>
        <Link as={NavLink} to="/">
          <Button
            leftIcon={<IoIosRocket />}
            colorScheme="white"
            color="white"
            bg="black"
            size={'lg'}
            shadow={'dark-lg'}
            _hover={{ shadow: 'none' }}
            variant="solid"
            marginTop={{ base: 0, lg: 0, md: 0, sm: 4, xs: 4 }}>
            Connect With Me
          </Button>
        </Link>
      </Flex>
    </BaseLayoutComponent>
  );
};
export { ConnectWithMeComponent };
