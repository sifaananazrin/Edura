import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import axios from "../../../api/axios";
import requests from "../../../api/request";
import swal from "sweetalert";
import Spinner from "../../../component/Spinner";
import { config } from "../../../Helpers/axiosAdminEndpoints";
import BounceLoader from "react-spinners/BounceLoader";

function Teacher() {
  const [teacher, setTeacher] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(requests.getAllTeacher, config);
      setTeacher(response.data.teacher);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlock = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to approve the teacher ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("The teacher is teacher!", {
          icon: "success",
        });
        block(id);
      } else {
        swal("The teacher not approve");
      }
    });
  };

  const block = async (id) => {
    try {
      const response = await axios.get(`/admin/approve/${id}`, config);
      console.log(response);
      fetchData(); // calling fetchData function again
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setLoading(true);
    fetchData();
  }, [config]);

  return (
    <>
    {loading ? (
      <Spinner loading={loading} />
    ) : (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teacher &&
            teacher.map((teachers) => (
              <TableRow key={teachers.id}>
                <TableCell>{teachers.name}</TableCell>
                <TableCell>{teachers.email}</TableCell>
                <TableCell>{teachers.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={
                      teachers.status == "pending" ? "primary" : "secondary"
                    }
                    onClick={() => handleBlock(teachers._id)}
                  >
                    {teachers.status === "pending" ? "approve" : "reject"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    )}
    </>
  );
}

export default Teacher;
