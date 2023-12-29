import { ChevronRightIcon } from "@chakra-ui/icons";
import { useColorModeValue, Stack, Flex, Icon, Box, Text, Link } from "@chakra-ui/react";
import { Link as NavLink} from "react-router-dom";
import { NavItem } from "../_types";

const DesktopSubNavbarComponent = ({ label, href, subLabel }: NavItem)  => {
  return (
    <Link
      as={NavLink}
      to={href}
      role={'group'}
      display={'inline'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
}
export { DesktopSubNavbarComponent}
