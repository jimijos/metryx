import React from "react";
import * as data from "../../data";
import {
  Table,
  TableBody,
  TableCell,
  Container,
  TableHead,
  TableRow,
} from "@material-ui/core";
import useStyles from "./DataTable.css.js";

export default function DataTable() {
  const classes = useStyles();

  return (
    <div className={classes.table_container}>
      <Container>
        <h1 className={classes.title}>Table</h1>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableHeadRow}>
              <TableCell className={classes.tableCell}></TableCell>
              <TableCell className={classes.tableCell} align="center">
                1st DataSet
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                2nd DataSet
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.labels.map((label, i) => (
              <TableRow key={Math.random()} className={classes.tableBodyRow}>
                <TableCell
                  className={classes.tableCell}
                  component="th"
                  scope="row"
                >
                  {label.name}
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  {data.dataSet1[i]}
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  {data.dataSet2[i]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}
