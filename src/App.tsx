// App.jsx
import { useState, useEffect } from 'react';
import { App, View } from 'framework7-react';
import Home from './views/Home';
import Signin from './views/auth/Signin';
import Register from './views/auth/Register';
import Dashboard from './views/admin/dashboard/Dashboard';
import User from './views/admin/users/User';
import Maps from './views/admin/maps/Maps';

const AppComponents = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    
    setIsLogin(false);
  }, []);

  const f7params = {
    name: 'Taxify',
    routes: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/auth/signin',
        component: Signin,
      },
      {
        path: '/auth/register',
        component: Register,
      },
      {
        path: '/admin',
        component: isLogin ? Dashboard : Signin,
      },
      {
        path: '/admin/user',
        component: isLogin ? User : Signin,
      },
      {
        path: '/admin/maps',
        component: isLogin ? Maps : Signin,
      },
    ],
  };

  return (
    <App {...f7params}>
      <View main url={isLogin ? '/admin' : '/auth/signin'} /> 
    </App>
  );
};


export default AppComponents;
