import React, { Component } from 'react';

import './App.css';
import ViewProfile from './components/ViewProfile'
//import ProfileSettings from './components/ProfileSettings'
import Balance from './components/Balance'
import ViewTransactions from './components/ViewTransactions'

//import UpdateProfile from './components/UpdateProfile'
import Axios from 'axios';

class App extends Component {

  state = {
    profiles:[],
    balance:[],
    viewTransactions:[]
    //profileSettings:[]
    //update:[]
  }

  clickViewProfile = async () => {
    const response = await Axios.get("http://localhost:8081/AccountManagement/rest/AccountService/ViewProfile");
    this.setState({profiles: response.data.account});
    console.log(this.state.profiles);
    this.setState({viewTransactions: []});
    this.setState({balance: []});
  }

  clickBalance = async () => {
    const response = await Axios.get("http://localhost:8081/AccountManagement/rest/AccountService/CheckBalance");
    this.setState({balance: response.data.currentBalance}); 
    console.log(this.state.balance);
    this.setState({profiles:[]});
    this.setState({viewTransactions: []});
    
  }
  clickViewTransactions = async () => {
    const response = await Axios.get("http://localhost:8081/AccountManagement/rest/AccountService/ViewTransactions");
    this.setState({viewTransactions: response.data.transaction});
    console.log(this.state.viewTransactions);
    this.setState({profiles:[]});
    this.setState({balance: []});
   
  
  }


  /*
  clickProfileSettings = async () => {
    const response = await Axios.get("http://localhost:8081/AccountManagement/rest/AccountService/ViewProfile");
    this.setState({profileSettings: response.data.account});
    console.log(this.state.profileSettings);
  } */
  

 /* update = async () => {
    const response = await Axios.get("http://localhost:8081/AccountManagement/rest/AccountService/UpdateProfile");
    this.setState({update: response.data.account});
    console.log(this.state.update);
  } */

  render() {
  
    return (     
      <div className="App">
        <header className="App-header">
           iBank
        </header>
        <div className="boxed">
           &nbsp;&nbsp;&nbsp;Account
        </div> 
        <h4 >{this.viewProfile()}</h4>
        <h4>{this.thisbalance()}</h4>
        <h4>{this.showTransactions()}</h4>
        <table className="tbNavigate" >      
        <tr>
          <td>Navigate</td>
        </tr>

        <tr>
          <th>
            My Account  
          </th>
        </tr>

        <tr>
          <th>
            <button onClick={this.clickBalance}>My Balance</button>                   
          </th>         
        </tr>

        <tr>
          <th>
            <button onClick={this.clickViewTransactions}>My Transactions</button>                   
          </th>         
        </tr>

        <tr>
          <th>
            Profile Settings
          </th>         
        </tr>

        <tr>
          <th>
            <button onClick={this.clickUpdateProfile}>Update Profile</button>                   
          </th>         
        </tr>

        <tr>
          <th>
          <button onClick={this.clickViewProfile}>View Profile</button>  
          </th>
        </tr>
       
        </table>   
      </div>   
      
    );
  }
 
  /*profileSettings = () =>{

    if(this.state.profileSettings.length !== 0){
      return <ProfileSettings profileSettings={this.state.profileSettings}/> 
    }else{
      return "";
    }
  }*/

  viewProfile = () =>{

    if(this.state.profiles.length !== 0){
      return <ViewProfile profiles={this.state.profiles}/> 
    }else{
      return "";
    }
  }
  thisbalance = () =>{

    if(this.state.balance.length !== 0){
      return <Balance balance={this.state.balance} profiles={this.state.profiles}/> 
    }else{
      return "";
    }
  }
  showTransactions = () =>{
    console.log(this.state.viewTransactions);
    if(this.state.viewTransactions.length !== 0){
      return <ViewTransactions viewTransactions={this.state.viewTransactions}/> 
    }else{
      return "";
    }
  }
}

  
 
export default App;


/*ViewProfile
<button onClick={this.update.bind(this, )}>UpdateProfile</button>
<UpdateProfile update={this.state.update}/>  */  