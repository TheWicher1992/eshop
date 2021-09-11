import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../actions/orderActions'
import OrdersTable from './tables/OrdersTable'


const AllOrders = () => {
  const [page, setPage] = useState(1)
  const { orders, loading, totalOrders, totalPages } = useSelector(state => state.getOrders)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders(page))
  }, [dispatch, page])


  const refreshOrders = () => {
    dispatch(getOrders())
  }

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }
  const clickPage = (no) => {
    setPage(no)
  }
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const Pagination = () => {
    if (totalPages > 1) {
      return (
        <ul class="pagination pagination-md m-0 float-right">
          <li class="page-item"><button class="page-link" onClick={previousPage}>&laquo;</button></li>
          {
            [...Array(totalPages).keys()].map((i) => (
              <li class="page-item">
                <button class="page-link text-info"
                  onClick={() => clickPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))
          }
          <li class="page-item"><button class="page-link" onClick={nextPage}>&raquo;</button></li>
        </ul>
      )
    }
    return <></>
  }
  return (
    <div className="card">
      <div className="card-header border-transparent">
        <h3 className="card-title">All Orders ({totalOrders})</h3>
        <div className="card-tools">
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
        {loading && <div className="text-center flex-column justify-content-center align-items-center">
          <img
            className="animation__wobble"
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTELogo"
          />
        </div>}
        {!loading && <OrdersTable orders={orders} />}
      </div>
      {/* /.card-body */}
      <div className="card-footer clearfix">
        <p className='m-0 float-left'>Page {page} of {totalPages}</p>
        <Pagination />
      </div>
      {/* /.card-footer */}
    </div>

  )
}

export default AllOrders
