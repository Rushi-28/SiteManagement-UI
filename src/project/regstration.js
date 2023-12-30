import { useReducer, useState } from "react";
import img from "../project/regpage.jpg";


export default function Register() {
    const[msg,setMsg]=useState("");
  const init = {
    email: { value: "", valid: false, touched: false, error: "" },
    contactNo: { value: "", valid: false, touched: false, error: "" },
    username: { value: "", valid: false, touched: false, error: "" },
    password: { value: "", valid: false, touched: false, error: "" },
    formvalid: false
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, value, touched, valid, error, formvalid} = action.data;
        return { ...state, [key]: { value, touched, valid, error }, formvalid };
      case "reset":
        return init;
      default:
        return init;
    }
  };

  const validateData = (key, val) => {
    let valid = true;
    let error = "";
    switch (key) {
      
       case "username":
           let pattern3=/^[a-zA-Z._-]{6,15}$/
            if(!pattern3.test(val)){
                valid=false;
                error="Username should in between 6-15";
            }
            break;

            case "email":
               let pattern2=/^[\w.#-]{2,20}@[A-Za-z]{4,10}\.[a-z]{2,3}/
                if(!pattern2.test(val)){
                    valid=false;
                    error="Invalid email address";
                }
                break;

                case "contactNo":
                     let pattern1=/^[0-9]{10}$/
                    if(!pattern1.test(val))
                    {
                        valid= false;
                        error= "Invalid Phone number";
                    }
                    break;

                case 'password':   
                    var pattern = /^[A-Z]{1}[a-z]{1,8}[@*]{1}[0-9]{1,4}$/ 
                    if(!pattern.test(val))
                    {
                       valid = false;
                       error = "password invalid";
                    }
                    break;
      default:
        valid = true;
        error = "";
    }
    return { valid: valid, error: error };
  };

  const handleChange = (key, value) => {
    const { valid, error } = validateData(key, value);
    console.log(user.username.valid);
    let formvalid=true;
    for(let k in user)
    {
      if(user[k].valid===false)
      {
        formvalid=false;
        break;
      }
    }

    dispatch({
      type: "update",
      data: { key, value, touched: true, valid, error,formvalid},
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    const reqOption={
        method: "POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify({
            email:user.email.value,
            contactNo:user.contactNo.value,
            username:user.username.value,
            password:user.password.value

        })
    }
    fetch("http://localhost:9000/registration",reqOption)
    .then(resp=>resp.text())
    .then(data=>setMsg(data))

  
  };
  
  const [user, dispatch] = useReducer(reducer, init);
  return (

   <div style={{marginLeft:"550px"}}>
    <br/>
        <form action=""  className='login-form row' >
        <div className="App">
        <h1 className="App">Registration</h1> 
  <img  src={img} style={{width:"200px", height:"200px"  }} alt="pic"/>
  </div>

          {/* input for username */}
          <label ><h5>Enter Username:</h5></label>
          <input type="text" name="username"  value={user.username.value} onChange={(e) => {handleChange("username", e.target.value);}} required />{" "}
          
          {/* error message for username */}
          
          <div style={{display: user.username.touched && !user.username.valid ? "block" : "none" , color:"red"}}>{user.username.error}</div><br />

                {/* email */}
                <label ><h5>Enter EmailId:</h5></label>
            <input type="text" name="email"  value={user.email.value} required onChange={(e)=>{handleChange("email",e.target.value)}} />
            <div style={{display:user.email.touched && !user.email.valid?"block":"none" , color:"red"}}>{user.email.error}</div> <br />

            {/* phone number */}
            <label ><h5>Enter Contact No:</h5></label>
            <input type="text" name="contactNo" required maxLength={10} value={user.contactNo.value} onChange={(e)=>{handleChange("contactNo",e.target.value)}} />
            <div style={{display:user.contactNo.touched && !user.contactNo.valid?"block":"none" , color:"red"}}>{user.contactNo.error}</div> <br />

          
          {/* input for password */}
          <label ><h5>Enter Password:</h5></label>
          <input type="password" name="password" required onChange={(e)=>{handleChange("password",e.target.value)}}  />
          
          <div style={{display:user.password.touched && !user.password.valid? "block":"none" , color:"red"}}>{user.password.error}</div>
          {/* submit button */}
          <br />
          <div>
          <br/>
          <input type="submit" value="submit" disabled={!user.formvalid} className="btn btn-primary"  onClick={(e)=>{submitData(e)}}/>
          {/* Reset button */}
         { /*<input type="reset"  className="btn btn-danger" value="reset"/>*/}
          </div>
          <div className="col">
            {msg}
          </div>
        </form>
   </div>
  );
}