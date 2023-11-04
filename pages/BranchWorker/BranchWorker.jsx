import React from "react";
import "./BranchWorker.css";

const BranchWorker = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand nb" href="#">
            Dashboard
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: 100px;"
            >
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Order
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Manage Order
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Manage Order
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div class="container-fluid cr">
        <div class="row">
          <div class="col col-lg-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div class="col col-lg-2 clg">
            <label for="exampleFormControlInput1" class="form-label">
              Cost
            </label>
            <nav aria-label="...">
              <ul class="pagination ">
                <li class="page-item">
                  <a class="page-link pl" href="#">
                    -
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link pl" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link pl" href="#">
                    +
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Cost
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div class="col col-style col-lg-2">
            <button type="button" class="btn btn-primary btn-style">
              Add Item
            </button>
          </div>
        </div>
      </div>

      <div class="container">
        <table class="table brdr text-center">
          <thead>
            <tr>
              <th scope="col">Total items selected</th>
              <th scope="col">Cost Estimation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>

      <div class="container">
        <div class="style-total">
          <label for="exampleFormControlInput1" class="form-label fl">
            Total Cost:
          </label>
          <input
            type="email"
            class="form-control fc"
            id="exampleFormControlInput1"
          />
        </div>
      </div>

      <div class="container">
        <div class="style-total">
          <button type="button" class="btn btn-danger bbp">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchWorker;
