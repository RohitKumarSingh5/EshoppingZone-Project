import React, { useState } from "react";

import { Table } from "react-bootstrap";
import AdminNavigation from "./AdminNavigation";

function SearchProduct() {
  const [data, setData] = useState([]);
  async function search(key) {
    if (key.length > 0) {
      let result = await fetch("http://localhost:8082/searchproduct/" + key);
      result = await result.json();
      console.warn(result);
      setData(result);
    }
  }
  return (
    <div>
      <AdminNavigation/>
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          className="form-control"
          placeholder="Enter Product Here"
        />
        {data.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>

                <th>Image</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img style={{ width: 100 }} src={item.file} />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.desc}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </div>
    </div>
  );
}

export default SearchProduct;
