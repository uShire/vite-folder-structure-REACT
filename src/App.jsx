import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roles from "./component/pages/developer/settings/users/roles/Roles";
import Users from "./component/pages/developer/settings/users/Users";
import Others from "./component/pages/developer/settings/users/others/Others";
import SystemLogin from "./component/pages/access/developer/SystemLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/system/login" element={<SystemLogin />} />
          <Route path="/system/forgot-password" element={<SystemLogin />} />
          {/*<Route path="/system/create-password" element={<SystemLogin />} />
          <Route path="/other/login" element={<SystemLogin />} /> */}

          <Route path="/settings/users" element={<Users />} />
          <Route path="/settings/users/roles" element={<Roles />} />
          <Route path="/settings/users/system" element={<Roles />} />
          <Route path="/settings/users/others" element={<Others />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
