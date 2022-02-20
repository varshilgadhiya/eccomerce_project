import React from 'react'
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import ControlPointSharpIcon from '@material-ui/icons/ControlPointSharp';
import ErrorOutlineSharpIcon from '@material-ui/icons/ErrorOutlineSharp';
import NotInterestedSharpIcon from '@material-ui/icons/NotInterestedSharp';

const Shopping = ({data}) => {
    return (
        <div className="my-4">
            <h4 className="text-center state">{data.shopping}</h4>
            <hr />
            <div className="row m-4 px-4">
                <div className="col-3 text-center mx-4 confirmed">
                    <h6 className="my-4">Product Name</h6>
                    <h4 className="my-4">{data.ProductName}</h4>
                    <CheckCircleOutlineSharpIcon className="mb-4" />
                </div>
                <div className="col-3 text-center mx-4 active">
                    <h6 className="my-4">Product Price</h6>
                    <h4 className="my-4">{data.ProductPrice}</h4>
                    <ErrorOutlineSharpIcon className="mb-4" />
                </div>
                <div className="col-3 text-center mx-4 active">
                    <h6 className="my-4">Product Discription</h6>
                    <h4 className="my-4">{data.ProductDiscription}</h4>
                    <ErrorOutlineSharpIcon className="mb-4" />
                </div>
                <div className="col-3 text-center mx-4 recover">
                    <h6 className="my-4">Product Offer</h6>
                    <h4 className="my-4">{data.ProductOffer}</h4>
                    <ControlPointSharpIcon className="7mb-4" />
                </div>
                <div className="col-3 text-center mx-4 death">
                    <h6 className="my-4">Category</h6>
                    <h4 className="my-4">{data.ProductCategory}</h4>
                    <NotInterestedSharpIcon className="mb-4" />
                </div>
            </div>
        </div>
    )
}

export default Shopping
