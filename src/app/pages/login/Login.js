import React,{useEffect,useState} from 'react'
import './Login.css'
import validator from "validator";
import { loginRequest } from "../../store/actions/login.action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import captchaImg from './Captcha.png';



const Login = () => {
  
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [user, setUser] = useState({
      username:""
  });  

   const characters ='agh123';
  function generateString(length) 
  {
      let result = '';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
     return result;
   }
   const captcha = generateString(6) 
   
   let handleChange = (e) => {
     let name = e.target.name;
     let value = e.target.value;
     user[name] = value;
     setUser(user);
  }

   const handleSubmit = e => {
    var element =  document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
     element.style.cursor = "wait";
     element.innerHTML  = "Checking...";
     inputData.disabled = true;
     element.disabled = true;
      var myFunctions = function(){
          if(captcha == user.username)
          {
            element.style.backgroundColor   = "green";
            element.innerHTML  = "Captcha Verified";
            element.disabled = true;
            element.style.cursor = "not-allowed";
            inputData.style.display = "none";
            
          }
          else
          {
            element.style.backgroundColor   = "red";
            element.style.cursor = "not-allowed";
            element.innerHTML  = "Not Matched";
            element.disabled = true;
            var myFunction = function(){
              element.style.backgroundColor   = "#007bff";
              element.style.cursor = "pointer";
              element.innerHTML  = "Verify Captcha";
              element.disabled = false;
              inputData.disabled = false;
              inputData.value ='sssss';
            };
            setTimeout(myFunction,5000);
          }
        }   
        setTimeout(myFunctions,5000); 
  };
  
    
  
   const submitRequest = (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      password: password,
      user:user,
    };
    let emailError = validator.isEmail(email);
    if (emailError && password !== "" && user !=="") {
      dispatch(loginRequest(obj));
    } else {
      alert("Please Fill the Correct Email & Password and captcha");
    }

 
    
  
   
  };
  
      
  
  
  
return (
    
    <section class="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{width: "185px" }}/>
                  <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                </div>

                <form onSubmit={submitRequest}>
                  <p>Please login to your account</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Phone number or email address" 
                      
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      />
                    <label class="form-label" for="form2Example11">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control"
                    
                    value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label class="form-label" for="form2Example22">Password</label>
                  </div>
                  <div class="form-group row">
                     <div className="captcha-div">
                     <h4 id="captcha"style={{textAlign:'center',marginTop:'12px'}} >{captcha}</h4>
                     </div>
                          <p >captcha</p>
                     </div>

                 
                  <div class="form-group row">
              <input type="text" id="inputType" className="form-control"placeholder="Enter Captcha"
                name="username"  onChange={handleChange} autocomplete="off" style={{width:"40%"}}
                required/>&nbsp;&nbsp;&nbsp;
              <button type="button" id="succesBTN" onClick={handleSubmit} class="btn btn-primary "style={{width:"40%"}}>Verify Captcha</button>
            
            </div>

                  <div class="text-center pt-5 mb-2 ">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"
                     onClick={submitRequest}
                    
                    >Log
                      in</button>
                    
                    
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                   <Link to="/register"> <button type="button" class="btn btn-outline-danger">Create new</button></Link>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
     
  </div>
</section>
  )
}

export default Login