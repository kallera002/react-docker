import { Box } from '@chakra-ui/react';
import { IBaseLayout } from './_types';

const BaseLayoutComponent: React.FC<IBaseLayout> = ({ children, ...props }) => {
  return (
    <Box
      px={{ md: '6', lg: '20', sm: '10', xl: '10' }}
      pb="0"
      pt={{ sm: '16', md: '20' }}
      {...props}
      mx="auto"
      maxW="1530">
      {children}
    </Box>
  );
};

export { BaseLayoutComponent };
