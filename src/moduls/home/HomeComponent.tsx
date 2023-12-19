import { Fragment } from "react"
import HeaderComponent from "./components/HeaderComponent"
import DevelopmentStackComponent from "./components/DevelopmentStackComponent"
import EasyDevelopmentComponent from "./components/EasyDevelopmentComponent"
import SkillComponent from "./components/SkillComponent"
import { ConnectWithMeComponent } from "./components/ConnectWithMeComponent"
import { ProjectComponent } from "./components/ProjectComponent"

const HomeComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <DevelopmentStackComponent />
      <SkillComponent />
      <EasyDevelopmentComponent />
      <ConnectWithMeComponent />
      {/* <ProjectComponent /> */}
    </Fragment>
  )
}
export default HomeComponent
