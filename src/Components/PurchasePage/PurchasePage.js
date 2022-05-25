import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import { UserPurchasePage } from './UsePurchasePage';

const PurchasePage = () => {
    const { id } = useParams()
    const { data, refetch } = useQuery('orderData', () =>
        fetch(`http://localhost:5000/data/${id}`).then(res =>
            res.json()
        )
    )
    return data ? <UserPurchasePage preloaderData={data} /> : <LoadingPage />
};

export default PurchasePage;