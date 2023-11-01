import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages";
import { Home , Matchmaking, Contacts, Messages, Challenges} from '../views';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} >
        <Route
            path="/home"
            element={< Home/>}
          />
          <Route
          path="/matchmaking"
          element={<Matchmaking/>}
        />
        <Route
          path="/contacts"
          element={<Contacts/>}
        />
        <Route
          path="/messages"
          element={<Messages/>}
        />
        <Route
          path="/challenges"
          element={<Challenges/>}
        />
      </Route>
    </Routes>
  );
};
