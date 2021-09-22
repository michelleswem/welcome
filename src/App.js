import { Switch, Route } from "react-router-dom";
import DesignContent from "./components/design/DesignContent";
import Layout from "./components/layout/Layout";
import RegisterContent from "./components/registration/RegisterContent";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Welcome />
        </Route>
        <Route path='/register'>
          <RegisterContent />
        </Route>
        <Route path='/design'>
          <DesignContent />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
