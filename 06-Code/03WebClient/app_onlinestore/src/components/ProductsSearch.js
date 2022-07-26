import { getAllByText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

const ProductsSearch = () => {
    const [product, setProduct] = useState();
    const url = "http://35.173.221.196:3003/onlinestore/products";
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setProduct(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, []);

    return (
        <div>
            <div class="card-body">
                <br />
            </div>

            <table className="table table-hover">
                <thead>
                    <tr className="text-center">
                        <th scope="col" >Id</th>
                        <th scope="col">Category</th>
                        <th scope="col">Name Product</th>
                        <th scope="col">Size</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {!product ? '1' :
                        product.map((product, index) => {
                            return <tr className="table-info" >
                                <td className="text-center">{product.id}</td>
                                <td className="text-center">{product.category}</td>
                                <td className="text-center">{product.product_Name}</td>
                                <td className="text-center">{product.size}</td>
                                <td className="text-center">{product.price}</td>
                                <td className="text-center">{product.stock}</td>
                            </tr>
                        }

                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ProductsSearch;