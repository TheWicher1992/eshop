import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../actions/orderActions";
import OrdersTable from "./tables/OrdersTable";
import TableLoader from "./loaders/TableLoader";

const AllOrders = () => {
  //states
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [toggleRefresh, setToggleRefresh] = useState(true);
  const { orders, loading, totalOrders, totalPages } = useSelector(
    (state) => state.getOrders
  );


  //actions
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders({ page, query }));
  }, [dispatch, page, query, toggleRefresh]);

  const refreshOrders = () => {
    setToggleRefresh(!toggleRefresh);
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const clickPage = (no) => {
    setPage(no);
  };
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const Pagination = () => {
    const PaginationArrows = ({ children }) => {
      return (
        <ul className="pagination flex-wrap pagination-md m-0 float-right">
          <li className="page-item">
            <a href="#order-table-top" className="page-link" onClick={previousPage}>
              &laquo;
            </a>
          </li>
          {children}
          <li className="page-item">
            <a href="#order-table-top" className="page-link" onClick={nextPage}>
              &raquo;
            </a>
          </li>
        </ul>
      )
    }
    if (totalPages > 1) {
      return (
        <PaginationArrows>
          {
            totalPages > 20 && (
              [...Array(18).keys()].map((i) => (
                <li key={i} className="page-item">
                  <a
                    href="#order-table-top"
                    className="page-link text-info"
                    onClick={() => clickPage(i + 1)}
                  >
                    {i + 1}
                  </a>
                </li>
              ))
            )
          }
          {
            totalPages > 20 && (<li className="page-item">
              <a
                href="#order-table-top"
                className="page-link text-info"
              >
                ...
              </a>
            </li>)
          }
          {
            totalPages > 20 &&
            <li className="page-item">
              <a
                href="#order-table-top"
                className="page-link text-info"
                onClick={() => clickPage(totalPages)}
              >
                {totalPages}
              </a>
            </li>
          }
          {
            totalPages <= 20 && (
              [...Array(totalPages).keys()].map((i) => (
                <li key={i} className="page-item">
                  <a
                    href="#order-table-top"
                    className="page-link text-info"
                    onClick={() => clickPage(i + 1)}
                  >
                    {i + 1}
                  </a>
                </li>
              ))
            )
          }
        </PaginationArrows >
      )
    }
    return <></>;
  };
  return (
    <div id="order-table-top" className="card">
      <div className="card-header border-transparent">
        <h3 className="card-title">All Orders ({totalOrders})</h3>
        <div className="card-tools">
          <div className="float-left">
            <div className="input-group input-group-md">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query !== null ? query : ""}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={refreshOrders}
                className="btn text-light btn-navbar" type="button">
                <i class="fas fa-sync"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
        {!loading && <OrdersTable orders={orders} />}
        {loading && <TableLoader />}
      </div>
      {/* /.card-body */}
      <div className="card-footer clearfix">
        <p className="m-0 float-left">
          Page {page} of {totalPages}
        </p>
        <div
          style={{ width: "80%" }}
          className="row float-right"
        >
          <Pagination />
        </div>
      </div>
      {/* /.card-footer */}
    </div>
  );
};

export default AllOrders;
