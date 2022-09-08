import React from 'react';

const Main = React.lazy(() => import('./app/main'));
const Login = React.lazy(() => import('./app/pages/login/Login'));
const Register = React.lazy(() => import('./app/pages/register/Register'));
const Dashboard=React.lazy(()=>import('./app/pages/dashboard/Dashboard'))
const Detail=React.lazy(()=>import('./app/pages/detail/Detail'))
const EditDetail=React.lazy(()=>import('./app/pages/editdetail/EditDetail'))



const routes = [
    // { path: '/', exact: true, name: 'Main', component: Main },
    { path: '/', exact: true, name: 'Login', component: Login },
    {path:'/register',name:'Register',component:Register},
    {path:'/dashboard',name:Dashboard,component:Dashboard},
    {path:'/detail/:id',name:Detail,component:Detail},
    {path:'/edit/:id',name:EditDetail,component:EditDetail},
    
    
]

export default routes;
