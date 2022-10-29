import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material'

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px'}} >
        <Table aria-label="simple table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First name</TableCell>
                    <TableCell>Last name</TableCell>
                    <TableCell align='center' >Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align='center' >{row.email}</TableCell>
                    </TableRow>
                ))}
                   
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MuiTable


const tableData = [{
    "id": 1,
    "first_name": "Bentlee",
    "last_name": "Guille",
    "email": "bguille0@columbia.edu",
    "gender": "Male",
    "ip_address": "225.206.131.65"
  }, {
    "id": 2,
    "first_name": "Tadeas",
    "last_name": "McGrorty",
    "email": "tmcgrorty1@icq.com",
    "gender": "Polygender",
    "ip_address": "2.96.173.253"
  }, {
    "id": 3,
    "first_name": "Nick",
    "last_name": "Healks",
    "email": "nhealks2@indiegogo.com",
    "gender": "Male",
    "ip_address": "249.116.139.229"
  }, {
    "id": 4,
    "first_name": "Ezequiel",
    "last_name": "Casburn",
    "email": "ecasburn3@businessinsider.com",
    "gender": "Male",
    "ip_address": "13.211.176.57"
  }, {
    "id": 5,
    "first_name": "Budd",
    "last_name": "Realff",
    "email": "brealff4@economist.com",
    "gender": "Male",
    "ip_address": "97.242.3.129"
  }, {
    "id": 6,
    "first_name": "Jazmin",
    "last_name": "Sives",
    "email": "jsives5@canalblog.com",
    "gender": "Female",
    "ip_address": "19.23.4.39"
  }, {
    "id": 7,
    "first_name": "Alix",
    "last_name": "Pidcock",
    "email": "apidcock6@unesco.org",
    "gender": "Male",
    "ip_address": "158.133.216.167"
  }, {
    "id": 8,
    "first_name": "Nobe",
    "last_name": "Howes",
    "email": "nhowes7@psu.edu",
    "gender": "Male",
    "ip_address": "52.192.47.186"
  }, {
    "id": 9,
    "first_name": "Laura",
    "last_name": "Fothergill",
    "email": "lfothergill8@nhs.uk",
    "gender": "Female",
    "ip_address": "109.94.3.67"
  }, {
    "id": 10,
    "first_name": "Patrizio",
    "last_name": "Giamelli",
    "email": "pgiamelli9@craigslist.org",
    "gender": "Male",
    "ip_address": "158.247.244.39"
  }]