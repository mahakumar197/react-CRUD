import React from "react";
import employee from "./employee";
// import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">first_name</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {employee && employee.length > 0
            ? employee.map((m) => {
                return (
                  <tr>
                    <td>{m.first_name}</td>
                    <td>{m.city}</td>
                  </tr>
                );
              })
            : "no record found"}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
