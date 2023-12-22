import { createBrowserRouter, Outlet } from 'react-router-dom';
import NavbarComponent from '../layout/navbar';
import { SectionWrapper } from '../moduls/common/components';
import HomeComponent from '../moduls/home/HomeComponent';

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
    ],
  },
]);

export { conditionalRouter };
