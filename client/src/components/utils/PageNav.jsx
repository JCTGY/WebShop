import React from 'react';

const PageNav = ({ page, setPage, itemCount }) => {

    const onClickSetPage = (e) => {
        const clickPage = Number.parseInt(e.target.innerHTML);
        setPage(clickPage - 1);
    }

    return (
            <ul className="pagination justify-content-center">
                <li className={`page-item ${!page && "disabled"}`}>
                    <button 
                        className="page-link" 
                        onClick={ () => setPage(page ? page - 1 : 0)}>
                            Previous
                    </button>
                </li>
                <li className={`page-item ${!page && "active" }`}>
                    <button 
                        className="page-link" 
                        onClick={onClickSetPage}>
                            {page ? page : page + 1}
                    </button>
                </li>
                {(itemCount > 0 || page !== 0) &&
                <li className={`page-item ${page && "active"}`}>
                    <button 
                        className="page-link" 
                        onClick={onClickSetPage} >
                            {page ? page + 1 : page + 2}
                    </button>
                </li>
                }
                { itemCount === 6 &&
                <li className="page-item">
                    <button 
                        className="page-link" 
                        onClick={onClickSetPage}>
                            {page ? page + 2: page + 3}
                    </button>
                </li>
                }
                { itemCount === 6 &&
                <li className="page-item">
                    <button 
                        className="page-link" 
                        onClick={() => setPage(page + 1)}>
                            Next
                    </button>
                </li>
                }
            </ul>
    );
}

export default PageNav;