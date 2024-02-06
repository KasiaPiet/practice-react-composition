import React from 'react';
// import TableBody from './components/TableBody';
// import TableHeader from './components/TableHeader';
// import TableFooter from './components/TableFooter';
import {TableHeader, TableBody, TableFooter} from './components';

class Table extends React.Component {
  render() {
    const {data} = this.props;
    console.log(data);

    return (
      <table>
        <TableHeader />
        <TableBody data={data} />
        <TableFooter data={data} />
      </table>
    );
  }
}

export default Table;
