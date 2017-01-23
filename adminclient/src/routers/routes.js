import containers from '../containers';
import constants from '../constants';

let isLoggedIn = () => {
  return window && !!window.localStorage[ constants.jwt_token.TOKEN_NAME ];
};

let requireAuth = (nextState, replaceState) => {
  // console.log({ nextState, replaceState });
  // console.log("nextState.location.pathname.indexOf('p-admin')!==-1",nextState.location.pathname.indexOf('p-admin')!==-1)
  if (!isLoggedIn()) {
    replaceState({
      pathname: (nextState.location.pathname.indexOf('p-admin')!==-1)?`/p-admin/login?return_url=${nextState.location.pathname}`:`/login?return_url=${nextState.location.pathname}`,
      state: {
        nextPathname: nextState.location.pathname
      },
    })
  }
};

function getRoutes(appContainer) {
  // console.log('appContainer',appContainer)
  let sharedChildRoutes = [ {
    path: 'login**',
    component: containers.PageComponents.LoginPage,
    indexRoute: { 
      component: containers.PageComponents.LoginPage,
    },
  }, {
    path: 'home',
    // onEnter: requireAuth,
    component: containers.PageComponents.HomePage,
  }, {
    path: 'documentation',
    // onEnter: requireAuth,
    component: containers.PageComponents.DocumentationPage,
  }, {
    path: 'applications',
    component: containers.PageComponents.ApplicationsPage,
  }, {
      path: 'customers',
      component: containers.PageComponents.CustomersPage,  
  }, {
    path: 'blog',
    component: containers.PageComponents.BlogPage,
    // onEnter: requireAuth,
    indexRoute: {
      // onEnter: requireAuth,
      component: containers.PageComponents.BlogIndex,
    },
    childRoutes: [ {
      path: ':id',
      // onEnter: requireAuth,
      component: containers.PageComponents.BlogItem,
    }]
  }, {
    path: '*',
    component: containers.PageComponents.Error404,
  }];
  return {
    childRoutes: [ {
      path: '/p-admin',
      component: appContainer,
      // onEnter: requireAuth,
      indexRoute: { 
      // onEnter: requireAuth,
        component: containers.PageComponents.HomePage,
      },
      childRoutes: sharedChildRoutes,
    },{
      path: '/',
      component: appContainer,
      // onEnter: requireAuth,
      indexRoute: { 
      // onEnter: requireAuth,
        component: containers.PageComponents.HomePage,
      },
      childRoutes: sharedChildRoutes,
    }]
  }
};

exports.getRoutes = getRoutes;

export default getRoutes;
//https://github.com/ReactTraining/react-router/blob/efac1a8ff4c26d6b7379adf2ab903f1892276362/examples/auth-flow/app.js#L122