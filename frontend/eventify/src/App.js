import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import EventPage from './pages/EventPage';
import CreateEvent from './pages/CreateEvent';
import EventBanner from "./pages/EventBanner";
import TicketingPage from "./pages/TicketingPage";
import ReviewEvent from "./pages/ReviewEvent";
import { FormProvider } from "./context/FormContext";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="events" exact element={ <SearchPage /> } />
        <Route path="/events/:id" element={ <EventPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
      </Routes>
        <FormProvider>
          <Routes>
            <Route element={<RequireAuth />}>
              <Route path="/create-event" element={ <CreateEvent /> } />
              <Route path="/create-event/banner" element={ <EventBanner /> } />
              <Route path="/create-event/ticketing" element={ <TicketingPage /> } />
              <Route path="/create-event/review" element={ <ReviewEvent /> } />
            </Route>
        </Routes>
      </FormProvider>
    </>
  );
}

export default App;
