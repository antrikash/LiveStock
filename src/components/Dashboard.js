import React from 'react'
import List from "./List";

const stocksUrl = 'ws://stocks.mnet.website';

class Dashboard extends React.Component {
  state = {
    stocks: {},
    connectionError: false
  }

  componentDidMount = () => {
    this.connection = new WebSocket(stocksUrl);
    this.connection.onmessage = this.saveNewStockValues;
    this.connection.onclose = () => { this.setState({ connectionError: true }) }
  }

  saveNewStockValues = (event) => {
    let result = JSON.parse(event.data);
    let current_time = Date.now();
    let new_stocks = this.state.stocks
    result.map((stock) => {
      if (this.state.stocks[stock[0]]) {
        new_stocks[stock[0]].current_value = Number(stock[1])
        new_stocks[stock[0]].history.push({ time: current_time, value: Number(stock[1]) })
      }
      else {
        new_stocks[stock[0]] = { current_value: stock[1], history: [{ time: Date.now(), value: Number(stock[1]) }], is_selected: false }
      }
      return null;
    });
    this.setState({ stocks: new_stocks })
  }

  render() {
    return (
      <div className='container'>
        <List
          stocks={this.state.stocks}
        />
      </div>
    );
  }
}

export default Dashboard;
