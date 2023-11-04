import React, { useEffect, useState } from "react";
import "./BranchWorker.css";

const BranchWorker = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState("")
  const fetchItems = async () => {
    const fi = await fetch("http://192.168.248.100:2222/getItems", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await fi.json();
    console.log(data.data);
    setItems(data.data);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand nb" href="#">
            Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Order
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Manage Order
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Manage Order
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid cr">
        <div className="row">
          <div className="col col-lg-4">
            <div className="mb-3">
              <label htmlFor=""></label>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Add item
                </button>
                <ul className="dropdown-menu">
                  {items.map((i, k) => {
                    return (
                      <div key={k}>
                        {items.map(function (a) {
                          return (
                            <>
                              {a.items.map((p, q) => {
                                return (
                                  <>
                                    <li key={q}>
                                      <h6 class="dropdown-header">
                                        {p.category}
                                      </h6>
                                    </li>
                                    {p.item_details.map((r, s) => {
                                      return (
                                        <>
                                          <li key={s}>
                                            <div
                                              className="dropdown-item"
                                              onClick={()=>{setSelected(r.name)}}
                                            >
                                              {r.name}
                                            </div>
                                          </li>
                                        </>
                                      );
                                    })}
                                  </>
                                );
                              })}
                            </>
                          );
                        })}
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-lg-2 clg">
            <label for="exampleFormControlInput1" className="form-label">
              Cost
            </label>
            <nav aria-label="...">
              <ul className="pagination ">
                <li
                  className="page-item"
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  <a className="page-link pl" href="#">
                    -
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link pl" href="#">
                    {count}
                  </a>
                </li>
                <li
                  className="page-item"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <a className="page-link pl" href="#">
                    +
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col col-lg-3">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Cost
              </label>
              <div>{selected}</div>
            </div>
          </div>
          <div className="col col-style col-lg-2">
            <button type="button" className="btn btn-primary btn-style">
              Add Item
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table brdr text-center">
          <thead>
            <tr>
              <th scope="col">Total items selected</th>
              <th scope="col">Cost Estimation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pen x 2</td>
              <td>20</td>
            </tr>
            <tr>
              <td>File Paper x 100</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Ink x 1</td>
              <td>100</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>

      <div className="container">
        <div className="style-total">
          <label for="exampleFormControlInput1" className="form-label fl">
            Total Cost:
          </label>
          <input
            type="email"
            className="form-control fc"
            id="exampleFormControlInput1"
          />
        </div>
      </div>

      <div className="container">
        <div className="style-total">
          <button type="button" className="btn btn-danger bbp">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchWorker;
