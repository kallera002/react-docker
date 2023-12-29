import { createBrowserRouter, Outlet } from 'react-router-dom';
import NavbarComponent from '../layout/navbar';
import { SectionWrapper } from '../moduls/common/components';
import HomeComponent from '../moduls/home/HomeComponent';
import { PortofolioComponent } from '../moduls/portofolio/PortofolioComponent';

const conditionalRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavbarComponent />
        <Outlet />
      </>
    ),
    children: [
      {
        path: 'home',
        index: true,
        element: <HomeComponent />,
      },
      {
        path: 'blog',
        element: (
          <SectionWrapper>
            <>BLog,</>
          </SectionWrapper>
        ),
      },
      {
        path: 'portofolio',
        element: <PortofolioComponent />
      },
    ],
  },
]);

export { conditionalRouter };
