import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RecipesScreen from "../components/chechef/recipes/RecipesScreen";
import Layout from "../components/ui/Layout/Layout";
import OrdersScreen from "../components/chechef/orders/OrdersScreen";
import AccountingScreen from "../components/chechef/accounting/AccountingScreen";

const ChechefRouter = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/app/recipes" component={RecipesScreen} />
          <Route exact path="/app/orders" component={OrdersScreen} />
          <Route exact path="/app/accounting" component={AccountingScreen} />
          <Redirect to="/app/recipes" />
        </Switch>
      </Layout>
    </div>
  );
};

export default ChechefRouter;
