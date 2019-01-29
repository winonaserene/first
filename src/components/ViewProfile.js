import React from 'react'

export default class ViewProfile extends React.Component {

  render() {
    return (
      
      <div >
        <h3>Owner's Information</h3>
        <table className="tbView">
          <tr className="tbView">
            <th className="tbView">Account Number</th>
            <td className="tbView">{this.props.profiles.accountNo}</td>
            
          </tr>
          <tr className="tbView">
            <th className="tbView">Name</th>         
            <td className="tbView">{this.props.profiles.name}</td>         
          </tr>
          
          <tr>
            <th className="tbView">Email Address</th>
            <td className="tbView">{this.props.profiles.emailAddress}</td>
          </tr>

          <tr>
            <th className="tbView">Address</th>
            <td className="tbView">{this.props.profiles.address}</td>
          </tr>

          <tr>
            <th className="tbView">Contact Number</th>
            <td className="tbView">{this.props.profiles.contactNo}</td>
          </tr>
          </table>
      </div>
    )
    
  }

  

}
