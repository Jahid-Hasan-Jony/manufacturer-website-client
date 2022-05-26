import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import { UserPurchasePage } from './UsePurchasePage';

const PurchasePage = () => {
    const { id } = useParams()
    const { data, refetch } = useQuery('orderData', () =>
        fetch(`https://peaceful-chamber-04426.herokuapp.com/data/${id}`).then(res =>
            res.json()
        )
    )
    return data ? <UserPurchasePage preloaderData={data} /> : <LoadingPage />
};

export default PurchasePage;