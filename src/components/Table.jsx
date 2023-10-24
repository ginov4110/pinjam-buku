import React from "react";

import { FaPencilAlt, FaEraser, FaPlusSquare } from "react-icons/fa";

function Table(props) {
  const { headers = [], datas = [] } = props;
  return (
    <div className="overflow-x-auto">
      <table className="table">
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
          {datas.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.ISBN}</td>
              <td>{data.bookName}</td>
              <td>{data.pages}</td>
              <td>{data.authorName}</td>
              <td>{data.bookCategory}</td>
              <td>{data.releaseDate}</td>
              <td>{data.releaseDate}</td>
              <td>
                <button className="btn btn-sm btn-accent">
                  Pinjam sekarang
                </button>
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
                  <a>
                    <FaPlusSquare />
                  </a>
                </td>
                <td>
                  <a>
                    <FaPencilAlt
                      onClick={onEditClick ? () => onEditClick(data) : null}
                    />
                  </a>
                </td>
                <td>
                  <a>
                    <FaEraser
                      onClick={onDeleteClick ? () => onDeleteClick(data) : null}
                    />
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table, TableRent };
