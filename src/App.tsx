import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    // <DefaultLayout>
    localStorage.getItem("token") ?
      <Routes>
        <Route
          index
          element={
            <DefaultLayout>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </DefaultLayout>
          }
        />
        <Route
          path="/calendar"
          element={
            <DefaultLayout>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </DefaultLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <DefaultLayout>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </DefaultLayout>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <DefaultLayout>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </DefaultLayout>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <DefaultLayout>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </DefaultLayout>
          }
        />
        <Route
          path="/tables"
          element={
            <DefaultLayout>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </DefaultLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <DefaultLayout>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </DefaultLayout>
          }
        />
        <Route
          path="/chart"
          element={
            <DefaultLayout>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </DefaultLayout>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <DefaultLayout>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </DefaultLayout>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <DefaultLayout>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </DefaultLayout>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <DefaultLayout>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </DefaultLayout>
          }
        />
      </Routes>
      :
      <>
        <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <SignIn />
      </>
    // </DefaultLayout>
  );
}

export default App;
