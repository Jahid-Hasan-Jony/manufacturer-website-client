import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import LoadingPage from '../../LoadingPage/LoadingPage';
import DeleteModalManage from './DeleteModalManage';
import ProductList from './ProductList';

const ManageProduct = () => {
    const [deleteProductInfo, setDeleteProductInfo] = useState(null);

    const { isLoading, data, refetch } = useQuery('data', () =>
        fetch(`https://peaceful-chamber-04426.herokuapp.com/data`).then(res => res.json())
    )
    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <div>
            <div className='grid md:grid-cols-2'>
                {data.map(part => <ProductList setDeleteProductInfo={setDeleteProductInfo} key={part._id} data={part} />)}
            </div>

            {deleteProductInfo && <DeleteModalManage cancelOrder={deleteProductInfo} refetch={refetch} />}
        </div>
    );
};

export default ManageProduct;