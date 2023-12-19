import { createBrowserRouter, Outlet } from "react-router-dom";
import NavbarComponent from "../layout/navbar";
import { SectionWrapper } from "../moduls/common/components";
import HomeComponent from "../moduls/home/HomeComponent";

const conditionalRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <NavbarComponent />
                <Outlet />

            </>
        ),
        children: [
            {
                path: "about",
                element: <SectionWrapper> <>lore,</> </SectionWrapper>,
            },
          {
            path: "home",
            element: <HomeComponent/>
          },
          {
            path: "experience",
            element: <SectionWrapper> <>Experience,</> </SectionWrapper>,
          },

          {
            path: "blog",
            element: <SectionWrapper> <>Blog,</> </SectionWrapper>,
          },
          {
            path: "contact",
            element: <SectionWrapper> <>Contact,</> </SectionWrapper>,
          },
        ]
    },

]);

export { conditionalRouter }
