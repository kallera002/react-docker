import { Fragment } from 'react';
import {
  DevelopmentStackComponent,
  EasyDevelopmentComponent,
  ExperienceComponent,
  HeaderComponent,
  ProjectComponent,
  SkillSliderComponent,
} from './components';
const HomeComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <DevelopmentStackComponent />
      {/* <SkillComponent /> */}
      <SkillSliderComponent />
      <EasyDevelopmentComponent />
      <ProjectComponent />
      <ExperienceComponent />
    </Fragment>
  );
};
export default HomeComponent;
