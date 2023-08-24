import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { roles } from "./data.js";
const RolesTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th className="action"></th>
          </tr>
        </thead>
        <tbody>
          {roles.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>Active</td>
              <td className="table__action">
                <ul className="flex items-center gap-4">
                  <li className="tooltip" data-tooltip="Edit">
                    <button>
                      <AiFillEdit />
                    </button>
                  </li>
                  <li className="tooltip" data-tooltip="Archive">
                    <button>
                      <BsArchiveFill />
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolesTable;
