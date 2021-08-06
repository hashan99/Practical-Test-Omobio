import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component{
    constructor(){
        super();
       
        this.state = {
         uname: '',
         password: '',
         redirectToReferrer: false
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUname = this.handleUname.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    
      }
    handleUname = async e => {
      await this.setState({
        uname : e.target.value
      })
    }
    handlePassword = async e => {
      await this.setState({
        password : e.target.value
      })
    }
    handleSubmit = e => {
      //send request to the php server
      e.preventDefault();
      // console.log(this.state.uname);
      // console.log(this.state.password);
      console.log(this.state.redirectToReferrer)
      const formData = new FormData();
      formData.append('uname', this.state.uname);
      formData.append('password', this.state.password);
      const url = "http://localhost:80/bizlogic/";
      axios.post(url,formData)
        .then((result) => {
            if(result.data === "success"){
                    this.setState({redirectToReferrer: true});
                    console.log(this.state.redirectToReferrer)
                    console.log("login successful")   
            }else{
              console.log(result.data)
            }
           })
        // .then(res => console.log(res.data))
        .catch(err => console.log(err))   
    }
    render(){
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/home'}/>)
          }
      return (
        <div className="App-header">
            <input className="form-control" onChange={this.handleUname} type="text" id="uname" placeholder="Enter the username"></input>
            <br></br>
            <input className="form-control" onChange={this.handlePassword} type="password" id="password" placeholder="Enter the password"></input>
            <br></br>
            <button className="btn btn-success" onClick={this.handleSubmit} id="submit">Submit</button>
        </div>
      );
    }
  }

  export default Login;