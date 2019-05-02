import { Router as DefaultRouter, Route, Switch } from "react-router-dom";
import dynamic from "umi/dynamic";
import("/Users/Ahmed/Downloads/workspace/DVA/user-dashboard/src/global.css");
import Layout from "/Users/Ahmed/Downloads/workspace/DVA/user-dashboard/src/pages/index.js";

const Router = window.g_CustomRouter || DefaultRouter;

export default function() {
  return (
    <Router history={window.g_history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={require("../index.js").default} />
          <Route
            exact
            path="/users"
            component={require("../users/page.js").default}
          />
        </Switch>
      </Layout>
    </Router>
  );
}
