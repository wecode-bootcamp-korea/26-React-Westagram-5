import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginJihoo from './pages/jihoo/Login/Login';
import MainJihoo from './pages/jihoo/Main/Main';
import LoginSungho from './pages/sungho/Login/Login';
import MainSungho from './pages/sungho/Main/Main';
import LoginYujin from './pages/yujin/Login/Login';
import MainYujin from './pages/yujin/Main/Main';
import LoginSoyoon from './pages/soyoon/Login/Login';
import MainSoyoon from './pages/soyoon/Main/Main';
import LoginJaewoo from './pages/jaewoo/Login/Login';
import MainJaewoo from './pages/jaewoo/Main/Main';
import Nav from './components/Nav/Nav';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={LoginJihoo} />
          <Route exact path="/main-jihoo" component={MainJihoo} />
          <Route exact path="/login-sungho" component={LoginSungho} />
          <Route exact path="/main-sungho" component={MainSungho} />
          <Route exact path="/login-yujin" component={LoginYujin} />
          <Route exact path="/main-yujin" component={MainYujin} />
          <Route exact path="/login-soyoon" component={LoginSoyoon} />
          <Route exact path="/main-soyoon" component={MainSoyoon} />
          <Route exact path="/login-jaewoo" component={LoginJaewoo} />
          <Route exact path="/main-jaewoo" component={MainJaewoo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
