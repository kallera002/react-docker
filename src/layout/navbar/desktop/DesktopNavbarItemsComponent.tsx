import {
  Box,
  Flex,
  Grid,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { NAV_ITEMS } from '../_data';
import { NavItem } from '../_types';
import { Link as LinkRoute } from 'react-router-dom';
import { DesktopSubNavbarComponent } from './DesktopSubNavbarComponent';

const DesktopNavbarItemsComponent = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS?.map((navItem: NavItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                as={LinkRoute}
                p={2}
                to={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'md'}
                as={Grid}>
                <div>lorem</div>
                <div>lorem</div>
                {/* <Stack>
                  {navItem?.children?.map((child) => (
                    <DesktopSubNavbarComponent key={child.label} {...child} />
                  ))}
                </Stack>  */}
                 {/* <Stack>
                  {navItem?.children?.map((child) => (
                    <DesktopSubNavbarComponent key={child.label} {...child} />
                  ))}
                </Stack> */}
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNavbarItemsComponent;
