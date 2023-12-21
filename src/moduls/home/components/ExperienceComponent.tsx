import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
} from '@chakra-ui/react';
import { BaseLayoutComponent } from '../../common/components';
import { IExperience } from '../types/experience';
import { experienceData } from '../data/experience_data';
import BaseTextComponent from '../../common/components/text/BaseTextComponent';

const ExperienceComponent = () => {
  return (
    <BaseLayoutComponent mt="10" mb="10" id="experience">
      <BaseTextComponent
        id="experience"
        firstTitle="Experience"
        secondTitle=""
        textIcon="https://ik.imagekit.io/ayushsoni1010/Website/timeline?ik-sdk-version=javascript-1.4.3&updatedAt=1669666586717"
        topSpacing={2}
      />
      <SimpleGrid
        mt={10}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        spacingX="40px"
        spacingY="40px">
        {experienceData?.map((obj: IExperience, index: number) => {
          return (
            <Card boxShadow="2xl" rounded="md" key={index}>
              <CardHeader>
                <Heading size="md"> {obj.company_name} </Heading>
              </CardHeader>
              <CardBody>
                <Text>{obj.short_description}</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </BaseLayoutComponent>
  );
};
export { ExperienceComponent };
