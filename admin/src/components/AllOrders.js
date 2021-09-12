import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../actions/orderActions";
import OrdersTable from "./tables/OrdersTable";
import TableLoader from "./loaders/TableLoader";

const AllOrders = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [toggleRefresh, setToggleRefresh] = useState(true);
  const { orders, loading, totalOrders, totalPages } = useSelector(
    (state) => state.getOrders
  );

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
    if (totalPages > 1) {
      return (
        <ul className="pagination pagination-md m-0 float-right">
          <li className="page-item">
            <button className="page-link" onClick={previousPage}>
              &laquo;
            </button>
          </li>
          {[...Array(totalPages).keys()].map((i) => (
            <li key={i} className="page-item">
              <button
                className="page-link text-info"
                onClick={() => clickPage(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              &raquo;
            </button>
          </li>
        </ul>
      );
    }
    return <></>;
  };
  return (
    <div className="card">
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
              <button className="btn btn-navbar" type="button">
                <i className="fas text-light fa-search" />
              </button>
            </div>
          </div>
          <button
            onClick={refreshOrders}
            className="btn btn-sm btn-info btn-secondary float-right"
          >
            Refresh
          </button>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
        {loading && <TableLoader />}
        {!loading && <OrdersTable orders={orders} />}
      </div>
      {/* /.card-body */}
      <div className="card-footer clearfix">
        <p className="m-0 float-left">
          Page {page} of {totalPages}
        </p>
        <div
          style={{ overflowX: "scroll", width: "80%" }}
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
