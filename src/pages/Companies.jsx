import React, { useState } from "react";
import SideNav from "../components/SideNav";
import NavigationBar from "../components/NavigationBar";
import { Box, Button, Divider, Modal, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AddCircle } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { getCompanies } from "../features/company/companySlice";

const Companies = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.company.companies);
  useEffect(() => {
    dispatch(getCompanies());
  }, []);

  const rows = [];
  for (let i = 0; i < companyState?.length; i++) {
    rows.push({
      key: i + 1,
      id: companyState[i]._id,
      companyName: companyState[i].companyName,
      emailCeo: companyState[i].emailCeo,
      yourContact: companyState[i].yourContact,
    });
  }

  return (
    <div>
      <NavigationBar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Manage Companies
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button
              variant="contained"
              endIcon={<AddCircle />}
              onClick={() => navigate("createACompany")}
            >
              Add
            </Button>
          </Stack>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Company name</TableCell>
                  <TableCell align="left">Email&nbsp;</TableCell>
                  <TableCell align="left">Contact&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.companyName}</TableCell>
                    <TableCell align="left">{row.emailCeo}</TableCell>
                    <TableCell align="left">{row.yourContact}</TableCell>
                    <TableCell align="left">
                      <Stack spacing={2} direction="row">
                        <EditIcon
                          style={{
                            fontSize: "20px",
                            color: "blue",
                            cursor: "pointer",
                          }}
                          className="curson-pointer"
                        />
                        <DeleteIcon
                          style={{
                            fontSize: "20px",
                            color: "darkred",
                            cursor: "pointer",
                          }}
                          className="curson-pointer"
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default Companies;
