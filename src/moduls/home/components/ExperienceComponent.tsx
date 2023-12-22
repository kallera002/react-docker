import { SimpleGrid } from '@chakra-ui/react';
import { BaseLayoutComponent, CardComponent } from '../../common/components';
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
        {experienceData?.map((obj: IExperience) => {
          return (
            <>
              <CardComponent>
                <div className="flex items-center space-x-3">
                  <h3 className="text-slate-900 group-hover:text-dark text-md font-semibold">
                    {obj.company_name}
                  </h3>
                  <p className="text-slate-500 group-hover:text-dark text-sm">
                    ( {obj.business_fields} )
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <p className="text-slate-900 group-hover:text-dark text-sm">Posisi</p>
                    <p className="text-slate-500 group-hover:text-dark text-sm">{obj.position}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 items-center pb-4">
                  <div className="text-left ">
                    <p className="text-slate-900 group-hover:text-dark text-sm">Masa Kerja</p>
                  </div>
                  <div className=" grid grid-cols-2 ">
                    <p className="text-slate-500 group-hover:text-dark text-sm">{obj.start_date}</p>
                    <p className="text-slate-500 group-hover:text-dark text-sm">{obj.end_date}</p>
                  </div>
                </div>

                <div className="border-y-2"></div>
                <div className="py-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt culpa odio
                  nostrum, vel minima facilis impedit asperiores exercitationem quos repudiandae
                  illum quam voluptatibus. Est delectus praesentium magnam nemo voluptatibus
                  similique!
                </div>
              </CardComponent>
            </>
          );
        })}
      </SimpleGrid>
    </BaseLayoutComponent>
  );
};
export { ExperienceComponent };
