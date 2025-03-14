import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from "@mui/material";
import { contactData } from "../../Data/ContactData.tsx";

export default function ContactTable() {
  return (
    <TableContainer>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>
              Name
            </TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((contact) => {
            return (
              <TableRow key={contact.name} >
                {
                  Object.entries(contact).map(([key, value]) => {

                    if (key === "skills") {
                      return (
                        <TableCell>
                          {value.join(', ')}
                        </TableCell>
                      )
                    } else if (key !== 'id') {
                      return (
                        <TableCell>
                          {value}
                        </TableCell>
                      )
                    }
                    return ""
                  })
                }
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}