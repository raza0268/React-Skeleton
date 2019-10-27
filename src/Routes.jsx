var React = require('react');
// using CommonJS modules
var Router = require("react-router-dom").Router;
var Route = require("react-router-dom").Route;
var Switch = require("react-router-dom").Switch;
var Link = require("react-router-dom").Link;
var createReactClass = require('create-react-class');
var createHistory = require("history").createHashHistory;

var History = new createHistory({
    queryKey: false
});

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProductPage = require('./components/ProductPage.jsx');

var Routes = (

    <div>

        <Router history={History}>
            <BasePage />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/product/:productId" component={ProductPage} />
            </Switch>

        </Router>
    </div>

);

module.exports = Routes;