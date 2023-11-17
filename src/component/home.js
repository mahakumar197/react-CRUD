import React from "react";
import employee from "./employee";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function home() {
  return (
    <div>
      <Table striped bordered hovered>
        <thead>
          <tr>
            <th>first_name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {employee && employee.length > 0
            ? employee.map((m) => {
                return (
                  <tr>
                    <td>
                      {m.first_name}
                      {m.city}
                    </td>
                  </tr>
                );
              })
            : "no record found"}
        </tbody>
      </Table>
    </div>
  );
}

export default home;
