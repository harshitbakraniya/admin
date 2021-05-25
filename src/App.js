import "./App.css";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Sidebar />
      <Switch>
        <Route exact path="/admin" component={Overview} />
      </Switch>
    </div>
  );
}

export default App;
