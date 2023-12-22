import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Button, Flex, IconButton, Stack, useColorModeValue } from '@chakra-ui/react';
import { Fragment } from 'react';
import { INavbar } from '../_types';
import DesktopNavbarItemsComponent from './DesktopNavbarItemsComponent';

const DesktopNavbarComponent: React.FC<INavbar> = ({ onClick, isOpen }) => {
  return (
    <Fragment>
      <Flex
        backdropFilter="blur(7px)"
        border="none"
        minH="60px"
        py={{ base: 3, md: 3, lg: 3, sm: 3, xs: 4 }}
        px={{ base: 4, md: 7 }}
        alignSelf="center"
        color={useColorModeValue('gray.600', 'white')}
        shadow={'sm'}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onClick}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text> */}

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNavbarItemsComponent />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Fragment>
  );
};

export { DesktopNavbarComponent };
