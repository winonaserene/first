import React from 'react'

export default class Balance extends React.Component {

  render() {
    return (
      <div>
        <h3>My Balance</h3>
        <table className="tbView">
          <tr className="tbView">
            <th className="tbView">Current Balance:</th>         
            <td className="tbView">{this.props.balance}</td>         
          </tr>         
        </table>
      </div>
    )
  }
} 
