import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function ResHistory(Car_type, license, model , manufacturer, pricePerDay) {
  return {
    Car_type,
    license,
    model,
    manufacturer,
    pricePerDay,
    history: [
      {
        Sdate: '2020-01-05',
        Edate: '2020-01-06',
      },
      {
        Sdate: '2020-01-02',
        Edate: '2020-01-03',
      },
    ],
  };
}
  // useEffect(() => {
  //       async function fetchMyAPI() {
  //           let response = await axios.get('http://localhost:8080/api/v1/customer/verify', { params: {
  //                   email,
  //                   password
  //               }})
  //           let data = await response.data
  //           setVerify(data)
  //       }
    
  //       fetchMyAPI()
  //   }, [as])
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.Car_type}
        </TableCell>
        <TableCell align="right">{row.license}</TableCell>
        <TableCell align="right">{row.manufacturer}</TableCell>
        <TableCell align="right">{row.model}</TableCell>
        <TableCell align="right">{row.pricePerDay}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Start Date</TableCell>
                    <TableCell align="right">End Date</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.Sdate}>
                      <TableCell component="th" scope="row">
                        {historyRow.Sdate}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.Edate}
                      </TableCell>
                      <TableCell align="right">
                        {Math.round(row.pricePerDay * 100)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    Car_type: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }),
    ).isRequired,
    license: PropTypes.string.isRequired,
    pricePerDay: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  ResHistory('suv','hjgk','Kadjar', 'Renault',50),
  ResHistory('suv','hjgk','Kadjar', 'Renault',50),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Cat Type</TableCell>
            <TableCell align="right">License</TableCell>
            <TableCell align="right">Manufacturer&nbsp;</TableCell>
            <TableCell align="right">Model&nbsp;</TableCell>
            <TableCell align="right">Price Per Day&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}