import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Protected from "./Admin/Protected";
import HomePage from "./HomePage";
import Navigation from './Navigation';
import ProductView from './ProductView';
import Checkout from './Checkout';
import AuthService from "./Services/auth.service";
import Login from './Login';
import Signup from './Signup';
import Payment from './Payment';
import History from './History';
import AddProduct from './Admin/AddProduct';
import SearchProduct from './Admin/SearchProduct';
import ProductList from './Admin/ProductList';
import UpdateProduct from './Admin/UpdateProduct';
import SearchHome from './SearchHome';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  render() {
    const { showAdminBoard } = this.state;
    return (
      <Router>
        <div className="background">
          <div>
            
          </div>
            
                <Switch>
                 {showAdminBoard && (
              <Route path="/add">
                <Protected Cmp={AddProduct} />
              </Route>
            )}
            {showAdminBoard && (
              <Route path="/update/:productsName">
                <Protected Cmp={UpdateProduct} />
              </Route>
            )}
            {showAdminBoard && (
              <Route path="/search">
                <Protected Cmp={SearchProduct} />
              </Route>
            )}
            {showAdminBoard && (
              <Route path="/admin">
                <Protected Cmp={ProductList} />
              </Route>
            )}
      <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/searchp/:key" component={SearchHome}></Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/payment">
              <Payment/>
            </Route>
            <Route path="/myorders">
              <History/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
      <Route path="/category/:category/" component={ProductView}>
      </Route>
        <Route path="/">
        <Navigation />
        <HomePage />
        </Route>
      </Switch>
        </div>
      </Router>
    );
  }
}

export default App;