import React, { useEffect, useRef } from "react";
import { Table } from "react-bootstrap";

const Announcement = () => {
  return (
    <Table striped borderless className="border border-dark m-0">
      <thead>
        <tr className="bg-gray">
          <th scope="col" className="text-uppercase p-1" colSpan="2">
            <div className="d-flex align-items-center flex-nowrap">
              <span className="d-flex m-2">Announcement</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="pr-0">Monthly arena 2021.05.13 16:00(UTC)</td>
          <td className="text-right pl-0"></td>
        </tr>
        <tr>
          <td className="pr-0">Monthly tournament 2021.05.13 16:30(UTC)</td>
          <td className="text-right pl-0"></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Announcement;
