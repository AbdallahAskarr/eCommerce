import React, { useState } from 'react'
import PageHeader from '../Component/PageHeader'

import Data from "../products.json";
import ProductCard from './ProductCard';
import Paganation from './Paganation';
import Search from './Search';
import ShopCategory from './ShopCategory';

const shoptitle = "Shoping 01 -12 Of 139 Results";

const Shop = () => {

    const [GridList, setGridList] = useState(true);
    const [products, setProsucts] = useState(Data)


    // paginations
    const [currentPage, setCurrentPage] = useState(1);
    const productPage = 12;
    const indexOfLastProduct = currentPage * productPage;
    const indexOfFirstProduct = indexOfLastProduct - productPage;

    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // function to current page
    const paginates = (pageNumber) => {
        setCurrentPage(pageNumber);
    }



    // filter products

    const [selectCategory, setSelectCategory] = useState("All");
    const menuItem = [...new Set(Data.map((val) => val.category))];


    const filterItem = (current) => {
        const newItem = Data.filter((newval) => {
            return newval.category === current;
        })
        setSelectCategory(current);
        setProsucts(newItem);
    }


    return (
        <div>
            <PageHeader title="Our Shop Page" curpage="Shop" />

            <div className='shop-page padding-tb' >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article className='' >


                                <div className='shop-title d-flex flex-wrap justify-content-between ' >
                                    <p>{shoptitle}</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`} >
                                        <a className='grid' onClick={() => setGridList(!GridList)} >
                                            <i className='icofont-ghost' ></i>
                                        </a>

                                        <a className='list' onClick={() => setGridList(!GridList)} >
                                            <i className='icofont-listine-dots' ></i>
                                        </a>

                                    </div>
                                </div>

                                <div>

                                    <ProductCard GridList={GridList} products={currentProducts} />
                                </div>
                                <Paganation

                                    productPage={productPage}
                                    totalProducts={products.length}
                                    paginates={paginates}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>


                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCategory

                                    filterItem={filterItem}
                                    setItem={setProsucts}
                                    menuItem={menuItem}
                                    setProsucts={setProsucts}
                                    selectCategory={selectCategory}
                                    

                                />
                            </aside>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop




// put this in the App.css file



//  .nav - profile {
//     width: 40px;
//     height: 40px;
//     border - radius: 50 %;
//     background: indigo;
//     cursor: pointer;
// }

//  .page - item {
//     width: 46px;
//     height: 46px;
//     text - align: center;
//     border - radius: 50 %;
//     box - shadow: 0px 2px 4px 0px rgba(0, 0, 0, .06);
//     background: #fff;
//     color: #101115;
//     display: flex;
//     justify - content: center;
//     align - items: center;
//     margin: 7px;
// }

//  .github {
//     height: 36px;
//     width: 36px;
//     line - height: 36px;
//     transition: all .3s ease;
//     border - radius: 50 %;
//     display: inline - flex;
//     justify - content: center;
//     align - items: center;
//     background: #0F9D58;
//     color: #fff;
// }