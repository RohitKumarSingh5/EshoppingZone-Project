import React, { useEffect, useState } from "react";
import AdminNavigation from "./AdminNavigation";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  // console.warn("data", data);

  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8082/deleteproduct/" + id, {
      method: "DELETE",
    });
    //result = await result.json();
    //console.warn(result);
    alert("product is deleted");
    getData();
  }

  async function getData() {
    let result = await fetch("http://localhost:8082/allproducts");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <AdminNavigation/>
      <div className="col-sm-8 offset-sm-2">
        <h1>Product List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>

              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Operation A</th>
              <th>Operation B</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.productsName}</td>
                <td>
                  <img style={{ width: 100 }} src={item.image} />
                </td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>
                  <span
                    onClick={() => {
                      deleteOperation(item.productsName);
                    }}
                    className="delete"
                  >
                    Delete
                  </span>
                </td>
                <td>
                  <Link
                    to={"/update/" + item.productsName}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="update">Update</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
