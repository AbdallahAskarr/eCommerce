import React from 'react'

import Data from "../products.json"
const ShopCategory = ({ filterItem, setItem, menuItem, setProsucts, selectCategory }) => {
    return (
        <>
            <div className='widget-header'  >
                <h5 className='ms-2' >All Category</h5>

            </div>

            <div className='' >
                <button onClick={() => setProsucts(Data)} className={`m-2${selectCategory === "All" ? "bg-warning" : ""}`}  >All</button>
                {
                    menuItem.map((val, id) => {
                        return (
                            <button className={`m-2${selectCategory === val ? "bg-warning" : ""}`} key={id}
                                onClick={() => filterItem(val)}

                            >{val}</button>
                        )
                    })
                }
            </div>

        </>
    )
}

export default ShopCategory
