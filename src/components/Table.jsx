import React from "react";

import { FaPencilAlt, FaEraser, FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Table(props) {
  const { headers = [], datas = [], isReady, onDeleteClick } = props;

  return (
    <div className="overflow-x-auto mt-5">
      <table className="table table-striped">
        {/* head */}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {isReady &&
            datas.map((data) => (
              <tr key={data.id}>
                {Object.keys(data).map((key, index) => (
                  <td key={index}>{data[key]}</td>
                ))}
                <td>
                  <Link>
                    <FaEraser
                      onClick={onDeleteClick ? () => onDeleteClick(data) : null}
                    />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRent(props) {
  const {
    headers = [],
    datas = [],
    isReady,
    onAddClick,
    onEditClick,
    onDeleteClick,
  } = props;
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table table-striped">
        {/* head */}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {isReady &&
            datas.map((data) => (
              <tr key={data.id}>
                {Object.keys(data).map((key, index) => (
                  <td key={index}>{data[key]}</td>
                ))}
                <td>
                  <Link>
                    <FaPlusSquare
                      onClick={onAddClick ? () => onAddClick(data) : null}
                    />
                  </Link>
                </td>
                <td>
                  <Link>
                    <FaPencilAlt
                      onClick={onEditClick ? () => onEditClick(data) : null}
                    />
                  </Link>
                </td>
                <td>
                  <Link>
                    <FaEraser
                      onClick={
                        onDeleteClick ? () => onDeleteClick(data.id) : null
                      }
                    />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table, TableRent };
