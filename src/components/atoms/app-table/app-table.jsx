import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  tableContainer: {

  },
  tableBodyCell: {
    fontSize: '0.7rem',
  },
  tableHeadCell: {
    padding: '15px',
    borderTop: '1px solid #fff',
    borderBottom: '1px solid #fff',
    color: '#70808F',
    backgroundColor:  '#E1E9EC'
  },
  simpleBar: {
    maxHeight: '700px',
  }
}));

const AppTable = (props) => {
  const { columns, renderRow } = props;
  const classes = useStyles();

  const renderColumns = () => (
    columns.map((it) => (
      <TableCell
        key={it.id}
        align={it.align}
        padding={it.padding}
        style={{ minWidth: it.minWidth }}
        className={classes.tableHeadCell}
      >
        {it.label}
      </TableCell>
    )));

    return (
      <SimpleBar className={classes.simpleBar}>
        <Table stickyHeader size="large">
          <TableHead className={classes.head}>
            <TableRow classes={{ root: classes.root }}>
              {renderColumns()}
            </TableRow>
          </TableHead>
          <TableBody>{renderRow()}</TableBody>
        </Table>
      </SimpleBar>
    );
};

AppTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      label: PropTypes.string,
      padding: PropTypes.oneOf(['default', 'checkbox', 'none']),
      align: PropTypes.oneOf(['left', 'right', 'center']),
    }
  )).isRequired,
  renderRow: PropTypes.func.isRequired,
};

export default AppTable;
