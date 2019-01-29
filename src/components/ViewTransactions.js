import React from 'react'

export default class ViewTransactions extends React.Component {

  render() {
    return (
      <div> 
        <h3>My Transactions</h3>
        <table className="tbView" border="1">
          <thead>
            <tr className="tbView">
              <th className="tbView">Date</th>
              <th className="tbView">Transaction Type</th>
              <th className="tbView">Merchant Name</th>
              <th className="tbView">Total Amount</th>
            </tr>
          </thead>
         {this.getTransactions()}

        </table>
      </div>
    )
  }

  getTransactions = () =>
  {
    return <tbody>
      {this.props.viewTransactions.map(transact => 
      <tr>
        <td>{transact.date}</td>
        <td>{transact.type}</td>
   
     
        <td>{transact.merchantName}</td>
     
        <td>{transact.totalAmount}</td>
      </tr>
      )}
    </tbody>
  }
}
