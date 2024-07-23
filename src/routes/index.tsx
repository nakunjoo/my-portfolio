import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts';
import MainPage from '../pages';
import SkillPage from '../pages/Skills';
import ProjectPage from '../pages/Project';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* case1. MainPage Component가 DefaultLayout Cmoponent의 <Outlet/>로 삽입된다.(children값은 undefined) */}
        <Route element={<DefaultLayout />}>
          <Route index element={<MainPage />} />
        </Route>

        {/* case2. MainPage Component가 MainLayout Componet의 children으로 삽입된다. */}
        <Route
          path={'/skills'}
          element={
            <DefaultLayout>
              <SkillPage />
            </DefaultLayout>
          }
        />

        {/* case2. MainPage Component가 MainLayout Componet의 children으로 삽입된다. */}
        <Route
          path={'/projects'}
          element={
            <DefaultLayout>
              <ProjectPage />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
