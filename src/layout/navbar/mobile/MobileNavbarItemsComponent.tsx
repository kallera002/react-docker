import { Stack, Flex, useColorModeValue, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Link as NavLink } from 'react-router-dom';
import { NavItem } from '../_types';

const MobileNavbarItemsComponent: React.FC<NavItem> = ({ label, href, onClick }) => {
  // const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          onClick={onClick}
          as={NavLink}
          fontWeight={600}
          to={href}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {/* {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )} */}
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse> */}
    </Stack>
  );
};

export { MobileNavbarItemsComponent };
