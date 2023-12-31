import { Flex, VStack, Text, Image } from '@chakra-ui/react';
import { IBaseText } from './_types';

const BaseTextComponent: React.FC<IBaseText> = ({
  firstTitle,
  secondTitle,
  textIcon,
  leftSpacing = 0,
  topSpacing = 0,
  ...props
}) => {
  return (
    <Flex my={{ base: 0, md: 0, lg: 0, sm: 10, xs: 10 }} {...props}>
      <VStack align="start" position="relative">
        <Text
          fontSize={{
            base: '7xl',
            lg: '7xl',
            md: '7xl',
            sm: '6xl',
            xs: '4xl',
          }}
          fontWeight="900"
          zIndex="5">
          {firstTitle}
        </Text>
        <Text
          fontSize={{
            base: '5xl',
            lg: '5xl',
            md: '5xl',
            sm: '4xl',
          }}
          fontWeight="900"
          color="teal.400"
          position="absolute"
          top="45">
          {secondTitle}
        </Text>
      </VStack>
      <Image
        src={textIcon}
        w="100"
        h="100"
        alt="AboutMe"
        position="relative"
        left={leftSpacing}
        top={2 + topSpacing}
      />
    </Flex>
  );
};

export default BaseTextComponent;
