import React from 'react';

class TableFooter extends React.Component {
  render() {
    const {data} = this.props;
    const totalPrice = data.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return (
      <tfoot>
        <tr>
          <td colSpan={3}>
            <strong>Suma</strong>
          </td>
          <td>
            <strong>{totalPrice} pln </strong>
          </td>
        </tr>
      </tfoot>
    );
  }
}
export default TableFooter;
