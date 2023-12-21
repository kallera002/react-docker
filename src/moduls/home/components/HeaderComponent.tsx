import { Link, VStack, Button, Stack, Heading, ButtonGroup, Text, Flex } from '@chakra-ui/react';
import {
  TextGradientComponent,
  SocialMediaButtonComponent,
  BaseLayoutComponent,
} from '../../common/components';

const HeaderComponent = () => {
  return (
    <BaseLayoutComponent id={'lorem'}>
      <VStack m="auto" my="10" mt={{ base: 10, md: 10, lg: 10, sm: 10, xs: '4em' }} zIndex="100">
        <Link
          href="https://github.com/ayushsoni1010"
          textDecoration="none"
          isExternal={true}
          style={{ textDecoration: 'none' }}>
          <Button
            borderRadius="full"
            borderColor="blue.600"
            h="30px"
            fontSize={{ base: 'sm', sm: 'sm', xs: 'xs' }}
            borderWidth="2px">
            Halo, Saya seorang Programer asal Indonesia
          </Button>
        </Link>
      </VStack>

      <Flex
        flex={{ base: 1, md: 1, sm: 0, xs: 0 }}
        justify="space-between"
        direction={{
          base: 'row',
          md: 'row',
          sm: 'column-reverse',
          xs: 'column-reverse',
        }}>
        <Stack>
          <Heading fontSize={{ md: '6xl', lg: '6xl', sm: '4xl', xs: '3xl' }} fontWeight="extrabold">
            <Stack display="flex" direction="row">
              <Text colorScheme="black">Saya</Text>
              <TextGradientComponent> Fikri Ramadhan </TextGradientComponent>
            </Stack>
            <Stack display="flex" direction="row">
              <Text colorScheme="black">Frontend </Text>
              <Text bgGradient="linear(to-tr, teal.500, green.400)" bgClip="text">
                dan
              </Text>
            </Stack>
            <Stack display="flex" direction="row">
              <Text bgGradient="linear(to-tr, teal.500, green.400)" bgClip="text">
                Backend
              </Text>
              <Text colorScheme="black">Developer.</Text>
            </Stack>
          </Heading>

          <Text py="5" colorScheme="black" fontWeight="400">
            Saya merancang dan membuat{' '}
            <span
              style={{
                color: 'var(--chakra-colors-teal-500)',
                fontWeight: 500,
              }}>
              aplikasi yang fungsional dan indah
            </span>{' '}
            <br />
            dengan semangat dan fokus pada{' '}
            <span
              style={{
                color: 'var(--chakra-colors-teal-500)',
                fontWeight: 500,
              }}>
              pengalaman pengguna
            </span>{' '}
            dan{' '}
            <span
              style={{
                color: 'var(--chakra-colors-teal-500)',
                fontWeight: 500,
              }}>
              kualitas tinggi.
            </span>{' '}
          </Text>
          <ButtonGroup gap="1">
            <Button
              as="a"
              target="_blank"
              href="mailto:ayushsoni1010.work@gmail.com"
              border="2px"
              variant="outline"
              size={{ base: 'md', md: 'md', sm: 'sm' }}
              colorScheme="teal">
              Hire me
            </Button>
            <Button
              colorScheme="teal"
              target="_blank"
              as="a"
              href="https://cal.com/fikri-ramadhan-002"
              variant="solid"
              size={{ base: 'md', md: 'md', sm: 'sm' }}
              bgGradient="linear(to-r, teal.500, green.400)">
              Schedule a Meeting
            </Button>
          </ButtonGroup>
          <Stack py="4">
            <SocialMediaButtonComponent />
          </Stack>
        </Stack>
        <Stack>{/* <LazyVoxelDog /> */}</Stack>
      </Flex>
    </BaseLayoutComponent>
  );
};

export { HeaderComponent };
