import { Box } from '@chakra-ui/react';
import { InfiniteSliderComponent } from '../../common/components/slider';
import { skillDetails } from '../data/skill_detail';

const SkillSliderComponent = () => {
  return (
    <Box pb="0" pt={{ base: '8', sm: '16', md: '20' }} mx="auto" maxW="auto">
      <InfiniteSliderComponent className="animate-infinite-slider-rtl">
        {skillDetails?.map((obj, index) => {
          return (
            <img
              key={`${index}1`}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={obj.iconURL}
              alt={obj.name}
              width="250"
              height="80"
            />
          );
        })}
        {skillDetails?.map((obj, index) => {
          return (
            <img
              key={`${index}2`}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={obj.iconURL}
              alt={obj.name}
              width="250"
              height="80"
            />
          );
        })}
      </InfiniteSliderComponent>
    </Box>
  );
};
export { SkillSliderComponent };
