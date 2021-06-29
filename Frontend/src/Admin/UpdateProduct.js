
import { withRouter } from "react-router-dom";
import { useEffect, useState, useHistory } from "react";
import { Link } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";

function UpdateProduct(props) {
  console.warn("props", props.match.params.id);
  const [data, setData] = useState([]);
  const [productsName, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setFile] = useState("");

  useEffect(async () => {
    let result = await fetch(
      "http://localhost:8082/getproduct/" + props.match.params.productsName
    );
    result = await result.json();
    setData(result);
    setName(result.productsName);
    setPrice(result.price);
    setDesc(result.description);
    setCategory(result.category);
    setFile(result.image);
    console.log(props);
  }, []);

  async function updateProduct() {
    let item = { productsName, category, image, price, description};

    let result = await fetch("http://localhost:8082/updateproduct/" , {
      method: "PUT",
      headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
    });
    alert("Product has been Updated");
  }
  return (
    <div>
     <AdminNavigation/>
      <div className="col-sm-6 offset-sm-3">
      <br/>
      <br/>
      <br/>
        <h1>Update Product</h1>
        <br />
        <br />
        <input
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Name"
          type="text"
          defaultValue={data.productsName}
        />{" "}
        <br />
        <br />
        <input
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          placeholder="Price"
          type="text"
          defaultValue={data.price}
        />{" "}
        <br />
        <br />
        
        <input
          onChange={(e) => setDesc(e.target.value)}
          className="form-control"
          placeholder="Description"
          type="text"
          defaultValue={data.description}
        />{" "}
        <br />
        <br />
        <input
          onChange={(e) => setCategory(e.target.value)}
          className="form-control"
          placeholder="Category"
          type="text"
          defaultValue={data.category}
        />{" "}
        <br />
        <br />
        <input
          onChange={(e) => setFile(e.target.value)}
          placeholder="File"
          className="form-control"
          type="text"
          defaultValue={data.image}
        />{" "}
        <br />
        <br />
        <br />
        <img className="ltt2" style={{ width: 50 }} src={data.image} />
        <br />
        <br />
        <Link to="/">
          <button
            onClick={() => updateProduct(data.id)}
            className="btn btn-primary ltt"
          >
            Update Product
          </button>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(UpdateProduct);
