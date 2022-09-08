import React, { Component } from 'react'
import { BrowserRouter, Route, Switch,useParams } from 'react-router-dom'


const loading = (
  <div className="text-center">
    <div className="">Loading...</div>
  </div>
)



// Pages
const Login = React.lazy(() => import('./app/pages/login/Login'));
const Register = React.lazy(() => import('./app/pages/register/Register'));
const Dashboard = React.lazy(()=>import('./app/pages/dashboard/Dashboard'))
const Detail=React.lazy(()=>import('./app/pages/detail/Detail'))
const EditDetail=React.lazy(()=>import('./app/pages/editdetail/EditDetail'))




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" name="Login Page" render={(props) => <Login {...props} />} />
           <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
             <Route exact path="/dashboard" name="Dashboard" render={(props) => <Dashboard  {...props}/>} />
             <Route exact path="/detail/:id"name="Detail"render={(props)=><Detail{...props}/>}/>
             <Route exact path="/edit/:id" name="EditDetail" render={(props) => <EditDetail  {...props}/>} />
             
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    )
  }
}

export default App
