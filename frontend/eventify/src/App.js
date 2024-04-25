import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import EventPage from "./pages/EventPage";
import CreateEvent from "./pages/CreateEvent";
import EventBanner from "./pages/EventBanner";
import TicketingPage from "./pages/TicketingPage";
import ReviewEvent from "./pages/ReviewEvent";
import { FormProvider } from "./context/FormContext";
import RequireAuth from "./components/RequireAuth";
import PersistentLogin from "./components/PersistLogin";
import InterestedPage from "./pages/InterestedPage";
import UserEventPage from "./pages/UserEvents";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PersistentLogin />}>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="events"
            exact
            element={<SearchPage />}
          />
          <Route
            path="/events/:eventId"
            element={<EventPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Route>
      </Routes>
      <FormProvider>
        <Routes>
          <Route
            element={<PersistentLogin />}
            errorElement={<ErrorPage />}
          >
            <Route element={<RequireAuth />}>
              <Route
                path="/interested-events"
                element={<InterestedPage />}
              />
              <Route
                path="/create-event"
                element={<CreateEvent />}
              />
              <Route
                path="/create-event/banner"
                element={<EventBanner />}
              />
              <Route
                path="/create-event/ticketing"
                element={<TicketingPage />}
              />
              <Route
                path="/create-event/review"
                element={<ReviewEvent />}
              />
              <Route
                path="/myevents"
                element={<UserEventPage />}
              />
            </Route>
          </Route>
        </Routes>
      </FormProvider>
    </>
  );
}

export default App;
