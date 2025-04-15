import React from 'react'

const Paganation = ({ productPage, totalProducts, paginates, activePage }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productPage); i++) {
        pageNumbers.push(i);

    }
    return (
        <ul className='default-pagination lab-ul' >

            <li>
                <a href="#" onClick={() => {
                    if (activePage < pageNumbers.length) {
                        paginates(activePage - 1)
                    }
                }}>
                    <i className='icofont-rounded-left' ></i>
                </a>
            </li>


            {
                pageNumbers.map((Number) => (
                    <li key={Number} className={`page-item ${Number === activePage ? "bg-warning" : ""} `} >

                        <button className='bg-transparent' onClick={() => paginates(Number)} >{Number}</button>

                    </li>
                ))
            }


            <li>
                <a href="#" onClick={() => {
                    if (activePage < pageNumbers.length) {
                        paginates(activePage + 1)
                    }
                }}>
                    <i className='icofont-rounded-right' ></i>
                </a>
            </li>

        </ul>
    )
}

export default Paganation