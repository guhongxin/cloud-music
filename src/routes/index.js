import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../views/home';
import Recommend from '../views/recommend';
import Singers from '../views/singers';
import Rank from '../views/rank';

export default [{
  path: '/',
  component: Home,
  routes: [{
    path: '/',
    exact: true,
    render: () => (<Redirect to={'/recommend'} />)
  }, {
    path: '/recommend',
    component: Recommend
  }, {
    path: '/singers',
    component: Singers
  }, {
    path: '/rank',
    component: Rank
  }]
}]