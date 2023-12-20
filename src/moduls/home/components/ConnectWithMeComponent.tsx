import { Flex, VStack, Text, Link, Button } from '@chakra-ui/react';
import { BaseLayoutComponent } from '../../common/components';
import { Link as NavLink } from 'react-router-dom';
import { IoIosRocket } from 'react-icons/io';

const ConnectWithMeComponent = () => {
  return (
    <BaseLayoutComponent id="connect-with-me">
      <Flex
        mb={{ '2xl': 16, lg: 14, md: 14, sm: 20 }}
        p="10"
        w="full"
        borderRadius="10px"
        color="black"
        alignItems={'center'}
        justify={'space-evenly'}
        display={{
          '2xl': 'flex',
          md: 'flex',
          lg: 'flex',
          sm: 'block',
        }}
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)">
        <VStack alignItems={'flex-start'}>
          <Text
            fontSize={{
              '2xl': '6xl',
              lg: '4xl',
              md: '4xl',
              sm: '4xl',
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
            marginTop={{ '2xl': 4, lg: 4, md: 4, sm: 4 }}>
            Connect With Me
          </Button>
        </Link>
      </Flex>
    </BaseLayoutComponent>
  );
};
export { ConnectWithMeComponent };
