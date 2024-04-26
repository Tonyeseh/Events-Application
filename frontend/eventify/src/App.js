import React from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import EventPage from "./pages/EventPage";
import CreateEvent from "./pages/CreateEvent";
import EventBanner from "./pages/EventBanner";
import TicketingPage from "./pages/TicketingPage";
import ReviewEvent from "./pages/ReviewEvent";
import RequireAuth from "./components/RequireAuth";
import PersistentLogin from "./components/PersistLogin";
import InterestedPage from "./pages/InterestedPage";
import UserEventPage from "./pages/UserEvents";
import EditProfile from "./pages/EditProfile";
import ErrorPage from "./pages/ErrorPage";
import CreateEventLayout from "./components/CreateEventLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
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
      <Route element={<RequireAuth />}>
        <Route
          path="/interested-events"
          element={<InterestedPage />}
        />
        <Route element={<CreateEventLayout />}>
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
        </Route>
        <Route
          path="/myevents"
          element={<UserEventPage />}
        />
        <Route
          path="/profile"
          element={<EditProfile />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
