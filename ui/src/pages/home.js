import React from 'react';
import axios from 'axios';

class Home extends React.Component{

  handleView = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('view', "success");
    const url = "http://localhost:80/bizlogic/";
    axios.post(url,formData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))   
  }

    render(){
      return (
        <div className="App-header">
            <h1>User List View</h1>
            <br></br>
            <button className="btn btn-success" onClick={this.handleView} id="submit">View Users</button>
        </div>
      );
    }
  }

  export default Home;