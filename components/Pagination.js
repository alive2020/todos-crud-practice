import React from 'react';

function Pagination({ todosPerPage, totalTodos, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / (todosPerPage * 2)); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map((number) => (
            <li key={number} className='page-item'>
              <a
                onClick={() => paginate(number)}
                // href='!#'
                className='page-link'
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
