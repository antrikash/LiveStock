import React from 'react'
import Row from './Row'

const List = (props) => {
  return (
    <div>
      <div><h1>LIVE STOCK</h1></div>
      <section>

        <table className='table table-bordered text-center'>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>
                Price
              </th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(props.stocks).length > 0 ?
                Object.keys(props.stocks).map((stock_name, index) => {
                  let current_stock = props.stocks[stock_name];
                  return (
                    <Row
                      key={index}
                      stock_name={stock_name}
                      stock_data={current_stock}
                    />
                  )
                })
                : <tr><td colSpan='4'>No stocks loaded yet!</td></tr>
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default List;
