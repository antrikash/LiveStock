import React from 'react';
import classNames from 'classnames';

class Row extends React.Component {

  render() {
    let history = this.props.stock_data.history;
    const { stock_data: stock } = this.props;
    return (
      <tr className='text-center'>
        <td>{this.props.stock_name.toUpperCase()}</td>
        <td className={classNames(stock.current_value < stock.history.slice(-2)[0].value ? 'red' : 'green')}>
          {this.props.stock_data.current_value.toFixed(2)}
        </td>
        <td>
          {Math.ceil((Date.now() - history.slice(-1)[0].time)/ 1000 % 60)} seconds ago
        </td>
      </tr>
    );
  }
}

export default Row;