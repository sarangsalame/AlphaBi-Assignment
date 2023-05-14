import React from 'react'
import '../styles/PaginationContainer.css'

const PaginationComponent = ({ page, setCurrPage }) => {
  return (
    <div className='page_toggler-wrapper'>
      <div className="page_toggler">
        <button onClick={() => setCurrPage("prev")}>Previous</button>
        <div className="page_list">
          {page !== 1 && <span>{page === 1 ? "" : page - 1}</span>}
          <span className="curr_page">{page}</span>
          {page !== 10 && <span>{page === 10 ? "" : page + 1}</span>}
        </div>
        <button onClick={() => setCurrPage("next")}>Next</button>
      </div>
    </div>
  )
}

export default PaginationComponent