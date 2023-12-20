import { Stack, useColorModeValue } from '@chakra-ui/react';
import { NAV_ITEMS } from '../_data';
import { MobileNavbarItemsComponent } from './MobileNavbarItemsComponent';

interface IMobileNavbarComponent {
  onClick: () => void;
}

const MobileNavbarComponent: React.FC<IMobileNavbarComponent> = ({ onClick }) => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavbarItemsComponent key={navItem.label} {...navItem} onClick={onClick} />
      ))}
    </Stack>
  );
};
export default MobileNavbarComponent;
